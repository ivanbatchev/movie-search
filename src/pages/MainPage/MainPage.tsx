import { Flex, Input } from "antd";
const { Search } = Input;
import cls from "./MainPage.scss";
import { FilmList } from "../../components";
import { useState } from "react";
import { debounce } from "../../utils";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSetSearchQuery = debounce(setSearchQuery, 1000);
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.header}>Найди фильм</h1>
      <Flex justify="center" align="center" vertical>
        <Search
          placeholder="Введите название фильма"
          enterButton="Поиск"
          size="middle"
          onChange={(e) => debouncedSetSearchQuery(e.target.value)}
        />
        <FilmList query={searchQuery} />
      </Flex>
    </div>
  );
};

export default MainPage;
