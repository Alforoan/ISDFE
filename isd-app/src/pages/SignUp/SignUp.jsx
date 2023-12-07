import React, { useState } from 'react';
import './SignUp.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const MyInput = React.forwardRef(({ name, type, label, ...rest }, ref) => {
	return (
		<div className='form-input'>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} {...rest} ref={ref} />
		</div>
	);
});

MyInput.displayName = 'MyInput';

const errorSchema = yup
	.object({
		name: yup
			.string()
			.required('Enter your first and last name.')
			.matches(
				/^[a-zA-Z]+\s[a-zA-Z]+$/,
				'Enter both first and last name',
			),
		email: yup.string().email().required('Enter email.'),
		password: yup
			.string()
			.required('No password provided.')
			.min(8, 'Password is too short - should be 8 chars minimum.')
			.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required('Please confirm your password.'),
	})
	.required();

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: yupResolver(errorSchema),
	});
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const onSubmitConsole = async data => {
		console.log('dink');
		//! add submit logic here post api later

		//Clearing success message if still shown
		setShowSuccessMessage(false);

		// simulating loading time for dev testing
		await new Promise(resolve => setTimeout(resolve, 5000));
		console.log(data);

		//Showing success message
		setShowSuccessMessage(true);

		//Clearing success message
		setTimeout(() => {
			setShowSuccessMessage(false);
		}, 5000);

		reset();
	};

	return (
		<div className='form-container'>
			<form className='form' onSubmit={handleSubmit(onSubmitConsole)}>
				<h3 className='form-title'>ISD Design</h3>
				<fieldset>
					<MyInput
						name='name'
						label='Full Name '
						type='input'
						placeholder='Thomas'
						{...register('name')}
					/>
					<p>{errors.name?.message}</p>
				</fieldset>
				<fieldset>
					<MyInput
						name='email'
						label='Email '
						type='input'
						placeholder='abc@gmail.com'
						{...register('email')}
					/>
					<p>{errors.email?.message}</p>
				</fieldset>
				<fieldset>
					<MyInput
						name='password'
						label='Password '
						type='password'
						placeholder='**'
						{...register('password')}
					/>
					<p>{errors.password?.message}</p>
				</fieldset>
				<fieldset>
					<MyInput
						name='passwordConfirmation'
						label='Repeat password '
						type='password'
						placeholder='**'
						{...register('passwordConfirmation')}
					/>
					<p>{errors.passwordConfirmation?.message}</p>
				</fieldset>

				<div className='button-container'>
					{/* Can replace later for default loading and submission success messages */}
					{isSubmitting && (
						<div className='loading-message'>Loading...</div>
					)}
					{showSuccessMessage && (
						<p className='success-message'>
							Form has been submitted!
						</p>
					)}

					<button className='button signup' disabled={isSubmitting}>
						Sign Up
					</button>
					<button className='button login' disabled={isSubmitting}>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

MyInput.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default SignUp;
