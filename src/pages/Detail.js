import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom'

import api from '../service/api'

import Header from '../components/Header'
import Message from '../components/Message'

import { ContainerDetails } from '../styles/pages/detail'


function Detail() {
  const [mediaDetail, setMediaDetail] = useState([])
  const [error, setError] = useState('')
  const { params } = useParams()
  const history = useHistory()

  const [id, media_type] = params.split('&')

  async function getDetail() {
    const key = process.env.REACT_APP_KEY
    const token = process.env.REACT_APP_TOKEN

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const response = await api.get(`${media_type}/${id}?${key}&language=pt-BR`,config)
    
    setMediaDetail([...mediaDetail, response.data])
  }

  useEffect(()=>{
    if(media_type === 'undefined') {
      setError('Não conseguimos informações sobre esse título')
    }else{
      setError('')
    }
    
    getDetail()
  },[id,media_type])

 
  return (
    <>
      <Header detail goBack={()=>{history.goBack()}}/>
      
      {!!error ? 

      <Message error={error} />

      :
      
      <ContainerDetails>

        {!!mediaDetail && mediaDetail.length !== 0 && mediaDetail.map(media => (
        <>
          {!!media.poster_path ?
            <img
              src={`http://image.tmdb.org/t/p/original${media.poster_path}`}
              alt={media.original_title}
            />

          : !!media.profile_path ?
            <img
              src={`http://image.tmdb.org/t/p/original${media.profile_path}`}
              alt={media.name}
            />

            :
            <img
              src={'http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}
              alt={'Sem imagem'}
          />

          }

          <div className='detail-data'>
            <span className='detail-title'>{media.name || media.title}</span>
            <span className='detail-date'>{media.birthday || media.first_air_date || media.release_date}</span>
            <span className='detail-overview'>{media.overview || media.biography}</span>
          </div>
        </>
        ))}

      </ContainerDetails>}
      
    </>
  );
}

export default Detail;
