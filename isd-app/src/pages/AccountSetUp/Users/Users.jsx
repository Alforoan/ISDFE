import './Users.scss';
import React, { useState } from 'react';
import { Flex, Form, Input, Select } from 'antd';
import useCompanyAuthApi from '../../../utilities/formPostLogic/companyAuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../../redux/slices/companyCreateSlice';

const AccountSetUpUsers = () => {
	const options = [
		{ value: 'supervisor', label: 'Instructional design supervisor' },
		{ value: 'manager', label: 'Project Manager' },
		{ value: 'stakeholder', label: 'Stakeholder' },
		{ value: 'expert', label: 'Subject Matter Expert' },
		{ value: 'designer', label: 'Instructional System Designer' },
		{ value: 'staff', label: 'Support Staff' },
	];
	const { submitForm, form } = useCompanyAuthApi();
	const dispatch = useDispatch();
	const completeFormData = useSelector(state => state.companyReducer);

	const sendInvitations = async data => {
		try {
			await dispatch(setUsers(data));

			// if this ends up being the last page of the form we verify if all the data has accumulated properly
			if (
				!completeFormData.fullname ||
				!completeFormData.password ||
				!completeFormData.companyName ||
				!completeFormData.users
			) {
				console.log(completeFormData, 'test');
				console.log('Please fill out all the required fields.');
				// MODAL HERE THAT POPS SAYING INCOMPLETE???
				return;
			}
			const res = await submitForm(data);

			console.log(res);

			// Probably need some modal and redirect to dashboard
			// There is no error handling for this form?

			form.resetFields();
		} catch (error) {
			console.log(error);
		}
	};

	const [invitations, setInvitations] = useState([
		{ email: '', role: '' }, // Initial object
	]);

	const handleInputChange = (value, index, field) => {
		const newInvitations = [...invitations];
		newInvitations[index][field] = value;
		setInvitations(newInvitations);
	};

	const addTeammates = () => {
		setInvitations([...invitations, { email: '', role: '' }]);
	};
	return (
		<div className='form-container account-setup'>
			<Form
				className={'form invitation-input'}
				layout='vertical'
				onFinish={() => sendInvitations(invitations)}
				size={'large'}
				name={'invitationsList'}>
				<h3 className='form-title'>Instructional Design Workspace</h3>
				<h4 className='form-subtitle'>
					Let’s invite the users and assign roles
				</h4>
				{invitations.map((item, index) => (
					<Flex key={index} gap={'middle'}>
						<Form.Item label='Email' name={`email${index}`} rules={[{ required: true, message: 'Please input email' },{
							validator(rule,value){
								return new Promise((resolve,reject)=>{
									if(value===undefined || value.length===0 || value.match(email)!=null){
										resolve();
									}else{
										reject("Input should be a valid email");
									}
								})
							}
						}]}>
							<Input
								placeholder='input email'
								value={item.email}
								onChange={e =>
									handleInputChange(
										e.target.value,
										index,
										'email',
									)
								}

							/>
						</Form.Item>
						<Form.Item label='Role' name={`role${index}`} rules={[{required:true,message: 'Please select a role'}]}>
							<Select
								options={options}
								style={{ height: 48, width: 270 }}
								placeholder={'Select Role'}
								value={item.role}
								onChange={value =>
									handleInputChange(value, index, 'role')
								}
							/>
						</Form.Item>
					</Flex>
				))}
				<label
					onClick={addTeammates}
					style={{
						cursor: 'pointer',
						color: '#0774c3',
						marginRight: 'auto',
					}}>
					+ Add teammates
				</label>

				<div className='button-container'>
					<button type='submit' className='button signup'>
						Invite all
					</button>
				</div>
			</Form>
		</div>
	);
};

export default AccountSetUpUsers;
