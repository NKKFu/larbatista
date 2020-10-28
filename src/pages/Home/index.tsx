import React from 'react';
import { Header } from '../../components/Header';
import img from './imposto.png'
import { AboutCardContainer, Container } from './styles';

interface AboutCardProps {
    title: string;
    description: string;
    stylesProps: {
        titleColor: string;
        descriptionColor: string;
        backgroundColor: string;
    };
}
const AboutCard: React.FC<AboutCardProps> = ({ title, description, stylesProps }) => {
    return (
        <AboutCardContainer {...stylesProps}>
            <h2>{title}</h2>
            <p>{description}</p>
        </AboutCardContainer>
    )
}

export const Home: React.FC = () => {
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
            <div className="cards-list">
                <AboutCard
                    title="Quem Somos"
                    description="Somos o Lar Batista Janell Doyle,um lugar feliz, um lugar de alegria e sorrisos, de amor e de novos começos."
                    stylesProps={{
                        titleColor: '#c20000',
                        descriptionColor: '#ff6b6b',
                        backgroundColor: '#ffebeb'
                    }}
                />
                <AboutCard
                    title="Nossa História"
                    description="O Lar Batista foi gerado em nosso coração como um sonho!. Inauguramos em 12 de Outubro de 1996 com uma criança."
                    stylesProps={{
                        titleColor: '#006673',
                        descriptionColor: '#28abbd',
                        backgroundColor: '#c4f8ff'
                    }}
                />
                <AboutCard
                    title="Nossa Equipe"
                    description="Conheça a nossa equipe técnica e de cuidadores que vivem com o compromisso de proprorcionar melhor qualidade de vida às crianças. "
                    stylesProps={{
                        titleColor: '#1e7300',
                        descriptionColor: '#70c951',
                        backgroundColor: '#d7ffc9'
                    }}
                />
                <AboutCard
                    title="Fale Conosco"
                    description="As crianças só precisam do seu amor. Fale conosco! contato@larbatistamanaus.org"
                    stylesProps={{
                        titleColor: '#9e4700',
                        descriptionColor: '#ffa154',
                        backgroundColor: '#ffe2c9'
                    }}
                />
            </div>
            <div className="sponsors-list">
                <h1>Nossos Padrinhos</h1>
                <div>
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <img src="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                </div>
            </div>
            <div className="sponsor-button">
                <p>
                    Quero ser um padrinho!
            </p>
            </div>
            <footer>
                © 2020 Lar Batista Janell Doyle / www.larbatistamanaus.org / Manaus, Brasil
            </footer>
        </Container>
    );
}
