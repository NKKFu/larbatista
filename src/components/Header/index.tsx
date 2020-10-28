import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Container } from './styles';

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
    return (
        <Container>
            <Link to="/">
                <img src={logo}></img>
            </Link>
            <h2>
                {/* Lar Batista Janell Doyle */}
            </h2>
            <div className="button-group">
                <HeaderButton link="/" title="Início" />
                <HeaderButton link="familia-acolhedora" title="Sobre nós" />
                <HeaderButton link="familia-acolhedora" title="Familia Acolhedora" />
                <HeaderButton link="seja-padrinho" title="Seja padrinho" />
                <HeaderButton link="doacao" title="Doação" />
                <HeaderButton link="adoption" title="Adoção" />
                <HeaderButton link="familia-acolhedora" title="Contato" />
            </div>
        </Container>
    );
}