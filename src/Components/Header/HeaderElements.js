import styled from "styled-components";
import {GrUserWorker} from 'react-icons/gr'
import {AiOutlineWechat} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'


export const Div = styled.div`
border-bottom: 1px solid rgba(220,220,220,0.7);
display: flex;
justify-content: space-between;

`

export const Profile = styled(CgProfile)`
font-size: 2rem;
  
  :hover{
    cursor: pointer;
    color: red;
  }
`
export const Chat = styled(AiOutlineWechat)`
font-size: 2rem;

  :hover{
    cursor: pointer;
    color: red;
  }
`

export const Logo = styled(GrUserWorker)`
font-size: 2rem;

  :hover{
    cursor: pointer;

  }
`


