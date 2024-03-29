import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GradeIcon from "@material-ui/icons/Grade";
import api from "../service/api";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { ContainerCards } from "../styles/pages/dashboard";

import Spinner from "react-spinner-material";
import Message from "../components/Message";

import formatDate from "../utils/formatDate";

function Dashboard() {
  const [trending, setTrending] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  async function getTrending() {
    const key = process.env.REACT_APP_KEY;
    const token = process.env.REACT_APP_TOKEN;

    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const response = await api.get(
      `trending/${trending}/day?${key}&language=pt-BR`,
      config
    );

    setData(highScore(response.data.results));
  }

  function highScore(array) {
    array.sort((a, b) => {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      return 0;
    });

    return array;
  }

  async function getMovie() {
    const key = process.env.REACT_APP_KEY;
    const token = process.env.REACT_APP_TOKEN;

    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const response = await api.get(
        `search/movie?${key}&query=${search}&language=pt-BR`,
        config
      );

      if (response.data.results.length === 0) {
        setError("Nenhum filme foi encontrado");
        return;
      }

      setData(highScore(response.data.results));
      setError(null);
    } catch (e) {
      setError("Precisa preencher o campo de busca");
    }
  }

  useEffect(() => {
    loginInOpensubtitle();
  }, []);

  useEffect(() => {
    getTrending();
  }, [trending]);

  function handleSubmit(e) {
    e.preventDefault();
    getMovie();
    setSearch("");
  }

  async function loginInOpensubtitle() {
    if (token.length > 2) return;

    const apiKey = process.env.REACT_APP_API_KEY_OPENSUBTITLE;
    const username = process.env.REACT_APP_USERNAME_OPENSUBTITLE;
    const password = process.env.REACT_APP_PASSWORD_OPENSUBTITLE;

    const options = {
      method: "POST",
      url: "https://api.opensubtitles.com/api/v1/login",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
      },
      data: { username, password },
    };

    const { data } = await axios.request(options);

    setToken(data.token);
  }

  function handleChangeTranding(e) {
    setError(null);
    setTrending(e.target.value);
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Header>
        <div className="choiseTrending">
          <select defaultValue={"default"} onChange={handleChangeTranding}>
            <option value="default" disabled>
              Trending
            </option>
            <option value="all">Todos</option>
            <option value="movie">Filmes</option>
            <option value="tv">Séries</option>
            <option value="person">Pessoas</option>
          </select>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="choiseMovie">
            <input
              className="choiseMovie"
              type="text"
              value={search}
              onChange={handleChangeSearch}
              placeholder="Pesquise..."
            />
          </div>
        </form>
      </Header>
      <ContainerCards>
        {!data ? (
          <Spinner color="white" visible={true} />
        ) : !!error ? (
          <Message error={error} />
        ) : data.length !== 0 ? (
          data.map((item) => (
            <Link
              key={item.id}
              to={`/detail${item.id}&${item.media_type}`}
              className={`${
                item.media_type === "movie"
                  ? item.vote_average >= 6
                    ? "highScore"
                    : "lowScore"
                  : ""
              }`}
            >
              <div>
                {!!item.poster_path ? (
                  <img
                    src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.original_title}
                  />
                ) : !!item.profile_path ? (
                  <img
                    src={`http://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                  />
                ) : (
                  <img
                    src={
                      "http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                    }
                    alt={"Sem imagem"}
                  />
                )}
              </div>

              <div>
                <strong>{!!item.title ? item.title : item.name}</strong>
                {item.media_type !== "person" && (
                  <p className="release-date">
                    {!!item.release_date
                      ? formatDate(item.release_date)
                      : !!item.first_air_date
                      ? formatDate(item.first_air_date)
                      : "data não indisponivel"}
                  </p>
                )}
                <div
                  className={`${
                    trending === "person" ? "popularity" : "score"
                  }-iconsScore`}
                >
                  {!!item.vote_average ? <GradeIcon /> : <FavoriteIcon />}
                  <p>
                    {!!item.vote_average ? item.vote_average : item.popularity}{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Message error={error} />
        )}
      </ContainerCards>
      <Footer />
    </>
  );
}

export default Dashboard;
