import {
  FC,
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { getFilms } from "../../services/api";
import { Pagination, PaginationProps, Spin } from "antd";

type FilmItem = {
  id: number;
  ageRating: number;
  alternativeName: string;
  name: string;
  year: number;
  poster: {
    previewUrl: string;
  };
};

interface IFilmList {
  docs: FilmItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

interface IFilmListProps extends PropsWithChildren {
  query: string;
}

const FilmList: FC<IFilmListProps> = memo(({ query }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [filmsList, setFilmList] = useState<IFilmList>({
    docs: [],
    limit: 10,
    page: 1,
    pages: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setIsFetching(true);
        const result: IFilmList = await getFilms("movie/search", {
          page: filmsList.page,
          limit: filmsList.limit,
          query,
        });
        setFilmList(result);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
      }
    };

    fetchFilms();
  }, [filmsList.page, filmsList.limit, query]);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setFilmList((prevPage) => ({
      ...prevPage,
      page: pageNumber,
      limit: pageSize,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "80vh",
      }}
    >
      {isFetching ? (
        <Spin size="large" />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "flex-start",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            {filmsList.docs.length !== 0 ? (
              filmsList.docs.map((film) => {
                return (
                  <figure
                    key={film.id}
                    style={{
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexFlow: "column nowrap",
                      border: "1px solid grey",
                      width: "180px",
                      minWidth: "180px",
                      height: "320px",
                      cursor: "pointer",
                    }}
                  >
                    {film.poster.previewUrl ? (
                      <img
                        src={film.poster.previewUrl}
                        alt={film.alternativeName}
                        width={120}
                        loading="lazy"
                        ref={imageRef}
                      />
                    ) : (
                      "NO IMAGE"
                    )}
                    <figcaption style={{ margin: "16px", textAlign: "center" }}>
                      {film.name}
                    </figcaption>
                  </figure>
                );
              })
            ) : (
              <h3>Ничего не найдено по Вашему запросу</h3>
            )}
          </div>

          {filmsList.docs.length !== 0 && (
            <Pagination defaultCurrent={1} total={500} onChange={onChange} />
          )}
        </>
      )}
    </div>
  );
});

export default FilmList;
