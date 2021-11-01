import React from 'react'
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'

export function Main(){
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
        }
    }
}
`)

const{paragraphtitle, paragraphnumber, titleour, imgcarmain, 
titlewhyrider, imgcarteira, titlepocket, titlerides, subtitleinfo, imgphone, 
btnbooknow, imgsinal, backgroundphone, backgroundplace, titledownload, subtitletoday} = data.alldata.mainS[0]

    return(
        <S.ContainerMain>

        <S.ContainerRide>
            <S.BoxRide>
                <S.BoxTitleRide>
                    <S.TitleRide>{titlewhyrider}</S.TitleRide>
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

        </S.ContainerMain>
    )
}