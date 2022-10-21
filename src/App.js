
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #F4F6F7;
  width: 600px;
  height: 320px;
  box-shadow: 5px 5px 5px darkgrey;
  border-radius: 5px;
  margin: 200px auto;
  display: flex
`;

const Picture = styled.img`
  height : 320px;
  width: 250px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background: red;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%)
`;

const Star = styled.img`
  height: 30px;
  width: auto;
`;

const TextContainer = styled.div`
  width: 350px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-family: arial;
  padding-left: 20px;
  padding-right: 20px
`;

const Title = styled.h1`
  font-size: 25px;
  color: #2C3E50;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  color: #34495E;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 15px;
  color : #2C3E50;
  text-align: justify;
  border-top: 1px solid #2C3E50;
  padding-top: 10px;
`;

const Button = styled.button`
  height: 35px;
  border-radius: 30px;
  background:#2C3E50;
  color: white;
  border: none;
  box-shadow: 1px 3px 2px darkgrey;
  margin: 0 10px
`;

const Price = styled.p`
  font-size: 40px;
  margin: 10px;
  weight: bold;
  color: #F1C40F;
  text-shadow: 1px 1px 1px darkgrey;
`;

const Currency = styled.p`
  font-size: 10px;
  margin-bottom: 25px;
  color: #F1C40F;
  text-shadow: 1px 1px 1px darkgrey;
`;

const MyCard = () => (
  
    <Card>
      <Picture src="/tool.jpg"></Picture>
      <TextContainer>
        <Title>Electric Drill</Title>
        <SubTitle>Model P463000-NSE (2021)</SubTitle>
        <Flex>
          <Star src="/goldstar.png"></Star>
          <Star src="/goldstar.png"></Star>
          <Star src="/goldstar.png"></Star>
          <Star src="/goldstar.png"></Star>
          <Star src="/greystar.png"></Star>
        </Flex>
        <Description>The power of electric combined with the elegance of the Ficher brand. This tool will delight the Sunday handyman as well as the professional...</Description>
        <Flex>
          <Button>Add to basket</Button>
          <Button>See more...</Button>
          <Price>95</Price>
          <Currency>USD</Currency>
        </Flex>
      </TextContainer>
      
    </Card>
  
);

export default MyCard;