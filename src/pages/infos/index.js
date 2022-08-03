import { useState } from "react";

import Header from "../../components/header";
import * as S from './style.js';

const Infos = () => {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const openModal1 = () => {
        setModal1(!modal1);
    };

    const openModal2 = () => {
        setModal2(!modal2);
    };

    const openModal3 = () => {
        setModal3(!modal3);
    };


    const openModal4 = () => {
        setModal4(!modal4);
    };


    const gryffindor = 'gryffindor'
    const ravenclaw = 'ravenclaw';
    const hufflepuff = 'hufflepuff';
    const slytherin = 'slytherin';

    const URL_STUDENTS = 'https://hp-api.herokuapp.com/api/characters/house/';

    const dataGryffindor = () => {
        fetch(`${URL_STUDENTS}${gryffindor}`)
            .then(response => response.json())
            .then((json) => {
                setData1(json)
                console.log('1')
            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });
    };

    const datRavenclaw = () => {
        fetch(`${URL_STUDENTS}${ravenclaw}`)
            .then(response => response.json())
            .then((json) => {
                setData2(json)
                console.log('2')

            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });
    }

    const dataHufflepuff = () => {
        fetch(`${URL_STUDENTS}${hufflepuff}`)
            .then(response => response.json())
            .then((json) => {
                setData3(json)
                console.log('3')

            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });
    };

    const dataSlytherin = () => {
        fetch(`${URL_STUDENTS}${slytherin}`)
            .then(response => response.json())
            .then((json) => {
                setData4(json)
                console.log('4')

            })
            .catch(() => {
                console.log('aaaaaaaaa')
            });
    };

    return (
        <>
            <Header />
            <S.Content>
                <S.Houses src="../assets/houses/Gryffindor-Logo.png" alt="" onClick={openModal1} onMouseEnter={dataGryffindor} />
                <S.Houses src="../assets/houses/corvinal.png" alt="" onClick={openModal2} onMouseEnter={datRavenclaw} />
                <S.Houses src="../assets/houses/lufa-lufa.png" alt="" onClick={openModal3} onMouseEnter={dataHufflepuff} />
                <S.Houses src="../assets/houses/Slytherin-Logo.png" alt="" onClick={openModal4} onMouseEnter={dataSlytherin} />
            </S.Content>

            <S.Modals >
                {
                    modal1 !== false ? (
                        <>
                            <S.Modal>
                                <S.Cancel onClick={openModal1}>x</S.Cancel>
                                <S.DataContent>
                                    {data1 &&
                                        data1.map(item => (
                                            <>
                                                <S.Alunos>
                                                    <p>{item.name}</p>
                                                </S.Alunos>
                                            </>
                                        ))
                                    }
                                </S.DataContent>
                            </S.Modal>
                        </>
                    ) : null
                }

                {
                    modal2 !== false ? (
                        <>
                            <S.Modal>
                                <S.Cancel onClick={openModal2}>x</S.Cancel>
                                <S.DataContent>
                                    {data2 &&
                                        data2.map(item => (
                                            <>
                                                <S.Alunos>
                                                    <p>{item.name}</p>
                                                </S.Alunos>
                                            </>
                                        ))
                                    }
                                </S.DataContent>
                            </S.Modal>
                        </>
                    ) : null
                }

                {
                    modal3 !== false ? (
                        <>
                            <S.Modal>
                                <S.Cancel onClick={openModal3}>x</S.Cancel>
                                <S.DataContent>
                                    {data3 &&
                                        data3.map(item => (
                                            <>
                                                <S.Alunos>
                                                    <p>{item.name}</p>
                                                </S.Alunos>
                                            </>
                                        ))
                                    }
                                </S.DataContent>
                            </S.Modal>
                        </>
                    ) : null
                }

                {
                    modal4 !== false ? (
                        <>
                            <S.Modal>
                                <S.Cancel onClick={openModal4}>x</S.Cancel>
                                <S.DataContent>
                                    {data4 &&
                                        data4.map(item => (
                                            <>
                                                <S.Alunos>
                                                    <p>{item.name}</p>
                                                </S.Alunos>
                                            </>
                                        ))
                                    }
                                </S.DataContent>
                            </S.Modal>
                        </>
                    ) : null
                }
            </S.Modals>

        </>
    );
};

export default Infos;