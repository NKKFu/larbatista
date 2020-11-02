import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import img from './imposto.png';
import { AboutCardContainer, Container } from './styles';

interface AboutCardProps {
    link: string;
    title: string;
    description: string;
    stylesProps: {
        titleColor: string;
        descriptionColor: string;
        backgroundColor: string;
    };
}
const AboutCard: React.FC<AboutCardProps> = ({ link, title, description, stylesProps }) => {
    return (
        <AboutCardContainer {...stylesProps}>
            <Link to={link}>
                <h2>{title}</h2>
                <p>{description}</p>
            </Link>
        </AboutCardContainer>
    )
}

interface ImgCardProps {
    url: string;
    alt: string;
}
const ImgCard: React.FC<ImgCardProps> = ({ alt, url }) => {
    return (
        <div className="img-container">
            <img src={url} alt={alt} />
        </div>
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
                    link="quemsomos"
                    title="Quem Somos"
                    description="Somos o Lar Batista Janell Doyle,um lugar feliz, um lugar de alegria e sorrisos, de amor e de novos começos."
                    stylesProps={{
                        titleColor: '#FFF',
                        descriptionColor: '#FFF',
                        backgroundColor: '#F73962'
                    }}
                />
                <AboutCard
                    link="historia"
                    title="Nossa História"
                    description="O Lar Batista foi gerado em nosso coração como um sonho!. Inauguramos em 12 de Outubro de 1996 com uma criança."
                    stylesProps={{
                        titleColor: '#FFF',
                        descriptionColor: '#FFF',
                        backgroundColor: '#10C6A7'
                    }}
                />
                <AboutCard
                    link="nossaequipe"
                    title="Nossa Equipe"
                    description="Conheça a nossa equipe técnica e de cuidadores que vivem com o compromisso de proprorcionar melhor qualidade de vida às crianças. "
                    stylesProps={{
                        titleColor: '#FFF',
                        descriptionColor: '#FFF',
                        backgroundColor: '#FB6F1A'
                    }}
                />
                <AboutCard
                    link="contato"
                    title="Fale Conosco"
                    description="As crianças só precisam do seu amor. Fale conosco! contato@larbatistamanaus.org"
                    stylesProps={{
                        titleColor: '#FFF',
                        descriptionColor: '#FFF',
                        backgroundColor: '#87C92B'
                    }}
                />
            </div>
            <div className="sponsors-list">
                <h1>Nossos Padrinhos</h1>
                <div>
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                    <ImgCard url="https://www.aquila.com.br/wp-content/uploads/2019/05/logo-prefeitura-manaus.png" alt="" />
                </div>
            </div>
            <div className="sponsor-button">
                <Link to="seja-padrinho">
                    Quero ser um padrinho!
                </Link>
            </div>
            <Footer />
        </Container>
    );
}
