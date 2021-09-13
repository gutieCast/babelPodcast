import React from 'react';
import LogoApthapi from 'assets/images/Logos/logo_fondo_mujeres_apthapi_bolivia.png';
import 'components/Footer/footer.scss';
import LogoColectivaImaginaria from 'assets/images/Logos/logo_colectiva_imaginaria_bolivia.png';
import { MainMenu } from 'components/MainMenu';

const Footer = () => {
    return (
        <footer id="footer-page">
            <p className="name-proyect">
                babel pódcasts bolivia
            </p>
            <div className="info-container">
                <div className="organization-container">
                    <p>
                        Una idea desarrollada por
                    </p>
                    <div className="logo-container">
                        <img src={LogoColectivaImaginaria} alt="Logo colectiva imaginaria" />
                    </div>
                </div>
                <div className="organization-container">
                    <p>
                        Con el apoyo de
                    </p>
                    <div className="logo-container">
                        <img src={LogoApthapi} alt="logo Fondo de Mujeres Bolivia Apthapi Jopueti" />
                    </div>
                </div>
            </div>
            <MainMenu styleName="uk-animation-slide-bottom-small" classLoc={"menu-footer"} />
            <p className="signed">
                sitio web desarrollado por colectiva imaginaria</p>
        </footer>
    )
}

export { Footer }