import React from 'react';

const imageArray = [
  'http://res.cloudinary.com/trungvuh/image/upload/v1511815992/star-baby-girl-fantasy-ppt-backgrounds-powerpoint_mwebzy.jpg',
  'http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1300/v1511340654/24_izm9b5.jpg',
  'http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1500/v1511374128/25_bkagbn.jpg'];

class BackgroundImg extends React.Component {

  render() {
    return (
      <div className="background" id="cf4a">
        <img
          src='http://res.cloudinary.com/trungvuh/image/upload/v1511815992/star-baby-girl-fantasy-ppt-backgrounds-powerpoint_mwebzy.jpg'/>
        <img
          src='http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1300/v1511340654/24_izm9b5.jpg'/>
        <img
          src='http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1500/v1511374128/25_bkagbn.jpg'/>
        <img
          src='http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1300/v1511340654/24_izm9b5.jpg'/>
      </div>
    );

  }
}

export default BackgroundImg;
