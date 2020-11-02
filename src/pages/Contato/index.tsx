import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { FaMapSigns } from 'react-icons/fa';

export const Contato: React.FC = () => {
    return (
        <Container>
            <Header />
            <div className="main-container">
                <h1>Entre em contato</h1>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Rua%20Igarap%C3%A9%20de%20Mau%C3%A1%2C%20N%2001%20-%20Mauazinho%20%20Manaus%2C%20AM%2069075-291&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0} />
                        <a href="https://www.whatismyip-address.com/nordvpn-coupon/"></a>
                    </div>
                    {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}

                    <div>
                        <b>Nosso endereço 🏠</b>
                        <p>
                            Rua Igarapé de Mauá, N 01 - Mauazinho <br />
                            Manaus, AM 69075-291
                        </p>
                        <b>Formas de contato 🔗</b>
                        <p>
                            Email: contato@larbatistamanaus.org <br />
                            Telefone/Fax: +55 (92) 3615-8302<br />
                            Celular: +55 (92) 99214-8949 <br />
                        </p>
                    </div>
                </div>
                <a target="_blank" href="https://www.google.com/maps/dir//R.+Igarap%C3%A9+do+Mau%C3%A1,+1+-+Mauazinho,+Manaus+-+AM,+69075-291/@-3.1207026,-59.9406827,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x926c049eda7d6247:0x1122d78405fc8e3a!2m2!1d-59.938494!2d-3.120708!3e0">
                    <p>Procurar rotas </p>
                    <FaMapSigns size={24} />
                </a>
            </div>
            <Footer />
        </Container>
    );
}
