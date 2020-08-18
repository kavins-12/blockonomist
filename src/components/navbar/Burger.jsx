import React from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top:75px;
    right : 20px;
    display: none;
    

    @media (max-width: 768px){
        display: inline;
        flex-flow: column nowrap;
        justify-content: space-around;
        z-index:20;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        margin-top: 6px;
        transition : all 0.3s linear;
        z-index:20;
        
        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg) translateY(45%)' : 'rotate(0)'};
            
        }

        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

    }

`;



const Burger = (props) => {
    

    return (
        <>
            <StyledBurger open={props.open} onClick={props.setOpen}>
                <div />
                <div />
                <div />
                
            </StyledBurger>
       </>
    )
}

export default Burger; 
