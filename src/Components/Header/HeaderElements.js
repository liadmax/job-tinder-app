import styled from "styled-components";
import {GrUserWorker} from 'react-icons/gr'
import {AiOutlineWechat} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdSupervisedUserCircle} from 'react-icons/md'

export const Div = styled.div`
padding: 1rem;
background-color: #9198e5;
border-top: 1px solid rgba(220,220,220,0.7);
display: flex;
justify-content: space-between;

`

export const Profile = styled(CgProfile)`
font-size: 2rem;
  
  :hover{
    cursor: pointer;
    color: blue;
  }
`
export const Chat = styled(AiOutlineWechat)`
font-size: 2rem;

  :hover{
    cursor: pointer;
    color: blue;
  }
`

export const Logo = styled(GrUserWorker)`
font-size: 2rem;

  :hover{
    cursor: pointer;
   

  }
`
export const Boss =styled(MdSupervisedUserCircle)`
font-size: 2rem;

:hover{
  cursor: pointer;
 
  

}
`
export const H3 =styled.h3`
color: black;
font-weight: 200;
:hover{
  cursor: pointer;
  
}
`
