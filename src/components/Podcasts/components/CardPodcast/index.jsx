import React, { useState } from 'react'
import { Accordion } from 'uikit-react'
import ReactModal from 'react-modal'
import './cardPodcast.scss'

const CardPodcast = ({ img, name, by, description, links, seasons }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="uk-card uk-card-body card-podcast" onClick={() => setModalIsOpen(true)}>
                <div className="uk-animation-toggle uk-card-media-top card-img" tabIndex="1">
                    <img src={img} alt={`${name} card`} />
                </div>
            </div>
            <ReactModal
                id={`podcast-${name}`}
                className="modal"
                inset="15px"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalIsOpen(false)}
                preventScroll={false}
            >
                <article className="uk-container">
                    <header>
                        <h3 className="uk-card-title modal-title">{name}</h3>
                        <span className="modal-subtitle">{`por ${by}`}</span>
                    </header>
                    <main>

                        <p className="modal-main-text">
                            {description}
                        </p>
                        <ul className="links-list">
                            {
                                links.length > 0
                                    ?
                                    <>
                                        <span className="modal-extra-text">
                                            {`Sigue a ${by} en:`}
                                        </span>
                                        {
                                            links.map(link => {
                                                return (
                                                    <li>
                                                        {link}
                                                    </li>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    ''
                            }
                        </ul>
                    </main>
                    <div className="podcast-player">
                        {
                            seasons.map(season => {
                                return (
                                    <div>
                                        {
                                            season.number !== ''
                                                ?
                                                <h4 className="season-title">
                                                    {`Temporada ${season.number}`}
                                                </h4>
                                                :
                                                ''
                                        }
                                        <Accordion>
                                            {
                                                season.episodes.map(episode => {
                                                    return (
                                                        <li key={episode.name}>
                                                            <a class="uk-accordion-title episode-title" href="#">{`${episode.number}. ${episode.name}`}</a>
                                                            <div className="uk-accordion-content">
                                                                <iframe frameborder="0" height="200" scrolling="no" src={`${episode.src}`} width="100%"></iframe>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </Accordion>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
            </ReactModal>
        </>
    )
}

export { CardPodcast }
