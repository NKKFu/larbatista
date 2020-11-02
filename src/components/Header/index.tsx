import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Container, Hamburguer } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';

interface HeaderButtonProps {
    title: string;
    link: string;
}
export const HeaderButton: React.FC<HeaderButtonProps> = ({ title, link }) => {
    return (
        <Link to={link}>
            <p>
                {title}
            </p>
        </Link>
    );
}

export const Header: React.FC = () => {
    const [hamburguerMenuOpen, setHamburguerMenuOpen] = useState(false);

    return (
        <Container>
            <Link to="/">
                <img src={logo}></img>
            </Link>
            <Hamburguer className="hamburguer" isOpen={hamburguerMenuOpen} onClick={() => { setHamburguerMenuOpen(!hamburguerMenuOpen); }}>
                <GiHamburgerMenu size={'auto'} color="#000" />
            </Hamburguer>
            <div className="button-group" onClick={() => { setHamburguerMenuOpen(!hamburguerMenuOpen); }}>
                <HeaderButton link="/" title="Início" />
                <HeaderButton link="sobre" title="Sobre nós" />
                <HeaderButton link="familia-acolhedora" title="Familia Acolhedora" />
                <HeaderButton link="seja-padrinho" title="Seja padrinho" />
                <HeaderButton link="doacao" title="Doação" />
                <HeaderButton link="adoption" title="Adoção" />
                <HeaderButton link="contato" title="Contato" />
            </div>
        </Container>
    );
}