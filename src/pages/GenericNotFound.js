import React from 'react'
import { useHistory } from 'react-router-dom'

import Message from '../components/Message'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import NotFound from '../assests/notFound.jpg'

import { NotFoundPage } from '../styles/pages/notFound'


function GenericNotFound() {
  const history = useHistory()

  return(
    <NotFoundPage onClick={()=>{history.push('/')}}>
      <img src={NotFound} alt="Pagina nao encontrada"/>
      <Message error={'Não há nada para ver aqui'}/>
      <div className='notFound-getOut'>
        <ArrowBackIcon style={{color: 'white'}}/>
        <span>Sair daqui</span>
      </div>
    </NotFoundPage>  
  )
}

export default GenericNotFound