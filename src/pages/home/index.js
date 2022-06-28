import { useEffect, useState } from 'react';


import Header from '../../components/header/index.js';
import * as S from './style.js';

const Home = () => {

    const [data, setData] = useState([]);


    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU"

    useEffect(() => {

        const URL = `https://hp-api.herokuapp.com/api/characters`;

        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });
    }, []);

    return (
        <>
            <Header />
            <S.Main>
                <S.Content>
                    <S.Cards>
                        <S.ImageCard>
                            {data &&
                                data.map(item => (
                                    <>
                                        <S.Actor>
                                            <S.ImagePersonagem src={item.image !== '' ? item.image : defaultImg} alt={item.name} />
                                            <p>{item.name}</p>
                                        </S.Actor>
                                    </>
                                ))
                            }
                        </S.ImageCard>
                    </S.Cards>
                </S.Content>
            </S.Main>
        </>
    )
};

export default Home;