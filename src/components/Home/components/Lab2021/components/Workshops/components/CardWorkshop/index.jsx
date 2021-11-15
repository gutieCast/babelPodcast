import React, { useState } from 'react'
import ReactModal from 'react-modal'
import './cardWorkshop.scss'

const CardWorkshop = ({ img, id, name, teacher, url1, url2 }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <article className="uk-card card-workshop" id={id} onClick={() => setModalIsOpen(true)}>
                <picture className="uk-card-media-top card-workshop-img" style={{ backgroundImage: `url(${img})` }} ></picture>
            </article>

            <ReactModal
                id={`workshop-${name}`}
                className="modal"
                inset="15px"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalIsOpen(false)}
                preventScroll={false}
            >
                <article className="modal-workshop-body">
                    <button uk-icon="icon: close; ratio: 2" className="uk-modal-close modal-close-btn" onClick={() => setModalIsOpen(false)}></button>
                    <header>
                        <h3 className="uk-card-title modal-title">{name}</h3>
                        <span className="modal-subtitle">{`por ${teacher}`}</span>
                    </header>
                    <main className="modal-workshop-content">
                        <div className="modal-workshop-video">
                            <span className="label-video-workshop">Video primera parte:</span>
                            <iframe width="560" height="315" src={url1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="modal-workshop-video">
                            <span className="label-video-workshop">Video segunda parte:</span>
                            <iframe width="560" height="315" src={url2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </main>
                </article>
            </ReactModal>
        </>
    )
}

export { CardWorkshop }
