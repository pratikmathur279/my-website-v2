import Dispatcher from '../dispatcher/dispatcher';
import Request from 'superagent';
import Actions from "./Action";

class MyActions extends Actions {
    constructor() {
        super();
    }


    getSkills(skills, callback) {
        this.get('/api/skills', (err, res) => {
            var data = (res.body);
            data.sort((a, b) => (a.index > b.index) ? 1 : -1);
            callback(data);
        });
    }

    sendContact(contact, callback) {
        // console.log(contact);
        this.post('/api/contact', contact, (res, err) => {
            if (!err) {
                console.log("data saved!");
                callback(true);
            }
        });
    }

    sendEmail(email, callback) {
        // console.log(email);
        this.post('/api/send-email', email, (res, err) => {
            if (!err) {
                console.log("data saved!");
                callback(true);
            }
        });
    }

    getExperience(experience, callback) {
        this.get('/api/experiences', (err, res) => {
            var data = res.body;
            // console.log(data);
            for (var i in data) {
                var temp = data[i].responsibilities;
                temp = temp.split(";");
                data[i].responsibilities = temp;
                // console.log(data.length);
                if (i == data.length - 1) {
                    data.sort((a, b) => (a.index > b.index) ? 1 : -1);
                    callback(data);
                }
            }
        });
    }

    getProjects(experience, callback) {
        this.get('/api/projects', (err, res) => {
            var data = res.body;

            data.sort((a, b) => (a.index > b.index) ? 1 : -1);
            callback(data);
        });
    }

    getTechnology(tech, callback) {
        this.get('/api/technology', (err, res) => {
            var data = res.body;
            data.sort((a, b) => (a.index > b.index) ? 1 : -1);
            callback(data);
        });
    }

    getInstagramFeed(feed, callback) {
        this.get('https://api.instagram.com/oembed?url=' + feed, (err, res) => {
            callback(res.body);
        })
    }
}

export default MyActions;