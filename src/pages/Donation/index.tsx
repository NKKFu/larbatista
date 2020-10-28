import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';
import imposto from './imposto_pq.png'

export const Donation: React.FC = () => {
    return (
        <Container>
            <Header />
            <div className="main-container">
                <h1>JA PENSOU EM TRANSFORMAR SUA DECLARAÇÃO DE RENDA EM SOLIDARIEDADE E REDUZIR SEU IMPOSTO REALIZANDO DOAÇÕES?</h1>

                <p>
                    Pessoa Física que declara no modelo completo pode deduzir até 6% do imposto e Pessoa Jurídica pode deduzir até 1%.
                </p>

                <p>
                    Para seu imposto render histórias com finais felizes, basta seguir o Passo a Passo:
                </p>

                <b>1º Passo: Depósito na conta do FMDCA Manaus</b>
                <p>
                    BANCO DO BRASIL
                    CONTA CORRENTE nº 6067- 4
                    AGÊNCIA nº 3563 – 7
                </p>

                <b>2º Passo: Encaminhar COMPROVANTE DE DEPÓSITO para o FMDCA, cmdca.manaus@pmm.am.gov.br informando:</b>
                <ul>
                    <li>Nome completo da Pessoa Física e Nº do CPF</li>
                    <li>Nome completo da Pessoa Jurídica e Nº do CNPJ</li>
                    <li>Endereço, Telefone e E-mail</li>
                </ul>

                <b>3º Passo: FMDCA Manaus emite e envia o recibo para o contribuinte</b>
                <p>
                    Você ajuda as crianças e adolescentes através do NACER e/ou JANELL DOYLE . Para mais informações sobre o processo  pelos telefones 3302-6282 / 9 9326-6222. NACER  / 3615-8302 / 99214-8949 - JANELL DOYLE
                </p>

                <b>Mas fique atento!! Para garantir seu desconto no IR de 2017 você deverá doar até 28 de Dezembro</b>

                <img src={imposto} alt="Faça sua doação" />
            </div>
            <Footer />
            {/* Google Forms */}
        </Container>
    );
}
