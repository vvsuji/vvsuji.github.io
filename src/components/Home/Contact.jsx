import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, TextField } from '@mui/material';
import validate from 'validate.js';
import emailjs from 'emailjs-com';

const USER_ID = process.env.REACT_APP_EMAILJS_USERID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_template_b7565wv;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_service_3p97yie;

const schema = {
	name: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 128,
		},
	},
	email: {
		presence: { allowEmpty: false, message: 'is required' },
		email: true,
		length: {
			maximum: 300,
		},
	},
};

const ContactForm = () => {
	const [contactMessage, setContactMessage] = useState('');
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
			.then((res) => console.log('SUCCESS!', res.status, res.text))
			.catch((error) => console.log('FAILED...', error));

		setFormState((formState) => ({
			...formState,
			isValid: false,
			values: {},
			touched: {},
			errors: {},
		}));
	};

	const [formState, setFormState] = useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {},
	});

	useEffect(() => {
		const errors = validate(formState.values, schema);

		setFormState((formState) => ({
			...formState,
			isValid: errors ? false : true,
			errors: errors || {},
		}));
	}, [formState.values]);

	const handleChange = (e) => {
		e.persist();

		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[e.target.name]:
					e.target.type === 'checkbox' ? e.target.checked : e.target.value,
			},
			touched: {
				...formState.touched,
				[e.target.name]: true,
			},
		}));
	};

	const hasError = (field) =>
		formState.touched[field] && formState.errors[field] ? true : false;

	return (
		<div>
			<form headers='application/json' name='contact-form' onSubmit={sendEmail}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder='Name'
							label='Name *'
							variant='outlined'
							size='medium'
							name='name'
							id='name'
							fullWidth
							helperText={hasError('name') ? formState.errors.name[0] : null}
							error={hasError('name')}
							onChange={handleChange}
							type='text'
							value={formState.values.name || ''}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder='E-mail'
							label='E-mail *'
							variant='outlined'
							size='medium'
							name='email'
							fullWidth
							helperText={hasError('email') ? formState.errors.email[0] : null}
							error={hasError('email')}
							onChange={handleChange}
							type='email'
							value={formState.values.email || ''}
						/>
					</Grid>
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
							onChange={(e) => setContactMessage(e.target.value)}></textarea>
					</div>
					<Grid item xs={12}>
						<Button
							size='large'
							variant='contained'
							type='submit'
							color='primary'
							disabled={!formState.isValid}>
							Send
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default ContactForm;
