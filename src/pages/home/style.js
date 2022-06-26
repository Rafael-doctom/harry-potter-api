import styled from "styled-components";

export const Header = styled.header`

`
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

    &:hover{
        color:red;
        transition:1s;
    }
`

// main
export const Main = styled.main`
    height:100%;
`

export const Content = styled.div`
    width:90vw;
    margin:1rem auto;
`

export const Cards = styled.div`
    display:flex;
    justify-content:center;
`

export const ImageCard = styled.div`
    width:80vw;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-item:center;
    align-self: stretch;
`

export const ImagePersonagem = styled.img`
    background-size:cover;
    margin:1rem;
    border:0;
    border-radius:10px;
    cursor:pointer;
`