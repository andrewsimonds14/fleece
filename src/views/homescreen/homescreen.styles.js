import styled, { css } from 'styled-components';

export const Screen = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const TitleTextWrapper = styled.div`
    position: absolute;
    top: 25%;
    left: 0%;
    transform: translate(0%,-50%);
    padding: 3em;
    ${(props) => props.background
        && css`
			background-image: ${() => props.background};
        `}
`;

export const BackgroundImage = styled.div`
    margin-top: 7em;
    display: block;
    background-position: center;
    background-size: cover;
    height: 1250px;
    ${(props) => props.background
        && css`
            background-image: ${() => `url(${props.background})`};
        `}
    ${(props) => props.climber
        && css`
            height: 300px;
        `}
`;

export const MainText = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-family: ${(props) => props.theme.fonts.familyHeader};
	font-weight: ${(props) => props.theme.fonts.weightHeavy};
    font-size: 400%;
`;

export const SubText = styled(MainText)`
    color: ${(props) => props.theme.colors.myDarkPurple};
    font-weight: ${(props) => props.theme.fonts.weightRegular};
	font-size: 250%;
`;

export const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-text: center;
    background-color: ${(props) => props.theme.colors.grey2};
    padding: 4em 0;
`;

export const AboutTitle = styled(SubText)`
    font-weight: ${(props) => props.theme.fonts.weightRegular};
    font-size: 250%;
    align-self: center;
    margin: 3em 1em 1em 1em;
`;

export const AboutSubTitle = styled(AboutTitle)`
    font-size: 150%;
    margin: 0 1em 1.5em 0;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ProductTitle = styled(SubText)`
    font-weight: ${(props) => props.theme.fonts.weightRegular};
    font-size: 250%;
    align-self: center;
    margin: 3em 1em 1em 1em;
`;

export const ProductSubTitle = styled(ProductTitle)`
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 150%;
    margin: 0 1em 1.5em 0;
`;

export const ProductWrapper = styled.div`
    margin: 5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const ProductImage = styled.img`
    display: block;
    width: 25%;
    height: auto;
    padding: 10em;
`;

export const ProductSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2em 0;
`;

export const Footer = styled.div`
    background-color: ${(props) => props.theme.colors.myPurple};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const FooterText = styled.div`
    color: ${(props) => props.theme.colors.myVeryDarkPurple};
    font-family: ${(props) => props.theme.fonts.familyHeader};
    font-weight: ${(props) => props.theme.fonts.weightRegular};
    font-size: 250%;
    align-self: center;
    margin: 1em;
`;

export const FooterSubText = styled(FooterText)`
    color: ${(props) => props.theme.colors.grey1};
    font-size: 200%;
    ${(props) => props.small
        && css`
            font-size: 100%;
        `}
`;

export const IconList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FooterTextList = styled(IconList)`
    justify-content: space-evenly;
`;

export const IconWrapper = styled.div`
    width: 2%;
    margin: 2em 4em;
`;