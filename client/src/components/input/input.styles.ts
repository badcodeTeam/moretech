import styled from '@emotion/styled';
import { colors } from '../theme';

export const InputWrapper = styled.div`
	border-radius: 76px;
	background: ${colors.secondary};
	position: relative;
	padding: 5px 7px 5px 15px;
	display: flex;
	align-items: center;
	height: 34px;
`;

export const StyledInput = styled.input`
	width: 100%;
	height: 100%;

	border: none;
	background-color: inherit;

	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
`;

export const InputButton = styled.div`
	position: absolute;
	right: 15px;
`;
