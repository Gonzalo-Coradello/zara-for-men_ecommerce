import { useState, useEffect } from 'react'
import './ItemDetailGallery.css'

const ItemDetailGallery = ({ title, images, selectedColor }) => {
    
    const [selectedImage, setSelectedImage] = useState((images[selectedColor] || images)[0])

    useEffect(() => {
        if(selectedColor) {
            setSelectedImage(images[selectedColor][0])
            }
    }, [selectedColor, images])
    
    return (
        <div className="item-detail-gallery">
            <img className="detail__img" src={selectedImage} alt={title} />
            <div className="gallery__images">
                {(images[selectedColor] || images).map((image) => {
                    return (
                        <div className='gallery__image-container' key={image} onClick={() => setSelectedImage(image)}>
                            <img src={image} alt={title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemDetailGallery