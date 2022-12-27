import { useState, useEffect } from 'react'
import './ItemDetailGallery.css'

const ItemDetailGallery = ({ title, images, selectedColor }) => {
    
    const [selectedImage, setSelectedImage] = useState((images[selectedColor] || images)[0])
    const [lineHeight, setLineHeight] = useState(66)
 
    useEffect(() => {
        if(selectedColor) {
            setSelectedImage(images[selectedColor][0])
        }
    }, [selectedColor, images])

    useEffect(() => {

    }, [lineHeight])
    
    const handleClick = (image) => {
        setSelectedImage(image)
        const index = (images[selectedColor] || images).indexOf(image)
        const newHeight = 64 * (index + 1) + 6 * (index + 1.5)
        console.log(newHeight)
        setLineHeight(newHeight)
    }

    const isSelected = (image) => {
        return image === selectedImage ? true : false
    }
    
    return (
        <div className="item-detail-gallery">
            <img className="detail__img" src={selectedImage} alt={title} />
            <div className="gallery__images">
                <div className="gallery__line" style={{height: lineHeight}} />
                {(images[selectedColor] || images).map((image) => {
                    return (
                        <div className={isSelected(image) ? 'gallery__image-container selected' : 'gallery__image-container'} key={image} onClick={() => handleClick(image)}>
                            <img src={image} alt={title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemDetailGallery