import express from 'express';
var router = express.Router();
import path from "path";
import fs from 'fs';

import AWS from "aws-sdk";

import Blend from '../model/Blend.js';

AWS.config.update({
    region: "us-east-1"
});

// create loan in blend
router.post('/api/create-loan', async (req, res, next) => {
    let data = (req.body);

    data['cell_phone'] = data['cell_phone'].replace(/[^0-9]/g, '');

    let timestamp = data['dob'] + 'T00:00:00.000Z';
    data['dob'] = timestamp;

    if (!data['loan_type']) {
        data['loan_type'] = 'Refinance';
    }

    data['state'] = data['state'].toUpperCase();

    //map blend users before creating database record
    if (data['loan_type'] == 'Refinance') {
        if (data['business_entity'] == 'RateCloud') {
            data['lead_source_id'] = (process.env.APP_ENV === 'local' && process.env.APP_BETA == false == false) ? 279 : 344;
        } else {
            data['lead_source_id'] = (process.env.APP_ENV === 'local' && process.env.APP_BETA == false) ? 279 : 350;
        }
    }

    if (process.env.APP_ENV === 'local') {
        if (data['business_entity'] == 'RateCloud') {
            let rc_state_array = ['FL', 'CO', 'GA', 'MN'];

            data['blend_user'] = rc_state_array.includes(data['state']) ? 'Josh King' : 'Rachel Buttner';
        }
        else if (data['business_entity'] == 'Total Mortgage') {
            let tms_state_array = ['IL', 'GA', 'TX'];

            data['blend_user'] = tms_state_array.includes(data['state']) ? 'Josh King' : 'Rachel Buttner';
        }
    }
    else {
        if (data['business_entity'] == 'RateCloud') {
            let rc_state_array = ['FL', 'CO', 'GA', 'MN'];

            data['blend_user'] = rc_state_array.includes(data['state']) ? 'Deborah Kennedy' : 'Mike Dzikowski';
        }
        else if (data['business_entity'] == 'Total Mortgage') {
            let tms_state_array = array('IL', 'GA', 'TX');

            data['blend_user'] = tms_state_array.includes(data['state']) ? 'Janet Dzikowski' : 'Jim McNiff';
        }
    }

    // create loan application in blend
    let blend = new Blend(data['business_entity']);
    let resp = await blend.createHomeLendingApp(data);


    if (resp) {
        if (data['sf_lead_id']) {
            // loan = Ten03Loans:: where('sf_lead_id', data['sf_lead_id']) -> orderBy('id', 'DESC') -> first();

            // loan -> blend_id = resp -> id;

            // loan -> blend_redirect_url = isset(resp -> redirectUrl) ? resp -> redirectUrl : '';
            // loan -> status = 'Approved';
            // loan -> update(data);

            // sf = new Salesforce(data);
            // leadId = sf->updateLead();

            data['blend_id'] = resp.id;
        }
        else {
            // loan = new Ten03Loans(data);
            // loan -> blend_id = resp -> id;
            // loan -> blend_redirect_url = isset(resp -> redirectUrl) ? resp -> redirectUrl : '';
            // loan -> status = 'Approved';
            // loan -> save();

            // sf = new Salesforce(data);
            // leadId = sf->updateLead();        

            data['blend_id'] = resp.id;
        }

        let blendUpdate = await blend.assignUsers(data);

        // print_r(blendUpdate);
        // Log::info(blendUpdate);

        // UpdateBlend:: dispatch(loan -> blend_id);

        res.json(resp);
    }
    else {
        res.json(resp);
    }
});

export default router;