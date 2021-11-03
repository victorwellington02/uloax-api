import React from 'react'
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'

export function Header(){
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
      imgcar{
        url
      }
    }
  }
}
`)

const{logoheader, btnhome, btntaxi, btnbooking, btncontact, imgcar} = data.alldata.headers[0]

return(
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
    <S.Containercard>
      <S.Boxcard>
        <S.Boxtitle>
          <S.Textour>Our
            <S.Texttaxi>Taxi</S.Texttaxi>
          </S.Textour>
        </S.Boxtitle>
      <S.Cards>
        <S.InfoCar>
          <S.Numbercar>01</S.Numbercar>
          <S.Titlecard>CAR 1</S.Titlecard>
          <S.Cardparagraph>act that a reader will be
          distracted</S.Cardparagraph>
          <div>
            <a href="#">
              <S.Carheader src={imgcar.url} alt="" />
            </a>
          </div>
        </S.InfoCar>
        <S.InfoCar>
          <S.Numbercar>02</S.Numbercar>
          <S.Titlecard>CAR 2</S.Titlecard>
          <S.Cardparagraph>act that a reader will be
          distracted</S.Cardparagraph>
          <div>
            <a href="#">
              <S.Carheader src={imgcar.url} alt="" />
            </a>
          </div>
        </S.InfoCar>
        <S.InfoCar>
          <S.Numbercar>03</S.Numbercar>
          <S.Titlecard>CAR 3</S.Titlecard>
          <S.Cardparagraph>act that a reader will be
          distracted</S.Cardparagraph>
          <div>
            <a href="#">
              <S.Carheader src={imgcar.url} alt="" />
            </a>
          </div>
        </S.InfoCar>
      </S.Cards>
      </S.Boxcard>
    </S.Containercard>
  </>
    
)
}