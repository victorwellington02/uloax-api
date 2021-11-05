import styled from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 5rem;
opacity: 1.4;
background-color: #000;
`

export const ContainerLogo = styled.div`
margin-right: 6vw;
`

export const Logo = styled.img`
width: 100%;
`

export const ContainerButtons = styled.div`
`

export const Buttons = styled.button`
background: transparent;
font-size: 18px;
border: 0;
cursor: pointer;
color: white;
margin-right: 5.5vw;
&:hover {
    color: #fecf3d;
}
`

export const ContainerSliderPrimary = styled.div`
overflow-x: hidden;
overflow-y: hidden;
`

export const DivSlide = styled.div`
height: 80vh;
background-color: black;
`

export const BoxBook = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-left: 200px;
background-color: #f8ca11;
width: 32%;
float: left;
height: 160px;
margin-top: 10px;
margin-bottom: 40px;
text-align: center;
`

export const TextBook = styled.h1`
width: 100%;
float: left;
font-size: 40px;
color: #fbfaf6;
text-align: center;
`

export const TextBookCall = styled.h1`
width: 100%;
float: left;
font-size: 40px;
color: #1a1a1a;
text-align: center;
`

export const BoxImageTaxi = styled.div`
width: 44%;
margin-left: 10%;
float: left;
`

export const BoxDestination = styled.div`
display: flex;
margin-top: 25px;
`

export const BoxInfos = styled.div`
width: 45%;
background-color: #fefefe;
margin-top: -130px;
padding-bottom: 30px;
float: left;
`

export const ImageTaxi = styled.img`
max-width: 100%;
height: 315px;
margin-right: 335px;
`

export const TextDestination = styled.h1`
width: 100%;
float: left;
font-size: 26px;
color: #fbfaf6;
text-align: center;
margin-left: 80px;
`

export const DivTest = styled.div`
diplay: flex;
flex-wrap: wrap;
width: 100%;
`

export const InputInfos = styled.input`
background: #e1e1e1;
border-bottom: 1px;
solid #fffcf4;
border-top: 0px;
border-left: 0px;
border-right: 0px;
color: #000;
width: 95%;
height: 30px;
font-size: 20px;
padding: 20px 20px 20px 20px;
margin-bottom: 10px;
border-radius: 5px;
margin: 0 auto;
display: block;

`

export const BoxInput = styled.div`
margin-bottom: 1rem;
`

export const TextInput = styled.h2`
width: 100%;
font-size: 30px;
color: #000;
border-bottom: 0px solid #49bcfe;
padding-top: 20PX;
text-align: center;
`

export const ButtonInput = styled.button`
width: 25%;
float: right;
background-color: #353433;
color: #fefefe;
text-align: center;
padding: 12px 0px;
font-size: 18px;
border-radius: 10px;
margin-right: 30px;
cursor: pointer;
&:hover {
    color: black;
    background-color: #fecf3d;
}
`