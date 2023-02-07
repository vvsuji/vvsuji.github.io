import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = (props) => {
	const [contactName, setContactName] = useState('');
	const [contactEmail, setContactEmail] = useState('');
	const [contactMessage, setContactMessage] = useState('');
	const form = useRef();
	const [emailSent, setEmailSent] = useState(false);

	if (props.data) {
		var message = props.data.contactmessage;
	}

	const submit = (e) => {
		e.preventDefault();

		if (contactName && contactEmail && contactMessage) {
			const serviceId = 'service_5ktwefi';
			const templateId = 'template_30bye5i';
			const publicKey = 'DCsrAfFoL-T3VJznO';

			emailjs
				.sendForm(serviceId, templateId, form.current, publicKey)
				.then((response) => console.log(response.text))
				.then((error) => console.log(error.text));

			setContactName('');
			setContactEmail('');
			setContactMessage('');
			setEmailSent(true);
		} else {
			alert('Please fill in all fields.');
		}
	};

	return (
		<section id='contact'>
			<div className='row'>
				<div className='eight columns'>
					<form
						ref={form}
						onSubmit={submit}
						id='contactForm'
						name='contactForm'>
						<fieldset>
							<div class='user-box'>
								<label htmlFor='contactName'>
									Name <span className='required'>*</span>
								</label>
								<input
									required=''
									name=''
									type='text'
									size='35'
									id='contactName'
									// name='contactName'
									value={contactName}
									onChange={(e) => setContactName(e.target.value)}
								/>
								{/* 
								<input
									type='text'
									
								/> */}
							</div>
							<div>
								<label htmlFor='contactEmail'>
									Email <span className='required'>*</span>
								</label>
								<input
									type='text'
									size='35'
									id='contactEmail'
									name='contactEmail'
									value={contactEmail}
									onChange={(e) => setContactEmail(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='contactMessage'>
									Message <span className='required'>*</span>
								</label>
								<textarea
									cols='34'
									rows='5'
									id='contactMessage'
									name='contactMessage'
									value={contactMessage}
									onChange={(e) =>
										setContactMessage(e.target.value)
									}></textarea>
							</div>
							<div>
								<button className='submit'>Send</button>
								<span id='image-loader'>
									<img alt='' src='images/loader.gif' />
								</span>
							</div>
						</fieldset>
					</form>

					{/* <div id='message-warning'> Error boy</div>
					<div id='message-success'>
						<i className='fa fa-check'></i>Your message was sent, thank you!
						<br />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
