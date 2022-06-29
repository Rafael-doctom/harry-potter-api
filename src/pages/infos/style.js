import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    justify-content:center;
    margin:5rem 0;
    position:relative;
    z-index:0;
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
    color:white;
    display:flex;
    justify-content:center;

`

export const Modal = styled.div`
    background: rgb(149,125,58);
    background: linear-gradient(90deg, rgba(149,125,58,1) 0%, rgba(231,185,115,1) 44%);
    color:white;
    height:90vh;
    display:flex;
    justify-content:center;
    position:absolute;
    z-index:99999999999;
    top:5vh;
    bottom:20px;
    width:90vw;
    border-radius:20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Cancel = styled.div`
    width:2vw;
    position:absolute;
    z-index:999999999;
    background:#ffc107;
    color:#212529;
    right:-20px;
    top:-15px;
    text-align:center;
    border:2px solid white;
    border-radius:1vw;
    padding:10px;
    cursor:pointer;
`

export const DataContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:90vw;
    flex-wrap:wrap;
`;

export const Alunos = styled.div`
    margin:0px 10px;
    padding:0 5px;
    border-bottom:2px solid #FF8000;
    font-size:1.25rem;
    font-weight:600;
    cursor:pointer;
    color:#5A5151;

    &:hover{
        box-shadow: -5px 5px 20px #FF8000;
        transition:0.55s;
        border-radius:1vw;
    }
`;  

