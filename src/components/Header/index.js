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
      logoheader {
        url
      }
    }
  }
}
`)

const{logoheader, btnhome, btntaxi, btnbooking, btncontact} = data.alldata.headers[0]

return(
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
)
}