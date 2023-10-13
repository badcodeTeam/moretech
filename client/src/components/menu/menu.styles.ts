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

	&::-webkit-scrollbar {
		display: none;
	}
	overflow-x: hidden;
	overflow-y: auto;

	@media (max-width: ${breakpoints[2]}px) {
		width: 100%;
		padding: 0;
		${(props) => {
			if (props.opened)
				return css`
					max-height: 50%;
				`;
			else {
				return css`
					height: 8%;
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

	@media (min-width: ${breakpoints[2]}px) {
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
