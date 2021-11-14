import React from 'react'
import { Layout } from '../Layout'

const AboutUs = () => {
    return (
        <section id="about-us">
            <Layout
                title={"sobre babel"}
                pattern={true}
            >
                <p className="text">
                    blablabla
                </p>
            </Layout>
        </section>
    )
}

export { AboutUs }