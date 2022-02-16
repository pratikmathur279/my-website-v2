import axios from 'axios';

class Actions {
    getSkills(skills, callback) {
        axios('/api/skills', {
            crossDomain: true
        })
            .then((res) => {
                var data = (res.data);
                //   console.log(data);
                data.sort((a, b) => (a.index > b.index) ? 1 : -1);
                callback(data);
            });
    }

    sendContact(contact, callback) {
        // console.log(contact);
        axios.post('https://n6j1yr1b43.execute-api.us-east-1.amazonaws.com/dev/contact', contact, { crossDomain: true })
            .then((res, err) => {
                if (!err) {
                    console.log("data saved!");
                    callback(true);
                }

            })
    }

    sendEmail(email, callback) {
        console.log(email);
        axios.post('/api/send-email', email, { crossDomain: true })
            .then((res, err) => {
                if (!err) {
                    console.log("data saved!");
                    callback(true);
                }

            })
    }

    getExperience(experience, callback) {
        axios('/api/experience', {
            crossDomain: true
        })
            .then((res) => {
                var data = res.data;
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
            })
    }

    getProjects(experience, callback) {
        axios('/api/projects', {
            crossDomain: true
        })
            .then((res) => {
                var data = res.data;
                // console.log(data);
                data.sort((a, b) => (a.index > b.index) ? 1 : -1);
                callback(data);
            })
    }

    getTechnology(tech, callback) {
        axios('/api/technology', {
            crossDomain: true
        })
            .then((res) => {
                var data = res.data;
                data.sort((a, b) => (a.index > b.index) ? 1 : -1);
                callback(data);
            })
    }

    getInstagramFeed(feed, callback) {
        axios('https://api.instagram.com/oembed?url=' + feed)
            .then((res) => {
                callback(res.data);
            });

    }
}

export default Actions;