import React from 'react'
import {graphql} from 'gatsby'
import "./style.css";
import {Header} from "../components/Header"
import { Main } from "../components/Main"
import {Footer} from "../components/Footer"

export const query = graphql`
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

`
export default function Index({data}){

  const dataOptions = data.alldata.headers[0]

  return(
    <div>
      {console.log("to aqui", data)}
      <Header
      logoheader={dataOptions.logoheader.url}
      home={dataOptions.btnhome}
      taxi={dataOptions.btntaxi}
      booking={dataOptions.btnbooking}
      contact={dataOptions.btncontact}
      />
    <Main />
    <Footer />
    </div>
  )
}