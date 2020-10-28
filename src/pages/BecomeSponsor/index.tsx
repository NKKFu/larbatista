import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const BecomeSponsor: React.FC = () => {
    return (
        <Container>
            <Header />
            <div className="main-container">
                <h1>Seja Padrinho</h1>

                <p>
                    Ajude a causa, faça parte de nossa família!
                </p>
            </div>
            <Footer />
            {/* Google Forms */}
        </Container>
    );
}