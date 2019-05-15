import '../css/style.css'
import React from 'react'
import ImageCard from './ImageCard'

const Imagelist = props => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return <div className="image-list">{images}</div>
}

export default Imagelist