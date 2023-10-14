import styled from '@emotion/styled';

export const PointWrapper = styled.div`
	height: fit-content;

	padding: 12px 20px;
	display: flex;
	flex-direction: column;

	gap: 8px;

	:hover {
		cursor: pointer;
	}
`;

export const PointHeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
`;

export const PointHeader = styled.p`
	color: #545454;

	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

export const PointDescription = styled.p`
	color: #adadad;

	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 21.104px;
`;
