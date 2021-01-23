import React from 'react';
import {
  CardTitle,
  StyledContainer,
  CardImage,
  TextWrapper,
  CardDate,
} from './printCard.styles';

const PrintCard = (props) => (
  <StyledContainer onClick={props.onClick ? props.onClick : () => {}}>
    <CardImage src={props.img} />
    <TextWrapper>
      <CardTitle>{props.title}</CardTitle>
      <CardDate>{props.date}</CardDate>
    </TextWrapper>
  </StyledContainer>
);

export default PrintCard;
