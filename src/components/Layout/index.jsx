import React from 'react'
import Pattern from 'assets/images/Patterns/patron1.png'
import 'components/Layout/layout.scss'

const Layout = ({ title, body, children, pattern }) => {
    return (
        <>
            {
                pattern &&
                <div className="main-container-page">
                    <div className="pattern" style={{ backgroundImage: `url(${Pattern})` }} ></div>
                    <div className="bg-black">
                        <h2 className="title-section">
                            {title}
                        </h2>
                        <div className="content-section">
                            {body}
                        </div>
                        {children}
                    </div>
                </div>
            }

            {
                !pattern &&
                <div className={`main-container-page`}>
                    <h2 className="title-section">
                        {title}
                        <div className="title-line"></div>
                    </h2>
                    {children}
                </div>
            }
        </>
    )
}

export { Layout }
