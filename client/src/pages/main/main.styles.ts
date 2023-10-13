import styled from '@emotion/styled';
import { breakpoints } from '../../components/theme';
import { Map } from '@pbe/react-yandex-maps';

export const MainWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	flex-direction: row;

	@media (max-width: ${breakpoints[2]}px) {
		flex-direction: column-reverse;
	}
`;

export const MapContainer = styled.div`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const StyledMap = styled(Map)`
	width: 100%;
	height: 100%;

	& > ymaps {
		width: 100% !important;
		height: 100% !important;
	}

	@media (max-width: ${breakpoints[2]}px) {
		height: 100%;
		& > ymaps {
			width: 100%;
			height: 100% !important;
		}
	}
`;
