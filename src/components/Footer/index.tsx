import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
    return (
        <Container>
            © 2020 Lar Batista Janell Doyle / www.larbatistamanaus.org / Manaus, Brasil
        </Container>
    );
}

const Container = styled.footer`
    position: static;
    bottom: 0;
    background-color: #2BB673;
    color: #FFF;
    width: 100%;
    padding: 20px 0;
    font-weight: bold;
    text-align: center;
`;