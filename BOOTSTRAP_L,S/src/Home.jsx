import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman faces his greatest challenge in this epic saga.",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey through space and time to save humanity.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
    },
    {
      id: 4,
      title: "Parasite",
      description: "A dark comedy thriller that explores class disparities.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTRGm5Vxt-AKoe72ASaC0F1w58TkuIQTuYrjrzhHkAcZYXXUS9WQdAuaikkuRMX50MWN01lw",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <header className="jumbotron text-center mt-4">
          <h1>Welcome to My Website</h1>
          <p className="lead">
            Explore the best movies with our featured collection.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </header>

        <section className="mt-5">
          <h2 className="mb-4 text-center">Featured Movies</h2>
          <div className="row">
            {movies.map((movie) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={movie.id}>
                <div className="card h-100 shadow">
                  <img
                    src={movie.image}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: "250px", objectFit: "cover" }} // Uniform image size
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{movie.title}</h5>
                    <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                      {movie.description}
                    </p>
                    <a href="#" className="btn btn-primary mt-auto">
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
