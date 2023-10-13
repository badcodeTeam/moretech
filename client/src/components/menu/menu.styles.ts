import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, colors } from '../theme';

interface MenuWrapperProps {
	opened: boolean;
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
	width: 30%;
	height: 100%;

	padding: 12px 16px;
	background-color: white;

	@media (max-width: ${breakpoints[1]}px) {
		width: 100%;
		padding: 0;
		${(props) => {
			if (props.opened)
				return css`
					height: 90%;
				`;
			else {
				return css`
					height: 5%;
				`;
			}
		}}

		& > *:not([class~="toggler"]) {
			${(props) => {
				if (!props.opened)
					return css`
						display: none !important;
					`;
				else {
					return css`
						padding: 2%;
						box-size: border-box;
					`;
				}
			}}
		}
	}
`;

export const TogglerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 10px;

	@media (min-width: ${breakpoints[1]}px) {
		display: none;
	}
`;

export const Toggler = styled.div`
	width: 30%;
	height: 10px;
	background-color: ${colors.secondary};
	align-self: center;
	border-radius: 12px;
`;
