import express from 'express';
var router = express.Router();
import path from "path";
import fs from 'fs';
import { v4 as uuid } from 'uuid';

import AWS from "aws-sdk";

AWS.config.update({
    region: "us-east-1"
});

const EXPERIENCES_TABLE = 'my-website-experiences-data';

// get projects
router.get('/api/experiences', async (req, res, next) => {
    let data = (req.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName: EXPERIENCES_TABLE,
    };

    // fetch all projects from the database
    var docClient = new AWS.DynamoDB.DocumentClient();
    docClient.scan(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            res.json(error);
        }
        else {
            res.json(result.Items);
        }
    });
});

// add multiple projects
router.post('/api/add-experiences', async (req, res, next) => {
    const data = JSON.parse(req.body);
    const timestamp = new Date().getTime();

    data.forEach(element => {
        const params = {
            TableName: EXPERIENCES_TABLE,
            Item: {
                id: uuid(),
                name: element.name,
                client: element.client,
                index: element.index,
                position: element.position,
                from: element.from,
                to: element.to,
                environment: element.environment,
                responsibilities: element.responsibilities,
                checked: false,
                createdAt: timestamp,
                updatedAt: timestamp,
            },
        };

        // write the todo to the database
        docClient.put(params, (error) => {
            // handle potential errors
            if (error) {
                console.error(error);
            }
            else {
                console.log("Added item!");
                res.send("Added Item!");
            }
        });
    });
});

// add single project
router.post('/api/experiences', async (req, res, next) => {
    const data = JSON.parse(req.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName: EXPERIENCES_TABLE,
        Item: {
            id: uuid(),
            name: data.name,
            client: data.client,
            index: data.index,
            position: data.position,
            from: data.from,
            to: data.to,
            environment: data.environment,
            responsibilities: data.responsibilities,
            checked: false,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };

    // write the todo to the database
    docClient.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
        }
        else {
            console.log("Added item!");
            res.send("Added Item!");
        }
    });
});


export default router;