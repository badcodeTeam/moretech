import { useNavigate } from 'react-router-dom';
import { SelectMapWrapper, SelectMapOption } from './select-map.styles';

export const SelectMap = () => {
	const navigate = useNavigate();

	const isSelected = window.location.pathname.split('/')[2];

	console.log(isSelected);

	return (
		<SelectMapWrapper>
			<SelectMapOption
				isSelected={isSelected === 'atms'}
				onClick={() => navigate('/map/atms')}>
				Банкоматы
			</SelectMapOption>
			<SelectMapOption
				isSelected={isSelected === 'offices'}
				onClick={() => navigate('/map/offices')}>
				Отделения
			</SelectMapOption>
		</SelectMapWrapper>
	);
};
