import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const ThankYou = () => {
    return (

        <Wrapper>
            <HomeLink ><NavLink to="/">Main</NavLink>/ Shopping Cart / Checkout</HomeLink>
            <ThankYouTitle>Thank you for your purchase</ThankYouTitle>

            <StyledNavLink to="/"  ><Button>Continue Shopping</Button></StyledNavLink> 

        </Wrapper>
    )

}

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;



`
const HomeLink = styled.p`
    color: gray;
`
const ThankYouTitle = styled.p`
    padding-top: 20%;
    font-size: 50px;
    margin: 0 auto;
`

const StyledNavLink = styled(NavLink)`
    margin: 0 auto;
    
    margin-top: 30px;
`
const Button = styled.button`
    margin: 0 auto;
    border: none;
    color: #000 ;
    background-color:#fff ;
    font-size: 20px;
    border: 1px solid #000;
    padding: 15px;

    cursor: pointer;


    &:hover{
        color: #fff;
        background-color: #000;
        border: 1px solid #fff;
    }
`


export default ThankYou;