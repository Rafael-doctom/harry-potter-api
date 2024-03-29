import styled from "styled-components";

export const Content = styled.div`
    width:95vw;
    margin:0 auto;
`

export const Input = styled.input`
    width:93vw;
    background:white;
    height:5vh;
    border:1px solid transparent;
    border-radius:5px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1rem;
    color: #666666;
    display: block;
    padding:0 1rem;

    &:focus{
        outline:none;
    }

    @media (max-width:768px){
        width:90vw;
        height:6vh;
    }

    @media (max-width:425px){
        width:85vw;
        height:6vh;
    }
`

export const Main = styled.main`
    padding:1rem 0;
    width:90vw;
    margin:1rem auto;

    @media (max-width:768px){
        width:95vw;
    }
`

export const CardsStudents = styled.div`
    display:flex;
`

export const ImageCardSudents = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-item:center;
    align-self: stretch;
    text-align:center;
`

export const ImagePersonagem = styled.img`
    background-size:cover;
    border:0;
    border-radius:10px;
    cursor:pointer;
    margin-top:1rem;
    height:40vh;
    max-height:40vh;
    width:15vw;
    background-size:cover;
    &:hover{
        box-shadow: -5px 5px 20px #FF8000;
        transition:0.55s;
    }

    @media (max-width:768px){
        height:45vh;
        max-height:45vh;
        width:25vw;
    }

    @media (max-width:425px){
        height:45vh;
        max-height:45vh;
        width:38vw;
    }

    @media (max-width:375px){
        height:65vh;
        max-height:65vh;
        width:75vw;
    }
`

export const Actor = styled.div`
   color:white;
   margin: 0rem 1rem;
   font-weight:600;
   border-bottom:5px solid #D4D0D0;
   font-size:1.45rem;
`

export const NameStundent = styled.p`
    @media (max-width:425px){
        font-size:1.15rem;
    }
`