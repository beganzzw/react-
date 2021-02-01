import React, { Component } from 'react';
import Header from './Header'
import Swiper from "./Swiper"


export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <Header />
        <Swiper />
      </div>
    );
  }
}
