export const BASE_URL = "https://api.kinopoisk.dev/v1.4";
// вы можете ввести свой токен вместо process.env.TOKEN здесь и выполнить команду npm run start
export const TOKEN = process.env.TOKEN;

interface IQuery {
  page: number;
  limit: number;
  query?: string;
}

export async function getFilms(url: string, query: IQuery) {
  let urlString = `${BASE_URL}/${url}?page=${query.page}&limit=${query.limit}&query=${query.query}`;
  let response = await fetch(urlString, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(TOKEN && { "X-API-KEY": TOKEN }),
    },
  });

  if (!response.ok) throw new Error(await response.text());

  return response.json();
}
