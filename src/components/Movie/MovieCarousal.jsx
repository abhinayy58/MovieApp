import React from "react";
import { Carousel } from 'react-carousel-minimal';

const MovieCarousal = (props) => {
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const data = props?.image?.Images?.map((item,i) => {
        return {
            image:item,
            caption:props.Title
        }
      } )
     
      
  return (
<>
   {data ?  (<Carousel
    data={data}
    width="100%"
    height="600px"
    captionStyle={captionStyle}
    radius="10px"
    captionPosition="bottom"
    pauseIconColor="white"
    pauseIconSize="40px"
    slideBackgroundColor="darkgrey"
    slideImageFit="cover"
    automatic
    time={2000}
  />) : null }
  </>
  );
  
};

export default MovieCarousal;
