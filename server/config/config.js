// config file with third party providers credentials

import dotenv from 'dotenv';

dotenv.config();

const config = {
    'name': process.env.APP_NAME,
    'env': process.env.APP_ENV,
    'debug': process.env.APP_DEBUG,
    'url': process.env.APP_URL,
    'timezone': process.env.APP_TIMEZONE,

    'beta': {
        'is_beta': process.env.APP_BETA
    },

    'mailgun': {
        'domain': process.env.MAILGUN_DOMAIN,
        'secret': process.env.MAILGUN_SECRET,
        'endpoint': process.env.MAILGUN_ENDPOINT,
    },

    'aws': {
        'aws_lambda_url': process.env.AWS_LAMBDA_URL,
        'aws_credit': process.env.AWS_CREDIT
    }
};

export default config;