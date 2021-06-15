import React from 'react'
import './GalleryIllustration.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/ema1.jpg',
    thumbnail: 'img/ema1.jpg',
    originalHeight: 400,
    thumbnailWidth: 15,
  },
  {
    original: 'img/ema2.jpg',
    thumbnail: 'img/ema2.jpg',
    originalHeight: 400,
    thumbnailWidth: 15,
  },
  {
    original: 'img/ema3.jpg',
    thumbnail: 'img/ema3.jpg',
    originalHeight: 400,
    thumbnailWidth: 15,
  },
  {
    original: 'img/ema4.jpg',
    thumbnail: 'img/ema4.jpg',
    originalHeight: 400,
    thumbnailWidth: 15,
  }
];

class GalleryIllustration extends React.Component {
  render() {
    return <ImageGallery items={images} autoPlay={true}/>;
  }
}

export default GalleryIllustration
