export const getMovies  = () => {
    return fetch('http://localhost:5001/movies')
    .then((response) => response.json());
};

   

