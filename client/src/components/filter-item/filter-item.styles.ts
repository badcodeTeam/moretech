import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface FilterWrapperProps {
	isSelected: boolean;
}

export const FilterWrapper = styled.div<FilterWrapperProps>`
	padding: 12px 14px;
	border: 1px solid;
	border-radius: 23px;
	border-color: ${(props) => (props.isSelected && '#8ec9ff') || '#A8A8A8'};
	background-color: white;
	color: #a8a8a8;

	${(props) => {
		if (props.isSelected) {
			return css`
				background-color: #5491f5;
				color: white;
			`;
		}
	}}

	font-size: 14px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		cursor: pointer;
	}
`;
