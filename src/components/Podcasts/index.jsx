import React from 'react'
import { Layout } from 'components/Layout'
import 'components/Podcasts/podcast.scss'

const Podcasts = () => {
    return (
        <section id="podcasts">
            <Layout
                title={"pódcasts"}
                pattern={true}
            >
                <p className="text">
                    Próximamente, ¡Pódcasts para excuchar!
                </p>
            </Layout>
        </section>
    )
}

export { Podcasts }