import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import api from '../service/api'

import { Repositories, Form } from '../styles/pages/dashboard'


function Dashboard() {
const [trending, setTrending] = useState('all');
const [search, setSearch] = useState('');
const [error, setError] = useState('');
const [data, setData] = useState([]);

async function getTrending() {
  const key = process.env.REACT_APP_KEY
  const token = process.env.REACT_APP_TOKEN

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  const response = await api.get(`trending/${trending}/day?${key}&language=pt-BR`,config)

  

  setData(highScore(response.data.results))
  
}

function highScore(array){
  array.sort((a,b)=>{
    if (a.vote_average > b.vote_average) {
      return -1;
    }
    if (a.vote_average < b.vote_average) {
      return 1;
    }
    return 0;
  })

  return array
}

async function getMovie() {
  const key = process.env.REACT_APP_KEY
  const token = process.env.REACT_APP_TOKEN

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  try{
    const response = await api.get(`search/movie?${key}&query=${search}&language=pt-BR`,config)

    setData(highScore(response.data.results))
    setError(null)
  }catch(e) {
    setError('Filme nao encontrado')
  }
  
}

  useEffect(()=>{
    getTrending()
  },[trending || search])

  async function handleSubmit(e) {
    e.preventDefault()
    getMovie()
    setSearch('')
  }

  function handleChangeTranding (e) {
    setError(null)
    setTrending(e.target.value)

  }

  function handleChangeSearch(e) {
    setSearch(e.target.value)
  }
  

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <select onChange={handleChangeTranding}>
          <option value="all">Todos</option>
          <option value="movie">Filmes</option>
          <option value="tv">Séries</option>
          <option value="person">Pessoas</option>
        </select>

        <label>
          Procure um filme
          <input type="text" value={search} onChange={handleChangeSearch} placeholder="Procure um filme"/>
        </label>

        <button type="submit">clique</button>
      </Form>
      <Repositories>
        {data.length === 0 ? <span>Filme nao encontrado</span>
        
        : 
        
        !!error ?

        <div>{error}</div> :

        data.map(item => (
          
          <Link
          key={item.id}
          to="/#"
        >
          <div>

            <img
              src={`http://image.tmdb.org/t/p/original${!!item.poster_path ? item.poster_path : item.profile_path}`}
              alt={!!item.original_title ? item.original_title : item.name}
            />
          </div>
          <div>
            <strong>{item.title}</strong>
            <p>{!!item.release_date ? new Date(item.release_date).toLocaleDateString('pt-br') : 'data indisponivel'}</p>
            <p>{item.vote_average}</p>

          </div>

        </Link>
        ))}

      </Repositories>
    </>
  );
}

export default Dashboard;
