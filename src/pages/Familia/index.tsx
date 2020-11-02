import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Family: React.FC = () => {
    return (
        <Container>
            <Header />
            <div className="main-container">
                <h1>Família Acolhedora</h1>

                <p>
                    O Programa Família Acolhedora consiste em cadastrar e capacitar famílias da comunidade para receberem em suas casas, por um período determinado, crianças, adolescentes ou grupos de irmãos em situação de risco pessoal e social, dando-lhes acolhida, amparo, aceitação, amor e a possibilidade de convivência familiar e comunitária. A família de acolhimento representa a possibilidade de continuidade da convivência familiar em ambiente sadio para a criança ou adolescente.
                </p>

                <p>
                    Receber uma pessoa em acolhimento provisório não significa integrá-lo como filho. A família de apoio assume o papel de parceira no atendimento e na preparação para o retorno à família biológica ou substituta.
                </p>

                <p>
                    Toda a família acolhedora recebe, por seis meses, período determinado de uma adoção provisória, uma ajuda de custo de um salário mínimo. A maioria das crianças e adolescentes que participam do programa retornam aos seus lares, após o período de acolhimento em lares substitutos.
                </p>

                <p>
                    Cada família acolhedora deverá acolher uma criança/adolescente por vez, exceto quando se tratar de grupo de irmãos, quando esse número poderá ser ampliado.
                </p>

                <p>
                    Casais, mulheres e homens solteiros podem ser acolhedores. As famílias acolhedoras são selecionadas, capacitadas e acompanhadas pela equipe técnica do Serviço de Acolhimento.
                </p>

                <p>
                    Quais os pré-requisitos para se inscrever no Programa Família Acolhedora?
                </p>


                <p>
                    Para o cadastro de famílias ou indivíduos no Programa Família Acolhedora são verificados os seguintes critérios:
                </p>
                <ul>
                    <li>1) Disponibilidade afetiva;</li>
                    <li>2) Ter idade entre 25 e 55 anos</li>
                    <li>3) Estar em boas condições de saúde física e mental</li>
                    <li>4) Não possuir antecedentes criminais</li>
                    <li>5) Possuir situação financeira estável</li>
                    <li>6) Possuir uma convivência familiar estável e livre de pessoas dependentes de substâncias entorpecentes.</li>
                </ul>

                <p>
                    Quais os documentos necessários para se inscrever no Programa Família Acolhedora?
                </p>

                <p>
                    A documentação mínima a ser exigida constitui em documentos pessoais (RG, CPF), comprovante de residência, comprovante de rendimentos, certidão negativa de antecedentes criminais, atestado de saúde física e mental.
                </p>

                <h2>"A tempestade passa a vida continua e sua família pode fazer a diferença"</h2>
                <h3>Faça parte de nossa família!</h3>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeAT5peUCP_FrtewNA07iOqux8EUhAcPkroUfYJbWfnPxEcmQ/viewform?embedded=true"
                    frameBorder="0" marginHeight={0} marginWidth={0}>Carregando…</iframe>
            </div>
            <Footer />
        </Container>
    );
}
