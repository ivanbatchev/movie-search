import { useEffect, useState } from "react";
import { getFilms } from "../../services/api";

const FilmList = () => {
  const [filmsList, setFilmList] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const result = await getFilms("list");
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilms();
  }, []);

  return <div>FilmList</div>;
};

export default FilmList;
