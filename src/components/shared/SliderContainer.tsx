import React, { Component } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from '../../styles/shared/SliderContainer.module.scss';
import svg from '../../assets/svg/nextArr.svg';

interface ISliderContainer {
  children: React.ReactNode;
  slidesToShow: number;
}

function NextArrow(props:CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={s.slider_container__after}><img src={svg} alt="arrow" /></div>
  );
}

function PrevArrow(props:CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={s.slider_container__before}><img src={svg} alt="arrow" /></div>
  );
}

export default class SliderContainer extends Component<ISliderContainer> {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className={s.slider_container} style={{
        width: "100%",
      }}>
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}
