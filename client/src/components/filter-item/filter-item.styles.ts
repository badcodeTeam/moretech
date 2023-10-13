import styled from '@emotion/styled';

interface FilterWrapperProps {
	isSelected: boolean;
}

export const FilterWrapper = styled.div<FilterWrapperProps>`
	width: 74px;
	height: 74px;

	border-radius: 50px;
	background-color: ${(props) => (!props.isSelected && '#8ec9ff') || '#0085FF'};

	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		cursor: pointer;
	}
`;
