import React from 'react';

const Gallery = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Restaurant ${index}`} style={{ width: '200px', height: 'auto', margin: '10px' }} />
            ))}
        </div>
    );
};

export default Gallery;