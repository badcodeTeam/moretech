import styled from '@emotion/styled';

export const SelectMapWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	padding: 10px 12px;
`;

type SelectMapOptionProps = {
	isSelected: boolean;
};

export const SelectMapOption = styled.p<SelectMapOptionProps>`
	color: ${(props) =>
		(props.isSelected && '#5491f5') || 'rgba(84, 145, 245, 0.61)'};
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	cursor: pointer;
`;
