import styled from "styled-components"
import {IoLogoIonitron} from 'react-icons/io'
export const Div =styled.div`
width: 100vw;
height: 9vh;
background: #e66465;
`
export const Container =styled.div`
background-color:#e66465;
border: solid 1px #e66465;
border-radius: 50px;
height: 8vh;
width: 12vw;
display: flex;
margin: auto;
:hover{
    background-color: #ffff;
}



`

export const Sim =styled(IoLogoIonitron)`
height: max-content;
font-size: 40px;
color: black;
display: flex;
margin: auto;
:hover{
    cursor: pointer;
    color: blue;
    
    
}
`