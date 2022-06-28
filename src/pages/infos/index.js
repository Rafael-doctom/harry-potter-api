import { useState } from "react";
import Header from "../../components/header";
import * as S from './style.js';


const Infos = () => {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const openModal1 = () => {
        setModal1(!modal1)
        // window.scrollTo(0, 600);
        // document.getElementById('element').scrollIntoView({ behavior: 'smooth' });
    };

    const openModal2 = () => {
        setModal2(!modal2)
    };

    const openModal3 = () => {
        setModal3(!modal3)
    };


    const openModal4 = () => {
        setModal4(!modal4)
    };


    return (
        <>
            <Header />
            <S.Content>
                <S.Houses src="../assets/houses/Gryffindor-Logo.png" alt="" onClick={openModal1} />
                <S.Houses src="../assets/houses/corvinal.png" alt="" onClick={openModal2} />
                <S.Houses src="../assets/houses/lufa-lufa.png" alt="" onClick={openModal3} />
                <S.Houses src="../assets/houses/Slytherin-Logo.png" alt="" onClick={openModal4} />
            </S.Content>

            <S.Modals >
                {
                    modal1 !== false ? (
                        <>
                            Gryffindor
                        </>
                    ) : null
                }

                {
                    modal2  !== false ? (
                        <>
                            corvinal
                        </>
                    ) : null
                }

                {
                    modal3  !== false ? (
                        <>
                            lufa-lufa
                        </>
                    ) : null
                }

                {
                    modal4  !== false ? (
                        <>

                            Slytherin
                        </>
                    ) : null
                }
            </S.Modals>

        </>
    )
}

export default Infos;