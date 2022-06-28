import * as S from './style.js';

import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <>
            <S.Nav>
                <S.Logo src="./assets/logo.png" alt="logo" />
                <S.Menu>
                    <S.List>
                        <S.ListItem>
                            <Link style={{ textDecoration: 'none' }} to="/books">
                                <S.LinkItem>
                                    Livros
                                </S.LinkItem>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <S.LinkItem >
                                    Personagens
                                </S.LinkItem>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link style={{ textDecoration: 'none' }} to="/spells">
                                <S.LinkItem>
                                    Feitiços
                                </S.LinkItem>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link style={{ textDecoration: 'none' }} to="/students">
                                <S.LinkItem >
                                    Estudantes
                                </S.LinkItem>
                            </Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link style={{ textDecoration: 'none' }} to="/infos">
                                <S.LinkItem>
                                    Informações
                                </S.LinkItem>
                            </Link>
                        </S.ListItem>
                    </S.List>
                </S.Menu>
            </S.Nav>
        </>
    )
}


export default Header