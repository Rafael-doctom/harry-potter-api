import styled from "styled-components";

export const Nav = styled.nav`
    display:flex;
    flex-direction:column;
    width:95vw;
    margin:0 auto;

   
`

export const Logo = styled.img`
    height:7vh;
    width:7vw;
    margin:2rem auto;

    @media (max-width:425px){
        height:10vh;
        width:20vw;
        margin:1rem auto;
    }
`

export const Menu = styled.div`
    border-top:2px solid #6E6363;
    width:95vw;
    text-align:center;
    display:flex;
    justify-content:center;

    @media (max-width:425px){
        width:90vw;
    }

    @media (max-width:375px){
        width:86vw;

    }
`

export const List = styled.ul`
    display:flex;
    list-style:none;
    color:white;
`

export const ListItem = styled.li`
    font-size:1.55rem;
    margin:0 1rem;
    cursor:pointer;
    font-weight:600;
    color:white;
    &:hover{
        color:red;
        transition:1s;
    }

    @media (max-width:425px){
        font-size:1rem;
    }

    @media (max-width:375px){
        font-size:0.80rem;
    }
`

export const LinkItem = styled.span`
    font-weight:600;
    color:white;

    &:hover{
        color:red;
        transition:1s;
`
