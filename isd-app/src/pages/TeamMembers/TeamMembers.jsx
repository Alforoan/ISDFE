import { useState } from 'react';
import useUserAuthApi from '../../utilities/formPostLogic/userAuthApi';
import './TeamMembers.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Table from '../../utilities/tableCreator/teammates/Table';
import { useEffect } from 'react';

const TeamMembers = () => {
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

	useEffect(() => {
		console.log(members);
	}, [members]);

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
			</div>
		</main>
	);
};

export default TeamMembers;
