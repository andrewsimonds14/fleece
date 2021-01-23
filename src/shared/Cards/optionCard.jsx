import React from 'react';
import { CardTitle, StyledContainer, CardImage } from './optionCard.styles';

const OptionCard = (props) => (
  <StyledContainer
    primary={props.primary}
    onClick={props.onClick ? props.onClick : () => {}}
		>
    <CardImage arrowCard={props.arrowCard}>
      {props.img}
    </CardImage>
    <CardTitle>{props.action}</CardTitle>
  </StyledContainer>
);

export default OptionCard;
