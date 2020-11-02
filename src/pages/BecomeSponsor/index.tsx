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
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSflef6AM8ncA-fQq94RcKpr-4s3hZywUVicA5vrUOl2wC6cdQ/viewform?embedded=true"
                    frameBorder="0" marginHeight={0} marginWidth={0}>Carregando…</iframe>
            </div>
            <Footer />
        </Container>
    );
}