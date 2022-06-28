import styled, { withTheme } from "styled-components";

export const Content = styled.div`
    display:flex;
    justify-content:center;
    margin:5rem 0;
`

export const Houses = styled.img`
    background-size:cover;
    border:3px;
    border-radius:10px;
    cursor:pointer;
    margin:1rem 1rem;
    height:40vh;
    width:20vw;
    background-size:cover;
    &:hover{
        box-shadow: -5px 5px 20px #FF8000;
        transition:0.55s;
    }

    background:rgba(0, 0, 0, 0.14);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
`

export const Modals = styled.div`
    // background:red;
    color:white;
    // height:100vh;
    display:flex;
    justify-content:center;

`