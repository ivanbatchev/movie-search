export const BASE_URL = "https://api.kinopoisk.dev/v1.4";
// вы можете ввести свой токен вместо process.env.TOKEN здесь и выполнить команду npm run start
export const TOKEN = process.env.TOKEN;

export async function getFilms(url: string) {
  let response = await fetch(`${BASE_URL}/${url}?page=1&limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(TOKEN && { "X-API-KEY": TOKEN }),
    },
  });

  if (!response.ok) throw new Error(await response.text());

  return response.json();
}
