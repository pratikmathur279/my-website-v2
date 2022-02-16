import express from 'express';
var router = express.Router();
import path from "path";
import fs from 'fs';
import { v4 as uuid } from 'uuid';

import AWS from "aws-sdk";

AWS.config.update({
    region: "us-east-1"
});

// fetch all projects from the database
var docClient = new AWS.DynamoDB.DocumentClient();

const PROJECTS_TABLE = 'my-website-projects-data';

// get all projects
router.get('/api/projects', async (req, res, next) => {
    let data = (req.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName: PROJECTS_TABLE,
    };


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
router.post('/api/add-projects', async (req, res, next) => {
    const data = JSON.parse(req.body);
    const timestamp = new Date().getTime();

    data.forEach(element => {
        const params = {
            TableName: PROJECTS_TABLE,
            Item: {
                id: uuid(),
                name: element.name,
                url: element.url,
                description: element.description,
                github: element.github,
                live_instance: element.live_instance,
                heading: element.heading,
                index: element.index,
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
router.post('/api/projects', async (req, res, next) => {
    const data = JSON.parse(req.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName: PROJECTS_TABLE,
        Item: {
            id: uuid(),
            name: data.name,
            url: data.url,
            description: data.description,
            github: data.github,
            live_instance: data.live_instance,
            heading: data.heading,
            index: data.index,
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