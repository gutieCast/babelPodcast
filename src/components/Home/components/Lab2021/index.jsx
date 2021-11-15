import React from 'react'
// import { Link, useHistory } from "react-router-dom";
// import Countdown from 'react-countdown';
import { Layout } from '../../../Layout';
import { SliderTeachersCards } from './components/SliderTeachersCards';
import { Workshops } from './components/Workshops';
// import Timeline from '../../../../assets/images/cronograma_babel_lab2021.png';
import './lab2021.scss'

const Lab2021 = () => {

    // const Completionist = () => <span>¡Empezamos!</span>;

    // const renderer = ({ days, hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //         // Render a completed state
    //         return <Completionist />;
    //     } else {
    //         // Render a countdown
    //         return (
    //             <div className="grid-timer">
    //                 <div className="unit-time">
    //                     <span className="countdown-timer">{days}</span>
    //                     <span className="tag-time"> días</span>
    //                 </div>
    //                 <div className="unit-time">
    //                     <span className="countdown-timer">{hours}</span>
    //                     <span className="tag-time"> horas</span>
    //                 </div>
    //                 <div className="unit-time">
    //                     <span className="countdown-timer">{minutes}</span>
    //                     <span className="tag-time"> minutos</span>
    //                 </div>
    //                 <div className="unit-time">
    //                     <span className="countdown-timer">{seconds}</span>
    //                     <span className="tag-time"> segundos</span>
    //                 </div>
    //             </div>
    //         )
    //     }
    // };

    return (
        <section id="lab-2021">
            <Layout
                title={"Laboratorio pódcast 2021"}
                pattern={true}

            >
                {/* <p className="text">
                    ¡Nuestro Laboratorio Podcast 2021 ya ha empezado!
                </p> */}
                {/* <Countdown
                    date="2021-08-31T19:00:00"
                    renderer={renderer}
                    zeroPadDays={1}
                    zeroPadTime={1}
                /> */}
                <Workshops />

                <div className="teachers-info">
                    <h3 className="subtitle-section">
                        ¡Estxs son lxs talleristas que nos acompañaron!
                    </h3>
                    <SliderTeachersCards />
                </div>
                {/* <div className="timeline">
                    <img src={Timeline} alt="cronograma lab2021" />
                    <div className="for-more-info">
                        <p className="text">
                            Para más info:
                        </p>
                        <Link className="PDF-downloader"
                            to={process.env.PUBLIC_URL + '/files/Babel_convocatoria_LAB2021.pdf'}
                            target="_blank" download
                        >
                            descargar pdf
                        </Link>
                    </div>
                </div> */}
            </Layout>
        </section>
    )
}

export { Lab2021 }
