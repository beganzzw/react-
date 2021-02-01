import React, { Component } from 'react';
import {Carousel} from 'antd-mobile'
// import swiperJpg from 'assets/swiper1'
import swiperJpg from 'assert/swiper1.jpg'
export default class Swiper extends Component {
  render() {
    return (
      <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <img src={swiperJpg} alt="aaa" />
      </Carousel>
    );
  }
}
