import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import api from '../service/api'

import { Repositories, Form } from '../styles/pages/dashboard'


function Dashboard() {
const [trending, setTrending] = useState('');
const [data, setData] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault()
    const key = process.env.REACT_APP_KEY
    const token = process.env.REACT_APP_TOKEN

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    const response = await api.get(`${trending}/day?${key}`,config)

    
    setData(response.data.results)
    
    console.log(data)
  }

  function handleChange (e) {
    console.log(e.target.value)
    setTrending(e.target.value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <select onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="movie">Filmes</option>
          <option value="tv">Séries</option>
          <option value="person">Pessoas</option>
        </select>

        <button type="submit">clique</button>
      </Form>
      <Repositories>
        {data.length === 0 ? <span>Escolha um trending</span> : data.map(item => (
          
          <Link
          key={item.original_title}
          to="/#"
        >
          <div>

            <img
              src={`http://image.tmdb.org/t/p/original${!!item.poster_path ? item.poster_path : item.profile_path}`}
              alt={!!item.original_title ? item.original_title : item.name}
            />
          </div>
          <div>
            <strong>{item.original_title}</strong>
            <p>{item.release_date}</p>
            <p>{item.vote_average}</p>

          </div>

        </Link>
        ))}

      </Repositories>
    </>
  );
}

export default Dashboard;
