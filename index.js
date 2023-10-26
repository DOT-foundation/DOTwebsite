const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 8080;
require("dotenv").config();

app.use(express.json());
app.use(express.static('public'));

/**
 * Send a POST request to /contact-us with the following body:
 * {
 * 	name: "Your Name",
 * 	message: "Your Message"
 * }
 */
app.post('/contact-us', (req, res) => {
	console.log("Got a request");
	const { name, message } = req.body;
	console.log(req.body);

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.email,
			pass: process.env.password
		}
	});

	let mailOptions = {
		from: process.env.email,
		to: process.env.email,
		subject: 'User Message from ' + name,
		text: message
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.send("{success: true}");
			return
		}
	});
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
	console.log(`Email API listening at :${process.env.PORT}/contact-us`);
	console.log(`Website listening at :${process.env.PORT}/`);
})