import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center; //Perpendicular to flex direction
	justify-content: space-evenly; //Along flex direction
	flex: 1 1 40%;
	background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
	border-radius: 0.5em;
	margin-bottom: 1em;
	box-sizing: border-box;
	border: 2px solid ${(props) => props.theme.colors.grey3};
    padding 1em;

	:active {
		opacity: 0.6;
	}
`;

export const TextWrapper = styled.div`
	width: 60%;

	display: flex;
	flex-direction: column;
	align-items: center; //Perpendicular to flex direction
	justify-content: space-between; //Along flex direction
`;

export const CardTitle = styled.div`
	text-align: center;
	font-size: 175%;
	padding-bottom: 1.5em;

	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightStrong};
`;

export const CardDate = styled.div`
	text-align: center;
	font-size: 150%;

	color: ${(props) => props.theme.colors.textSecondary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightRegular};
`;

export const CardImage = styled.img`
	width: 40%;
	display: block;
`;
