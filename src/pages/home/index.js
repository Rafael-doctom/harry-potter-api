import { useEffect, useState } from 'react';

import * as S from './style.js'

const Home = () => {

    const [data, setData] = useState([]);

    const URL = `https://fedeperin-harry-potter-api.herokuapp.com/personajes`

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });

    }, [])


    return (
        <>
            <S.Header>
                <S.Nav>
                    <S.Logo src="./assets/logo.png" alt="logo" />
                    <S.Menu>
                        <S.List>
                            <S.ListItem>
                                Livros
                            </S.ListItem>
                            <S.ListItem>
                                Personagens
                            </S.ListItem>
                            <S.ListItem>
                                Feitiços
                            </S.ListItem>
                            <S.ListItem>
                                Informações
                            </S.ListItem>
                        </S.List>
                    </S.Menu>
                </S.Nav>

            </S.Header>

            <S.Main>

                <S.Content>
                    <S.Cards>
                        <S.ImageCard>
                            {data &&
                                data.map(item => (
                                    <>

                                        <S.ImagePersonagem src={item.imagen} alt="logo" />

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