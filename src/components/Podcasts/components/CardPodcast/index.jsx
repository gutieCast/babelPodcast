import React, { useState } from 'react'
import ReactModal from 'react-modal'
import './cardPodcast.scss'

const CardPodcast = ({ img, name, by, description, links, seasons }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="uk-card card-podcast" onClick={() => setModalIsOpen(true)}>
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
                <article className="uk-container modal-body">
                    <button uk-icon="icon: close; ratio: 2" className="uk-modal-close modal-close-btn" onClick={() => setModalIsOpen(false)}></button>
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
                                        <ul
                                            className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical episodies-list" uk-accordion="multiple: true"
                                        >
                                            {
                                                season.episodes.map(episode => {
                                                    return (
                                                        <li key={episode.name}>
                                                            <a class="uk-parent uk-accordion-title episode-title" href="#">{`${episode.number}. ${episode.name}`}</a>
                                                            <div className="uk-accordion-content">
                                                                <iframe frameborder="0" height="200" scrolling="no" src={`${episode.src}`} width="100%"></iframe>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
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
