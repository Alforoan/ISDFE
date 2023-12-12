import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.scss';
import GoogleIcon from '../../assets/icons/google.svg';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errorSchema = yup
	.object({
		email: yup.string().email().required('Enter email.'),
		password: yup.string().required('No password provided.'),
	})
	.required();

const LogIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({ resolver: yupResolver(errorSchema) });
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const submitLogIn = async data => {
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
		<div className='form-container login'>
			<form className='form' onSubmit={handleSubmit(submitLogIn)}>
				<h3 className='form-title'>ISD Design</h3>
				<fieldset>
					<div className='form-input'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							placeholder='name@company.com'
							{...register('email')}
						/>
					</div>
					<p>{errors.email?.message}</p>
				</fieldset>
				<fieldset>
					<div className='form-input'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							placeholder='**'
							{...register('password')}
						/>
					</div>
					<p>{errors.password?.message}</p>
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
						Log In
					</button>
					<span>or</span>
					{/* backend for google auth needs to be implemented on the backend later */}
					<a href='/backend-route' className='button google-login'>
						<div>
							<img
								src={GoogleIcon}
								alt='Google Login'
								className='google-icon'
							/>
							<span>Sign in with Google</span>
						</div>
					</a>
					<div className='back-to-login'>
						<p>{`Don't have an account?`}</p>
						&nbsp;
						<Link to='/signup'>Create</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
