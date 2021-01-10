import React, {useEffect, useState} from 'react';

import api from '../service/api'

import { useParams } from 'react-router-dom'

function Detail() {
  const [movieDetail, setMovieDetail] = useState([])
  const { id } = useParams()

  async function getDetail() {
    const key = process.env.REACT_APP_KEY
    const token = process.env.REACT_APP_TOKEN

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const response = await api.get(`movie/${id}?${key}&language=pt-BR`,config)
    
    console.log(key) 
    console.log(id)
    console.log(response)
  }

  useEffect(()=>{
    getDetail()
  },[id])

 
  return (
    <h1>Detail</h1>
  );
}

export default Detail;
