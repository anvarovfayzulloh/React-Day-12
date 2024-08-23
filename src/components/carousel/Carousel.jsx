import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useFetchWithId } from '../../hooks/useFetchWithId';

function App({ id }) {
  const product = useFetchWithId(`/products/${id}`);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (product?.images) {
      const carouselData = product.images.map((image) => ({
        image: image,
      }));
      setData(carouselData);
    }
  }, [product]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '900px',
    // Убрали margin
  };

  const thumbnailsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  };

  const thumbnailStyle = {
    width: '100px',
    marginBottom: '10px',
    cursor: 'pointer',
    border: '2px solid transparent'
  };

  const carouselStyle = {
    flex: '1',
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <div style={containerStyle}>
        <div style={thumbnailsContainerStyle}>
          {data.map((item, index) => (
            <img 
              key={index} 
              src={item.image} 
              alt={`Slide ${index + 1}`} 
              style={thumbnailStyle} 
              onClick={() => handleThumbnailClick(index)} 
            />
          ))}
        </div>
        <div style={carouselStyle}>
          <Carousel
            data={data}
            time={100}  
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false} 
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#cccccc"
            slideImageFit="cover"
            thumbnails={false} 
            startIndex={currentSlide} 
            style={{
              maxWidth: '500px',
              maxHeight: '500px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
