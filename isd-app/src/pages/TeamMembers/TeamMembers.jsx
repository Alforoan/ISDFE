import { useState } from 'react';
import useUserAuthApi from '../../utilities/formPostLogic/userAuthApi';
import './TeamMembers.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Table from '../../utilities/tableCreator/teammates/Table';
import { MyInput } from '../../utilities/utils';

const TeamMembers = () => {
	const { submitForm } = useUserAuthApi();
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const navigate = useNavigate();

	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Jake',
			status: true,
			role: 'Stakeholder',
			email: 'da@da.com',
		},
		{
			id: 2,
			name: 'Jake',
			status: true,
			role: 'Stakeholder',
			email: 'da@da.com',
		},
		{
			id: 3,
			name: 'Bill',
			status: false,
			role: 'Product Manager',
			email: 'Bill@Bill.com',
		},
		{
			id: 4,
			name: 'Sammy',
			status: true,
			role: 'ISD',
			email: 'Sammy@Sammy.com',
		},
		{
			id: 5,
			name: 'Steve',
			status: false,
			role: 'Product Manager',
			email: 'Steve@Steve.com',
		},
	]);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const submitAddMember = async data => {
		try {
			// Clearing success message if still shown
			setShowSuccessMessage(false);

			//! change this later need to add member adding
			await submitForm('register', data);

			// Showing success message
			setShowSuccessMessage(true);

			// Pop up modal here saying check email?

			reset();

			// Clearing success message
			setTimeout(() => {
				setShowSuccessMessage(false);
				navigate('/');
			}, 3000);
		} catch (error) {
			setSubmitError(true);

			setTimeout(() => {
				setSubmitError(false);
			}, 3000);
		}
		reset();
	};

	return (
		<main className='table-main'>
			<div className='table-container'>
				<div className='members'>
					<div className='table-header-container'>
						<div>Team members</div>
						<div className='user-count'>{members.length} users</div>
					</div>
					<Table tableData={members} setMembers={setMembers} />
				</div>
				{/* Can replace later for default loading and submission success messages */}
				{isSubmitting && (
					<div className='loading-message'>Loading...</div>
				)}
				{submitError && (
					<p className='error-message'>
						There was an error adding teammates.
					</p>
				)}
				{showSuccessMessage && (
					<p className='success-message'>
						Teammates have been added!
					</p>
				)}
			</div>
		</main>
	);
};

export default TeamMembers;
