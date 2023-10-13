import styled from '@emotion/styled';
import { breakpoints } from '../../components/theme';

export const MainWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	flex-direction: row;

	@media (max-width: ${breakpoints[1]}px) {
		flex-direction: column-reverse;
	}
`;
