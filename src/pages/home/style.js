import styled from "styled-components";

export const Main = styled.main`
    height:100%;

`

export const Content = styled.div`
    width:90vw;
    margin:1rem auto;
  

    @media (max-width:425px){
        width:95vw;
    }

    @media (max-width:375px){
        width:98vw;
    }
    
`

export const Cards = styled.div`
    display:flex;
`

export const ImageCard = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-item:center;
    align-self: stretch;
    text-align:center;

    @media (max-width:375px){
        justify-content:center;
    }

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
        height:35vh;
        max-height:35vh;
        width:20vw;
    }

    @media (max-width:425px){
        height:35vh;
        max-height:35vh;
        width:30vw;
    }
    @media (max-width:375px){
        height:33vh;
        max-height:33vh;
        width:30vw;
    }
`

export const Actor = styled.div`
   color:white;
   margin: 0rem 1rem;
   font-weight:600;
   border-bottom:5px solid #D4D0D0;
   font-size:1.45rem;


   @media (max-width:768px){
    margin: 0rem 0.55rem;
    font-size:0.55rem;
    }

    @media (max-width:375px){
        margin: 0rem 0.30rem;
        font-size:0.45rem;
        }
`
