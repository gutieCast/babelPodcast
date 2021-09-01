import { useHistory } from "react-router-dom";
import { Layout } from 'components';
import React from 'react'
import Countdown from 'react-countdown';
import { Cards } from 'components/Home/components/Lab2021/components/Cards';
import Timeline from 'assets/images/cronograma_babel_lab2021.png';
import { Link } from "react-router-dom";
import 'components/Home/components/Lab2021/lab2021.scss'

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
                <p className="text">
                    ¡Nuestro Laboratorio Podcast 2021 ya ha empezado!
                </p>
                {/* <Countdown
                    date="2021-08-31T19:00:00"
                    renderer={renderer}
                    zeroPadDays={1}
                    zeroPadTime={1}
                /> */}

                <div className="teachers-info">
                    <h3 className="title-section">
                        ¡Estxs son lxs talleristas que nos acompañaran!
                    </h3>
                    <Cards />
                </div>
                <div className="timeline">
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
                </div>
            </Layout>
        </section>
    )
}

export { Lab2021 }
