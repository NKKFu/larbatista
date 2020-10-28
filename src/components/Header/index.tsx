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
            {title}
        </Link>
    );
}

export const Header: React.FC = () => {
    return (
        <Container>
            <img src={logo}></img>
            <h2>
                {/* Lar Batista Janell Doyle */}
            </h2>
            <div className="button-group">
                <HeaderButton link="familia-acolhedora" title="Início" />
                <HeaderButton link="familia-acolhedora" title="Sobre nós" />
                <HeaderButton link="familia-acolhedora" title="Familia Acolhedora" />
                <HeaderButton link="familia-acolhedora" title="Seja padrinho" />
                <HeaderButton link="familia-acolhedora" title="Doação" />
                <HeaderButton link="familia-acolhedora" title="Adoção" />
                <HeaderButton link="familia-acolhedora" title="Contato" />
            </div>
        </Container>
    );
}