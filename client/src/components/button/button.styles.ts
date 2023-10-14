import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonProps = {
	variant: 'text' | 'contained';
};

export const ButtonWrapper = styled.div<ButtonProps>`
	width: fit-content;
	padding: 4px;
	display: flex;
	align-items: center;
	gap: 8px;

	background-color: ${(props) =>
		(props.variant === 'text' && 'inherit') || '#0085FF'};

	${(props) => {
		if (props.variant === 'contained') {
			return css`
				padding: 10px 12px;
				color: white;
				border-radius: 12px;
			`;
		}
	}}

	:hover {
		cursor: pointer;
	}
`;
