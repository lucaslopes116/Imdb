import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import api from "../service/api";

import Header from "../components/Header";
import Message from "../components/Message";

import { ContainerDetails } from "../styles/pages/detail";

import formatDate from "../utils/formatDate";
import {
  SubtitlesButton,
  SubtitlesContainer,
  SubtitlesEmpty,
  SubtitlesText,
} from "../styles/components/subtitleButton";
const OpenSubtitlesApi = require("opensubtitles-api");

function Detail() {
  const [mediaDetail, setMediaDetail] = useState([]);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const { params } = useParams();
  const history = useHistory();

  const [id, media_type] = params.split("&");

  async function getDetail() {
    const key = process.env.REACT_APP_KEY;
    const token = process.env.REACT_APP_TOKEN;

    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = await api.get(
      `${media_type}/${id}?${key}&language=pt-BR`,
      config
    );

    setMediaDetail([response.data]);

    const OpenSubtitles = new OpenSubtitlesApi({
      useragent: "UserAgent",
      ssl: true,
    });

    OpenSubtitles.search({
      sublanguageid: "pt",
      extensions: ["srt"],
      imdbid: `${response.data.imdb_id}`,
      query: `${response.data.original_name}`,
      gzip: true,
      limit: 3,
    }).then((res) => {
      if (!res.pt) return;
      let url = res.pt[0].url;

      if (!url) return;
      setUrl(url);
    });
  }

  useEffect(() => {
    if (media_type === "undefined") {
      setError("Não conseguimos informações sobre esse título");
    } else {
      setError("");
    }

    getDetail();
  }, [id, media_type]);

  function handleUrl() {
    window.location.href = `${url}`;
  }

  return (
    <>
      <Header
        detail
        goBack={() => {
          history.goBack();
        }}
      />

      {!!error ? (
        <Message error={error} />
      ) : (
        <ContainerDetails>
          {!!mediaDetail &&
            mediaDetail.length !== 0 &&
            mediaDetail.map((media) => (
              <>
                {!!media.poster_path ? (
                  <div key={media.id} className="detail-photo">
                    <img
                      src={`http://image.tmdb.org/t/p/original${media.poster_path}`}
                      alt={media.original_title}
                    />
                  </div>
                ) : !!media.profile_path ? (
                  <div key={media.id} className="detail-photo">
                    <img
                      src={`http://image.tmdb.org/t/p/original${media.profile_path}`}
                      alt={media.name}
                    />
                  </div>
                ) : (
                  <div key={media.id} className="detail-photo">
                    <img
                      src={
                        "http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                      }
                      alt={"Sem imagem"}
                    />
                  </div>
                )}
                <div className="detail-data">
                  <span className="detail-title">
                    {media.name || media.title}
                  </span>
                  <span className="detail-date">
                    {formatDate(
                      media.birthday ||
                        media.first_air_date ||
                        media.release_date
                    )}
                  </span>
                  <span className="detail-overview">
                    {media.overview ||
                      media.biography ||
                      "Api nao disponibiliza esse informacao"}
                  </span>
                </div>
              </>
            ))}
        </ContainerDetails>
      )}
      {url.length > 2 ? (
        <SubtitlesContainer>
          <SubtitlesButton onClick={handleUrl}>
            <SubtitlesText>Baixar legenda</SubtitlesText>
          </SubtitlesButton>
        </SubtitlesContainer>
      ) : (
        <SubtitlesEmpty>Sem legenda disponível</SubtitlesEmpty>
      )}
    </>
  );
}

export default Detail;
