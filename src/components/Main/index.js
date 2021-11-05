import React from 'react'
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'


export function Main(props){
    const data = useStaticQuery(graphql`
    query {
        alldata {
         mainS {
            paragraphtitle
            paragraphnumber
            titleour
            imgcarmain {
                url
            }
            titlewhyrider
            imgcarteira {
                url
            }
            titlepocket
            titlerides
            subtitleinfo
            imgphone {
                url
            }
            btnbooknow
            imgsinal {
                url
            }
            backgroundphone {
                url
            }
            backgroundplace {
                url
            }
            titledownload
            subtitletoday
            imgcar{
                url
              }
        }
    }
}
`)

const{paragraphtitle, paragraphnumber, titleour, imgcarmain, 
titlewhyrider, imgcarteira, titlepocket, titlerides, subtitleinfo, imgphone, 
btnbooknow, imgsinal, backgroundphone, backgroundplace, titledownload, subtitletoday, imgcar} = data.alldata.mainS[0]

    return(
        <S.ContainerMain>
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
            
        <S.ContainerRide>
            <S.BoxRide>
                <S.BoxTitleRide>
                    <S.TitleRide>Why Ride
                        <S.TextRide>With Uloax</S.TextRide>
                    </S.TitleRide>
                </S.BoxTitleRide>
            </S.BoxRide>
        </S.ContainerRide>

        <S.ContainerRideSecond>
            <S.BoxRides>
                <S.BoxImageRide>
                    <S.ImageRide src={imgcarteira.url} alt=""/>
                </S.BoxImageRide>
                <S.BoxTextRide>
                    <S.TitleCard>{titlepocket}</S.TitleCard>
                    <S.SubTitleCard>{subtitleinfo}</S.SubTitleCard>
                    <S.ButtonCard href="">{btnbooknow}</S.ButtonCard>
                </S.BoxTextRide>
            </S.BoxRides>

            <S.BoxRidesReverse>
                <S.BoxImageRideReverse>
                    <S.ImageRide src={imgphone.url} alt=""/>
                </S.BoxImageRideReverse>
                <S.BoxTextRideReverse>
                    <S.TitleCardReverse>{titlerides}</S.TitleCardReverse>
                    <S.SubTitleCardReverse>{subtitleinfo}</S.SubTitleCardReverse>
                    <S.ButtonCardReverse href="">{btnbooknow}</S.ButtonCardReverse>
                </S.BoxTextRideReverse>
            </S.BoxRidesReverse>

            <S.BoxRides>
                <S.BoxImageRide>
                    <S.ImageRide src={imgsinal.url} alt=""/>
                </S.BoxImageRide>
                <S.BoxTextRide>
                    <S.TitleCard>{titlepocket}</S.TitleCard>
                    <S.SubTitleCard>{subtitleinfo}</S.SubTitleCard>
                    <S.ButtonCard href="">{btnbooknow}</S.ButtonCard>
                </S.BoxTextRide>
            </S.BoxRides>

            <S.BoxRidesReverse>
                <S.BoxImageRideReverse>
                    <S.ImageRide src={imgsinal.url} alt=""/>
                </S.BoxImageRideReverse>
                <S.BoxTextRideReverse>
                    <S.TitleCardReverse>{titlerides}</S.TitleCardReverse>
                    <S.SubTitleCardReverse>{subtitleinfo}</S.SubTitleCardReverse>
                    <S.ButtonCardReverse href="">{btnbooknow}</S.ButtonCardReverse>
                </S.BoxTextRideReverse>
            </S.BoxRidesReverse>
        </S.ContainerRideSecond>

        <S.ContainerLocation backgroundImage={backgroundplace.url}>
            <S.BoxLocation>
                <S.TitleColumn>{titledownload}</S.TitleColumn>
                <S.SubtitleColumn>{subtitletoday}</S.SubtitleColumn>
            </S.BoxLocation>
            <S.PhoneColumn>
                <S.BoxImagePhone>
                    <S.ImagePhone src={backgroundphone.url} alt=""/>
                </S.BoxImagePhone>
            </S.PhoneColumn>
        </S.ContainerLocation>
        </S.ContainerMain>
    )
}