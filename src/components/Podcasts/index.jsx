import React from 'react'
import { Layout } from '../Layout';
import { podcastsList } from './podcastsList'
import { CardPodcast } from './components/CardPodcast';
import './podcast.scss'

const Podcasts = () => {
    return (
        <section id="podcasts">
            <Layout
                title={"pódcasts"}
                pattern={true}
            >
                <div className="uk-child-width-expand@s uk-text-center grid-podcast" uk-grid>
                    {
                        podcastsList.map((podcast) => {
                            return (
                                <CardPodcast
                                    img={podcast.img}
                                    name={podcast.name}
                                    by={podcast.by}
                                    description={podcast.description}
                                    links={podcast.links}
                                    seasons={podcast.seasons}

                                />
                            )
                        })
                    }
                </div>
            </Layout>
        </section>
    )
}

export { Podcasts }