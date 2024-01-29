import { logOut } from '../../redux/slices/authSlice';
import './CancelButton.scss';
import { useDispatch } from 'react-redux';

const CancelButton = ({ text }) => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logOut());
	};

	return (
		<>
			<button onClick={handleLogout} className='btn-blue'>
				{text}
			</button>
		</>
	);
};

export default CancelButton;
