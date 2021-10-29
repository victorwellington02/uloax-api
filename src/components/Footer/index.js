import React from 'react'
import * as S from './style'

import {graphql, useStaticQuery} from'gatsby'
import { Link } from 'gatsby'

export function Footer() {
    const data = useStaticQuery(graphql`
    query MyQuery {
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
          }
        }
      }
      
    `)
    const {titleadd, lorem, titlelinks, btnhomefooter, btnabout,  btntaxifooter,
        btnbookingfooter, btncontactfooter, titlefollow, imgfacebook, imgtwitter,
        imglinkendin, imgyoutube, imginstagram, btnsubscribe } = data.alldata.footers[0]
      
    return(
        <S.ContainerFooter>
            <S.Boxaddress>
                <h2>{titleadd}</h2>
                <p>{lorem}</p>
            </S.Boxaddress>
            <div>
                <h2>{titlelinks}</h2>
                <Link to="#">
                    <S.List>
                        <li>{btnhomefooter}</li>
                        <li>{btnabout}</li>
                        <li>{btntaxifooter}</li>
                        <li>{btnbookingfooter}</li>
                        <li>{btncontactfooter}</li>  

                    </S.List>
                </Link>  
            </div>
            <div>
                <h3>{titlefollow}</h3>
                <a href="#">
                    <img src={imgfacebook.url} alt=""/>
                    <img src={imgtwitter.url} alt=""/>
                    <img src={imglinkendin.url} alt=""/>
                    <img src={imgyoutube.url} alt=""/>
                    <img src={imginstagram.url} alt=""/>
                </a>
            </div>
            <div>
                <h3>Newsletter</h3>
                <input></input>
                <button>{btnsubscribe}</button>
            </div>
        </S.ContainerFooter>
    )
}