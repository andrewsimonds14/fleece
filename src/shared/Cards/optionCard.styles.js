import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; //Perpendicular to flex direction
	justify-content: center; //Along flex direction
	flex: 1 1 30%;
	background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
	border-radius: 0.5em;
	margin: 0.5em 1em 0.5em 0;
	box-sizing: border-box;
	border: 2px solid ${(props) => props.theme.colors.grey3};
	padding: 2em 1em;

	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};

	:active {
		opacity: 0.6;
	}
	${(props) => props.primary
		&& css`
			color: ${() => props.theme.colors.elevatedBackgroundPrimary};
			background-color: ${() => props.theme.colors.green};
		`}
`;

export const CardTitle = styled.div`
	text-align: center;
	font-size: 150%;
	padding-top: 0.5em;
`;

export const CardImage = styled.div`
	display: block;
	${(props) => props.arrowCard
		&& css`
			padding-top: 1em;
		`}
`;
