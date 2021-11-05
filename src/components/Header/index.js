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
      speed: 3000,
      slidesToScroll: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    
const data = useStaticQuery(graphql`
query {
    alldata {
    headers {
      btnbooking
      btnhome
      btncontact
      btntaxi
      logoheader {
        url
      }
      imgtaxiheader {
        url
      }
      imgamericantaxiheader {
        url
      }
    }
  }
}
`)

  const{logoheader, btnhome, btntaxi, btnbooking, btncontact,
     imgtaxiheader, imgamericantaxiheader} = data.alldata.headers[0]

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

      <S.ContainerSliderPrimary>
        <Slider {...settings}>
          <S.DivSlide>
            <S.DivTest>
            <S.BoxBook>
              <S.TextBook>BOOK NOW</S.TextBook>
              <S.TextBookCall>(+71) 1234567890</S.TextBookCall>
            </S.BoxBook>
            <S.BoxImageTaxi>
              <S.ImageTaxi src={imgtaxiheader.url}/>
            </S.BoxImageTaxi>
            </S.DivTest>
            <S.BoxDestination>
              <S.TextDestination>Book a City Taxi to your destination in town</S.TextDestination>
            </S.BoxDestination>
            
            <S.BoxInfos>
              <S.TextInput>Your everyday travel partner</S.TextInput>
              
              <S.BoxInput>
              <S.InputInfos placeholder="PICKUP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="DROP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="Enter Your Email"></S.InputInfos>
              </S.BoxInput>
              <S.ButtonInput>SEARCH</S.ButtonInput>
            </S.BoxInfos>
          </S.DivSlide>
          <S.DivSlide>
            <S.DivTest>
            <S.BoxBook>
              <S.TextBook>BOOK NOW</S.TextBook>
              <S.TextBookCall>(+71) 1234567890</S.TextBookCall>
            </S.BoxBook>
            <S.BoxImageTaxi>
              <S.ImageTaxi src={imgtaxiheader.url}/>
            </S.BoxImageTaxi>
            </S.DivTest>
            <S.BoxDestination>
              <S.TextDestination>Book a City Taxi to your destination in town</S.TextDestination>
            </S.BoxDestination>
            
            <S.BoxInfos>
              <S.TextInput>Your everyday travel partner</S.TextInput>
              
              <S.BoxInput>
              <S.InputInfos placeholder="PICKUP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="DROP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="Enter Your Email"></S.InputInfos>
              </S.BoxInput>
              <S.ButtonInput>SEARCH</S.ButtonInput>
            </S.BoxInfos>
          </S.DivSlide>
          <S.DivSlide>
            <S.DivTest>
            <S.BoxBook>
              <S.TextBook>BOOK NOW</S.TextBook>
              <S.TextBookCall>(+71) 1234567890</S.TextBookCall>
            </S.BoxBook>
            <S.BoxImageTaxi>
              <S.ImageTaxi src={imgamericantaxiheader.url}/>
            </S.BoxImageTaxi>
            </S.DivTest>
            <S.BoxDestination>
              <S.TextDestination>Book a City Taxi to your destination in town</S.TextDestination>
            </S.BoxDestination>
            
            <S.BoxInfos>
              <S.TextInput>Your everyday travel partner</S.TextInput>
              
              <S.BoxInput>
              <S.InputInfos placeholder="PICKUP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="DROP"></S.InputInfos>
              </S.BoxInput>

              <S.BoxInput>
              <S.InputInfos placeholder="Enter Your Email"></S.InputInfos>
              </S.BoxInput>
              <S.ButtonInput>SEARCH</S.ButtonInput>
            </S.BoxInfos>
          </S.DivSlide>
        </Slider>
      </S.ContainerSliderPrimary>
      </>
    );
  }