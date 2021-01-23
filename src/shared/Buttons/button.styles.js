import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 50%;
	font-size: 175%;
	display: flex;
	flex-direction: row;
	align-items: center; //Perpendicular to flex direction
	justify-content: space-evenly; //Along flex direction
	padding: 1em 2em;
	text-align: center;
	:hover {
		opacity: 0.8;
	}
	font-family: ${(props) => props.theme.fonts.familyBody};
	font-weight: ${(props) => props.theme.fonts.weightStrong};
	border: none;
	background-color: ${(props) => props.theme.colors.myPurple};
	color: ${(props) => props.theme.colors.grey1};
`;
