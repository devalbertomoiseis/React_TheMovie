import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./DetailsItem.css";

const DetailsItem = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Função para buscar os detalhes do filme por ID da API do MDB
    const fetchMovieDetails = async (id) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2c5b233d45c8e3a8faa29d6468e967db`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails(id);
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="background">
        {" "}
        <Navbar />
      </div>

      <div className="container-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <h4>Data Lançamento: {movieDetails.release_date}</h4>
        {/* Exibir mais informações do filme aqui */}
        <br />
        <br />
        <Link to="/" className="link-details">
          {" "}
          Voltar inicio
        </Link>
      </div>
    </div>
  );
};

export default DetailsItem;
