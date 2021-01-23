import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';

import { Temperature, Home, Power, Warning, Facebook, Twitter, Snapchat, Twitch } from '../../assets/imgs';
import { NavBar, HomeCard, Button } from '../../shared';
import background1 from '../../assets/main-background.jpg';
import background2 from '../../assets/rockclimber.png';
import phoneCase from '../../assets/case.png';
import {
    Screen,
    TitleTextWrapper,
    MainText,
    SubText,
    BackgroundImage,
    AboutWrapper,
    AboutTitle,
    AboutSubTitle,
    CardWrapper,
    ProductSection,
    ProductWrapper,
    ProductImage,
    ProductSubTitle,
    ProductTitle,
    Footer,
    FooterText,
    FooterSubText,
    FooterTextList,
    IconList,
    IconWrapper,
} from './homescreen.styles';


import Routes from '../../router/routes';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Screen>
                <NavBar />
                <BackgroundImage background={background1}>
                    <TitleTextWrapper >
                        <MainText>Protect your device the right way</MainText>
                        <SubText>The extreme case for your extreme lifestyle</SubText>
                        <SubText>Put on your Fleece today</SubText>
                    </TitleTextWrapper>
                </BackgroundImage>
                <ProductSection>
                    <ProductWrapper>
                        <ProductTitle>We know how to protect devices</ProductTitle>
                        <ProductSubTitle>Our line of products will be coming soon</ProductSubTitle>
                        <ProductSubTitle>Sign up for our newletter to get important updates</ProductSubTitle>
                        <Button>Sign up!</Button>
                    </ProductWrapper>
                    <ProductImage src={phoneCase} />
                </ProductSection>
                <AboutWrapper>
                    <AboutTitle>About your Fleece</AboutTitle>
                    <AboutSubTitle>Learn what sets this case apart from the rest</AboutSubTitle>
                    <CardWrapper>
                        <HomeCard
                            img={<Temperature fill={this.props.theme.colors.myPurple} />}
                            action='Temperature'
                            more='Regulate device temperature in extreme cold and hot conditions'
                        />
                        <HomeCard
                            img={<Home fill={this.props.theme.colors.myPurple} />}
                            action='Style'
                            more='Customize exterior to suit your aesthetic'
                        />
                        <HomeCard
                            img={<Power fill={this.props.theme.colors.myPurple} />}
                            action='Battery Life'
                            more='Preserve battery life for long sessions'
                        />
                        <HomeCard
                            img={<Warning fill={this.props.theme.colors.myPurple} />}
                            action='Safety'
                            more='Impact and water resistant to keep your device safe'
                        />
                    </CardWrapper>
                </AboutWrapper>
                <BackgroundImage climber background={background2} />
                <Footer>
                    <FooterTextList>
                        <FooterText>Take our advice</FooterText>
                        <FooterText>Save your device</FooterText>
                        <FooterText>Stay wicked nice</FooterText>
                    </FooterTextList>
                    <FooterSubText>See what Fleece is up to</FooterSubText>
                    <IconList>
                        <IconWrapper>
                            <Facebook fill={this.props.theme.colors.grey1} />
                        </IconWrapper>
                        <IconWrapper>
                            <Twitter fill={this.props.theme.colors.grey1} />
                        </IconWrapper>
                        <IconWrapper>
                            <Snapchat fill={this.props.theme.colors.grey1} />
                        </IconWrapper>
                        <IconWrapper>
                            <Twitch fill={this.props.theme.colors.grey1} />
                        </IconWrapper>
                    </IconList>
                    <FooterSubText small>Contact: andrew.simonds@queensu.ca</FooterSubText>
                </Footer>
            </Screen>


        )
    }
};

export default withTheme(HomeScreen);

// Use this as template -> https://www.w3schools.com/w3css/tryw3css_templates_startup.htm