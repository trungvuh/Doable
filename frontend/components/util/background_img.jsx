import React from 'react';

const imageArray = [
  'http://res.cloudinary.com/trungvuh/image/upload/v1511815992/star-baby-girl-fantasy-ppt-backgrounds-powerpoint_mwebzy.jpg',
  'http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1300/v1511340654/24_izm9b5.jpg',
  'http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1500/v1511374128/25_bkagbn.jpg'];

var index = 0;

class BackgroundImg extends React.Component {

  render() {
    // var source;
    // const changeBgImage = () => {
    //   index += 1;
    //   index = index % imageArray.length;
    //   source = imageArray[index];
    // };
    // console.log(source);
    // setInterval(this.changeBgImage, 5000);
    //
    return (
      <div className="background">
        <img
          className="background-pic"
          src='http://res.cloudinary.com/trungvuh/image/upload/v1511815992/star-baby-girl-fantasy-ppt-backgrounds-powerpoint_mwebzy.jpg'/>
      </div>
    );

  }
}
//
// var imageUrl = "url('" + imageArray[imageIndex] + "')";
// $('body').css('background-image', imageUrl);
// imageIndex++;
// if (imageIndex >= imageArray.length) {
//     imageIndex = 0;
// }


//
// const img1 = <div> </div>
// const img2 = < div>
//
// setInterval(aowiejfoiaw){
//
// }


// <img src="http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1300/v1511340654/24_izm9b5.jpg"/>
// http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_700,w_1500/v1511374128/25_bkagbn.jpg

export default BackgroundImg;
