import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "./components/Global/Global.css";
import Navbar from "./components/Navbar/Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importe os ícones de setas do react-icons ou utilize outros ícones de sua preferência

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzViMjMzZDQ1YzhlM2E4ZmFhMjlkNjQ2OGU5NjdkYiIsInN1YiI6IjY0YTM1MTI3MTEzODZjMDEzOWFlN2M1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eRUdH_YJhyZFXewyGkW_PLDXBBxfCEgkvVp5_VcLFiY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setTasks(data.results))
      .catch((err) => console.error(err));
  }, []);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container">
          <Outlet />

          <Slider {...settings}>
            {tasks.map((task) => (
              <div
                className="card"
                key={task.id}
                style={{ marginRight: "20px" }}
              >
                <Link to={`/DetailsItem/${task.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${task.poster_path}`}
                    alt={task.title}
                  />
                </Link>
                <h3>{task.title}</h3>
                <p>{task.overview}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <h5>
        Fonte: <span>TheMovie </span> JSON
      </h5>
      <Footer />
    </>
  );
}

function TaskCard({ task }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${task.poster_path}`}
        alt={task.title}
      />
      <h3>{task.title}</h3>
      <p>{task.overview}</p>
    </div>
  );
}

//funcao de navegação lateral - biblioteca react-icons
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <FaArrowLeft style={{ color: "white" }} />
    </div>
  );
};

//funcao de navegação lateral - biblioteca react-icons
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <FaArrowRight style={{ color: "white" }} />
    </div>
  );
};

export default App;
