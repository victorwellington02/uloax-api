import React from "react";
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export function Header() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
const data = useStaticQuery(graphql`
query {
    alldata {
    headers {
      btnbooking
      btnhome
      btncontact
      btntaxi
      titleour
      logoheader {
        url
      }
    }
  }
}
`)

  const{logoheader, btnhome, btntaxi, btnbooking, btncontact} = data.alldata.headers[0]

    return (
      <>
      <S.ContainerHeader>
         <S.ContainerLogo>
           <a href="">
            <S.Logo src={logoheader.url} alt=""/>
           </a>
         </S.ContainerLogo>
         <S.ContainerButtons>
           <S.Buttons>{btnhome}</S.Buttons>
            <S.Buttons>{btntaxi}</S.Buttons>
            <S.Buttons>{btnbooking}</S.Buttons>
            <S.Buttons>{btncontact}</S.Buttons>
          </S.ContainerButtons>
          </S.ContainerHeader>
      <S.ContainerSlider>
        <h2> Single Item </h2>
        <Slider {...settings}>
          <div>
            <img src={logoheader.url} alt=""/>
          </div>
          <div>
          <img src={logoheader.url} alt=""/>
          </div>
          <div>
          <img src={logoheader.url} alt=""/>
          </div>
        </Slider>
      </S.ContainerSlider>
      </>
    );
  }