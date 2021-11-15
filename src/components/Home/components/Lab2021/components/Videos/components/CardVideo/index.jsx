import React, { useState } from 'react'
import ReactModal from 'react-modal'
import './cardVideo.scss'

const CardVideo = ({ img, name, teacher, url }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <article className="uk-card card-video" onClick={() => setModalIsOpen(true)}>
                <picture className="uk-card-media-top card-video-img" style={{ backgroundImage: `url(${img})` }} ></picture>
                {/* <span className="video-name">{name}</span>
                <br />
                <span className="video-teacher">{`Por: ${teacher}`}</span> */}
            </article>

            <ReactModal
                id={`video-${name}`}
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
                        <span className="modal-subtitle">{`por ${teacher}`}</span>
                    </header>
                    <main>
                        <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </main>
                </article>
            </ReactModal>
        </>
    )
}

export { CardVideo }
