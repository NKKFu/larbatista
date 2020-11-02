import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import img from './imposto.png';
import { AboutCardContainer, Container } from './styles';

export const Sobre: React.FC = () => {
    return (
        <Container>
            <Header />
            <img src={img} alt="" />
            <div className="phrase">
                <p>
                    <b>
                        Todo ano, centenas de crianças se encontram em situação de risco social. Com a sua ajuda, estamos fazendo a diferença!
                    </b>
                </p>
            </div>
            <Footer />
        </Container >
    );
}
