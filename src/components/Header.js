import React from 'react'
import { useHistory } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Logo from '../assests/logo-roboto.png'

import { GoBackContainer } from '../styles/pages/detail'
import { Header } from '../styles/components/header'


function HeaderContainer({ children, detail=false, goBack }){
  const history = useHistory()
  return(
    <>
      <Header>
        <div className='logo' onClick={()=>{history.push('/')}}>
          <img src={Logo} alt="Filmotéca"/>
        </div>
        {children}

      </Header>
      {detail &&
        <GoBackContainer onClick={goBack}>
          <ArrowBackIcon className='btn-goback'/>
          <span>Retornar</span>
        </GoBackContainer>
      }
    </>
  )
}

export default HeaderContainer