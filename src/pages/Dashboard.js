import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeIcon from '@material-ui/icons/Grade';
import api from '../service/api'

import Logo from '../assests/logo-roboto.png'

import { ContainerCards, Form } from '../styles/pages/dashboard'


function Dashboard() {
const [trending, setTrending] = useState('all');
const [search, setSearch] = useState('');
const [error, setError] = useState('');
const [data, setData] = useState([]);
let history = useHistory()


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
    console.log(data)
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
          <div className='logo'>
            <img src={Logo} alt="Filmotéca"/>
          </div>

          <div className='choiseTrending'>
            <span>Escolha uma trending</span>
            <select onChange={handleChangeTranding}>
              <option value="all">Todos</option>
              <option value="movie">Filmes</option>
              <option value="tv">Séries</option>
              <option value="person">Pessoas</option>
            </select>
          </div>
          <div className="choiseMovie">
            <label>
              Procure um filme
            </label> 
              <input type="text" value={search} onChange={handleChangeSearch} placeholder="Pesquise..."/>
          </div>
       
      </Form>
      <ContainerCards>
        {data.length === 0 ? <span>Filme nao encontrado</span>
        
        : 
        
        !!error ?

        <div>{error}</div> :

        data.map(item => (
          
          <Link
          key={item.id}
          to={`/details${item.id}`}
          className={`${item.vote_average >= 6 ? 'highScore' : 'lowScore'}`}

        >
          <div>
          {!!item.poster_path ?
            <img
              src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.original_title}
            />

          : !!item.profile_path ?
            <img
              src={`http://image.tmdb.org/t/p/original${item.profile_path}`}
              alt={item.name}
            />

            :
            <img
              src={'http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}
              alt={'Sem imagem'}
          />

          }
          </div>
          <div>
            <strong>{!!item.title ? item.title : item.name}</strong>
            <p className="release-date">{!!item.release_date ? new Date(item.release_date).toLocaleDateString('pt-br') : 'data indisponivel'}</p>
            <div className={`${trending === 'person' ? 'popularity' : 'score'}-iconsScore`}>
              {!!item.vote_average ? <GradeIcon/> : <FavoriteIcon/> }
              <p>{!!item.vote_average ? item.vote_average : item.popularity} </p>
            </div>

          </div>

        </Link>
        ))}

      </ContainerCards>
    </>
  );
}

export default Dashboard;
