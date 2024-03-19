import { ChevronLeft, ChevronRight } from 'react-feather'
import styles from './styles.module.css'
import { useState } from 'react'


export default function Carousel({ images, defaultImageIndex = 0 }) {

    const [selectedImageIndex, setSelectedImageIndex] = useState(defaultImageIndex);

    const handlePrev = () => {
        if (selectedImageIndex === 0) {
            setSelectedImageIndex(images.length - 1);
            return;
        }
        setSelectedImageIndex(selectedImageIndex - 1);
    }

    const handleNext = () => {
        if (selectedImageIndex === images.length - 1) {
            setSelectedImageIndex(0);
            return;
        }
        setSelectedImageIndex(selectedImageIndex + 1);
    }

    return (
        <div className={styles.carousel}>
            <button className={styles.prev} onClick={handlePrev}>
                <ChevronLeft />
            </button>


            {/* <div className={styles.images}>
                <img src={images[selectedImageIndex].src} alt="Image" />
            </div> */}

            <div className={styles.images}>
                {images.map((image,index)=>(
                    <img key={index} src={image.src} alt="Image" style={{transform:`translateX(${-selectedImageIndex}00%)`}} />
                ))}
            </div>

            {/* <div className={styles.images}>
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt="Image" style={{transform: `translateX(-000%)`}}/>
                ))
                }
            </div> */}


            <button className={styles.next} onClick={handleNext}>
                <ChevronRight />
            </button>
        </div>
    )
}

// Homework - Create a image shift animation here
// Hints - transform propery
// Image Map