import React from 'react'
import {graphql, useStaticQuery} from'gatsby'
import * as S from './style'

export function Footer() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
          footers {
            titleadd
            lorem
            titlelinks
            btnhomefooter
            btnabout
            btntaxifooter
            btnbookingfooter
            btncontactfooter
            titlefollow
            imgfacebook {
              url
            }
            imgtwitter {
              url
            }
            imglinkendin {
              url
            }
            imgyoutube {
              url
            }
            imginstagram {
              url
            }
            btnsubscribe
            imgbolinha {
              url
            }
          }
        }
      }
      
    `)
    const {titleadd, lorem, titlelinks, btnhomefooter, btnabout,  btntaxifooter,
        btnbookingfooter, btncontactfooter, titlefollow, imgfacebook, imgtwitter,
        imglinkendin, imgyoutube, imginstagram, btnsubscribe, imgbolinha } = data.alldata.footers[0]

    return(
      <S.ContainerFooterSpace>
        
        <S.ContainerFooter>
          <S.SectionFooter>
            <S.BoxFooter>
            <S.BoxAddress>
                <S.TitleFooter>{titleadd}</S.TitleFooter>
                <S.SubtitleFooter>{lorem}</S.SubtitleFooter>
            </S.BoxAddress>
            
            <S.BoxLinks>
                <S.TitleFooter>{titlelinks}</S.TitleFooter>
                <a href="#">
                        <S.ContainerLinksPrime>
                        <S.ImageLinks src={imgbolinha.url} alt=""/>
                        <S.ParagraphFollow href="#">{btnhomefooter}</S.ParagraphFollow>
                        </S.ContainerLinksPrime>

                        <S.ContainerLinks>
                        <S.ImageLinks src={imgbolinha.url} alt=""/>
                        <S.ParagraphFollow href="#">{btnabout}</S.ParagraphFollow>
                        </S.ContainerLinks>

                        <S.ContainerLinks>
                        <S.ImageLinks src={imgbolinha.url} alt=""/>
                        <S.ParagraphFollow href="#">{btntaxifooter}</S.ParagraphFollow>
                        </S.ContainerLinks>
                        
                        <S.ContainerLinks>
                        <S.ImageLinks src={imgbolinha.url} alt=""/>
                        <S.ParagraphFollow href="#">{btnbookingfooter}</S.ParagraphFollow>
                        </S.ContainerLinks>
                        
                        <S.ContainerLinks>
                          <S.ImageLinks src={imgbolinha.url} alt=""/>
                        <S.ParagraphFollow href="#">{btncontactfooter}</S.ParagraphFollow>
                        </S.ContainerLinks>
                      </a>
            </S.BoxLinks>

            <S.BoxFollow>
                <S.TitleFooter>Follow Us</S.TitleFooter>
                <a href="#">
                  <S.ContainerFollow>
                    <S.ImageFollow src={imgfacebook.url} alt=""/>
                    <S.ParagraphFollow href="#">Facebook</S.ParagraphFollow>
                  </S.ContainerFollow>

                  <S.ContainerFollow>
                    <S.ImageFollow src={imgtwitter.url} alt=""/>
                    <S.ParagraphFollow href="#">Twitter</S.ParagraphFollow>
                  </S.ContainerFollow>

                  <S.ContainerFollow>
                    <S.ImageFollow src={imglinkendin.url} alt=""/>
                    <S.ParagraphFollow href="#">Linkedin</S.ParagraphFollow>
                  </S.ContainerFollow>

                  <S.ContainerFollow>  
                    <S.ImageFollow src={imgyoutube.url} alt=""/>
                    <S.ParagraphFollow href="#">Youtube</S.ParagraphFollow>
                  </S.ContainerFollow>

                  <S.ContainerFollow>
                    <S.ImageFollow src={imginstagram.url} alt=""/>
                    <S.ParagraphFollow href="#">Instagram</S.ParagraphFollow>
                  </S.ContainerFollow>  
                </a>
            </S.BoxFollow>

            <S.BoxNews>
                <S.TitleFooter>Newsletter</S.TitleFooter>
                <S.InputFooter placeholder="Enter Your Email"></S.InputFooter>
                <S.BtnFooter>{btnsubscribe}</S.BtnFooter>
            </S.BoxNews>

            </S.BoxFooter>
            </S.SectionFooter>
        </S.ContainerFooter>
          <S.ContainerCopyright>
              <div>
                <S.ParagraphCopyright>2019 All Rights Reserved. Free html Templates</S.ParagraphCopyright>
              </div>
          </S.ContainerCopyright>
        </S.ContainerFooterSpace>
    )
}