import express from 'express';
var router = express.Router();
import path from "path";
import fs from 'fs';
import { v4 as uuid } from 'uuid';

import AWS from "aws-sdk";
const ses = new AWS.SES()
const myEmail = 'pratikmathur279@gmail.com';
const myDomain = 'www.pratikmathur.com';

AWS.config.update({
    region: "us-east-1"
});

// fetch all projects from the database
var docClient = new AWS.DynamoDB.DocumentClient();

const PROJECTS_TABLE = 'my-website-projects-data';

// add single project
router.post('/api/send-email', async (req, res, next) => {
    console.log(req.body);

    try {
        const emailParams = generateEmailParams(req.body)
        const data = await ses.sendEmail(emailParams).promise()
        res.send(generateResponse(200, data));
    } catch (err) {
        res.send(generateError(500, err));
    }
});

function generateResponse(code, payload) {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': myDomain,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(payload)
    }
}

function generateError(code, err) {
    console.log(err)
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': myDomain,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(err.message)
    }
}

function generateEmailParams(body) {
    const { email, name, message, subject } = (body);
    // console.log(email, name, message, subject)
    if (!(email && name && message && subject)) {
        throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'message\', \'subject\'.')
    }

    return {
        Source: myEmail,
        Destination: { ToAddresses: [myEmail] },
        ReplyToAddresses: [email],
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `Message sent from email ${email}:\nName: ${name} \nSubject: ${subject} \nMessage: ${message}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `You received a message from ${myDomain}!`
            }
        }
    }
}

export default router;