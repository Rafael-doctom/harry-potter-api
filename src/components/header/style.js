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
`

export const Menu = styled.div`
    border-top:2px solid #6E6363;
    width:95vw;
    text-align:center;
    display:flex;
    justify-content:center;
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
`

export const LinkItem = styled.span`
    font-weight:600;
    color:white;

    &:hover{
        color:red;
        transition:1s;
`
