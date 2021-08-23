import { Layout } from 'components';
import React from 'react'
import Countdown from 'react-countdown';
import { Cards } from 'components/Home/components/Lab2021/components/Cards';
import 'components/Home/components/Lab2021/lab2021.scss'

const Lab2021 = () => {

    const Completionist = () => <span>¡Empezamos!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span className="countdown-timer">{days}:{hours}:{minutes}:{seconds}</span>
            )
        }
    };

    return (
        <section id="lab-2021">
            <Layout
                title={"Laboratorio pódcast 2021"}
                pattern={true}

            >
                <p className="text">
                    Nuestro Laboratorio Podcast 2021 empieza en:
                </p>
                <Countdown
                    date="2021-08-31T19:00:00"
                    renderer={renderer}
                />

                <div className="teachers-info">
                    <h3 className="title-section">
                        ¡Estos son lxs talleristas que nos acompañaran!
                    </h3>
                    <Cards />
                </div>

            </Layout>
        </section>
    )
}

export { Lab2021 }
