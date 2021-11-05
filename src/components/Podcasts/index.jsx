import React from 'react'
import { Layout } from 'components/Layout';
import { podcastsList } from 'components/Podcasts/podcastsList'
import { CardPodcast } from 'components/Podcasts/components/CardPodcast';
import 'components/Podcasts/podcast.scss'

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