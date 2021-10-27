import React from 'react'
import * as S from './style'

export function Header({
    logoheader,
    home,
    taxi,
    booking,
    contact
}) {

return(
    <S.ContainerHeader>
        <S.ContainerLogo>
            <a href="">
            <S.Logo src={logoheader} alt=""/>
            </a>
        </S.ContainerLogo>
            <S.ContainerButtons>
                    <S.Buttons>{home}</S.Buttons>
                    <S.Buttons>{taxi}</S.Buttons>
                    <S.Buttons>{booking}</S.Buttons>
                    <S.Buttons>{contact}</S.Buttons>
            </S.ContainerButtons>
    </S.ContainerHeader>
)
}