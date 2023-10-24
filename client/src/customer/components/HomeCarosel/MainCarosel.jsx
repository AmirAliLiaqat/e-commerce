import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';

const MainCarosel = () => {
    const items = mainCaroselData.map((item) =>
        <img className='cursor-pointer' role='presentation' src={item.image} alt="" />
    );
    
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            infinite
            autoPlayInterval={2000}
        />
    )
}

export default MainCarosel
