import { useEffect, useState } from "react";

import Header from "../../components/header";
import * as S from './style.js';

const Students = () => {

    const [dataStudents, setDataStudents] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const URL = `http://hp-api.herokuapp.com/api/characters/students`;
    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU";

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setDataStudents(json)
            })
            .catch((mesage) => { console.log(mesage) })
    }, []);

    const changeDataSearch = (event) => {
        event.preventDefault();
        setInputValue(event.target.value)
    };

    const SearchDatasInput = (event) => {
        event.preventDefault();

        let divStudents = document.getElementsByClassName("divStudents");
        let i = 0;
        for (i = 0; i < divStudents.length; i++) {
            if (!divStudents[i].innerHTML.includes(inputValue)) {
                divStudents[i].style.display = "none";
            } else {
                divStudents[i].style.display = "block";
            }
        };
    };

    return (
        <>
            <Header />
            <S.Content>
                <form>
                    <S.Input type="text" name="name" placeholder="Digite um nome..." onKeyUp={SearchDatasInput} onChange={changeDataSearch} />
                </form>
                <h1 style={{ color: "white" }}>Resultados para: {inputValue}</h1>
            </S.Content>
            <S.Main>
                <S.CardsStudents>
                    <S.ImageCardSudents>
                        {dataStudents &&
                            dataStudents.map(student => (
                                <>
                                    <S.Actor className='divStudents'>
                                        <S.ImagePersonagem src={student.image != '' ? student.image : defaultImg} alt={student.name} />
                                        <p>{student.name}</p>
                                    </S.Actor>
                                </>
                            ))
                        }
                    </S.ImageCardSudents>
                </S.CardsStudents>
            </S.Main>
        </>
    )
}

export default Students;