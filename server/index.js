// server/index.js
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";

import multer from 'multer';
var upload = multer();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express from "express";

import config from './config/config.js';

// import routes
import projectsRouter from './routes/projects.js';
import experiencesRouter from './routes/experiences.js';
import skillsRouter from './routes/skills.js';
import technologyRouter from './routes/technology.js';
import emailRouter from './routes/email.js';

const PORT = process.env.PORT || 3010;

const app = express();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());

app.use(express.static(path.resolve(__dirname, '../public')));

app.use((err, req, res, next) => {
	res.locals.error = err;
	const status = err.status || 500;
	res.status(status);
	res.render('error');
});

app.use(cors({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"allowedHeaders": ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Cache-Control']
}));

// automated task scheduler
// scheduler();

// import api routes here
app.use('/', projectsRouter);
app.use('/', experiencesRouter);
app.use('/', skillsRouter);
app.use('/', technologyRouter);
app.use('/', emailRouter);


app.get("/api", (req, res) => {
	res.json({ message: "My Website" });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});