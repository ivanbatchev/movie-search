[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# Поиск фильмов

Проект разработан для удобного поиска фильмов и сериалов с платформы «Кинопоиска».

## Установка

Скопируйте проект

```bash
git clone https://github.com/ivanbatchev/movie-search your-folder
```

Перейдите в Вашу папку

```bash
cd your-folder
```

Установите необходимые зависимости

```bash
npm install
```

## Запуск приложения http://localhost:7070

Production mode

```bash
TOKEN=<your_token> npm run start:prod
```

### для запуска в продакшн режиме используется написанный на express.js простой сервер для раздачи статики (./src/server.js)

Development mode

```bash
TOKEN=<your_token> npm run start
```

## Ссылки

- [Демо версия на Netlify](https://illustrious-cocada-dcf62d.netlify.app/)

## Авторы

- [@ivanbatchev](https://github.com/ivanbatchev)
