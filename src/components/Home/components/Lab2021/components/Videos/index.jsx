import React from 'react'
import { CardVideo } from './components/CardVideo'
import { videos } from './videos'
import './videos.scss'

const Videos = () => {
    return (
        <div className="uk-child-width-expand@s uk-text-center grid-videos" uk-grid>
            {
                videos.map(({ img, name, teacher, url1, url2 }) => {
                    return (
                        <CardVideo
                            img={img}
                            name={name}
                            teacher={teacher}
                            url1={url1}
                            url2={url2}
                        />
                    )
                })
            }
        </div>
    )
}

export { Videos }
