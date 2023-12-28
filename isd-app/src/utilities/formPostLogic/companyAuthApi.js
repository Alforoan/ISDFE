// useAuthApi.js
import { useCreateMutation } from '../../redux/RTKQueries/createCompanyQuery';

const useCompanyAuthApi = () => {
	const [create] = useCreateMutation();
	const abortController = new AbortController();

	const submitForm = async formData => {
		const { data, error } = await create(formData, {
			signal: abortController.signal,
		});

		if (error) {
			throw error;
		}

		if (data) {
			abortController.abort();
			return data;
		}
	};

	return { submitForm };
};

export default useCompanyAuthApi;
