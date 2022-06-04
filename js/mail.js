/*

  A mail-sending script specific to the contact page.

*/

emailjs.init("zsZRinthXrCCw98WT");

function send() {
	let lblfeedbk = byID("ContactFdbk");

	let name = byID("ContactName").value
	let email = byID("ContactDeets").value
	let message = byID("ContactMessage").value
	
	try {
		validateProvided(name, "Name")
		validateProvided(email, "return E-Mail")
		validateEMail(email)
		validateProvided(message, "Message")

		emailjs.send( 
			'service_gf8g8wg', 
			"template_25vqast",  
			{
				from_name: name,
				reply_email: email ,
				message: message
			},
			"zsZRinthXrCCw98WT" 
			);

		lblfeedbk.innerHTML = "Message sent! You'll get a reciept by mail. "
		lblfeedbk.style = "color: green;"
	} catch (e) {
		lblfeedbk.innerHTML = "Sorry, That message couldn't be sent.<br> " + e
		lblfeedbk.style = "color: red;"
		console.log(e)
	}
}

function byID (name) {
	return document.getElementById(name)
}

function validateProvided(field, messageFrag) {
	if (field == "" || field == null)
		throw 'Please provide a ' + messageFrag
}

function validateEMail(address) {
	// RFC 5322 standard email regex. Absolute unit.
	if (
		!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
		.test(address)
	)
		throw 'That email address appears to be invalid.'
}