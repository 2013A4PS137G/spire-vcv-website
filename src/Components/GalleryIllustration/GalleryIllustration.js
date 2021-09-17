import React from 'react'
import './GalleryIllustration.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/slider/out_ema1.jpg',
    thumbnail: 'img/slider/out_ema1.jpg',
    originalHeight: 370,
    thumbnailWidth: 15,
  },
  {
    original: 'img/slider/out_f1.png',
    thumbnail: 'img/slider/out_f1.png',
    originalHeight: 370,
    thumbnailWidth: 15,
  },
  {
    original: 'img/slider/out_m1.png',
    thumbnail: 'img/slider/out_m1.png',
    originalHeight: 370,
    thumbnailWidth: 15,
  },
  {
    original: 'img/slider/out_setup3.png',
    thumbnail: 'img/slider/out_setup3.png',
    originalHeight: 370,
    thumbnailWidth: 15,
  },
  {
    original: 'img/slider/out_setup1.png',
    thumbnail: 'img/slider/out_setup1.png',
    originalHeight: 370,
    thumbnailWidth: 15,
  },
  {
    original: 'img/slider/out_setup2.png',
    thumbnail: 'img/slider/out_setup2.png',
    originalHeight: 370,
    thumbnailWidth: 15,
  }
];

class GalleryIllustration extends React.Component {
  render() {
    return <ImageGallery items={images} autoPlay={true}/>;
  }
}

export default GalleryIllustration
