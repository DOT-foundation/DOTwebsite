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
	const { name, message } = req.body;
	console.log("message: " + JSON.stringify(req.body));

	// TODO USE GOOGLE XOATH2 INSTEAD OF U/PASS
	// https://stackoverflow.com/questions/31473292/etimedout-connect-error-using-nodemailer-in-nodejs-openshift-application
	let transporter = nodemailer.createTransport({
		name: process.env.email_host,
		host: process.env.email_host,
		port: process.env.email_port, 
		secure: false,
		requireTLS: true,
		logger: true,
		debug: true,
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


	console.log("Sending email...");
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.send("{success: false}")
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
	console.log(`Email API listening at :${process.env.PORT}/contact-us using user ${process.env.email}`);
	console.log(`Website listening at :${process.env.PORT}/`);
})