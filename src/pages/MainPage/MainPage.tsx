import { Flex, Input } from "antd";
const { Search } = Input;
import cls from "./MainPage.scss";
import { FilmList } from "../../components";

const MainPage = () => {
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.header}>Найди фильм</h1>
      <Flex justify="center" align="center" vertical>
        <Search
          placeholder="Введите название фильма"
          enterButton="Поиск"
          size="middle"
          onChange={(e) => console.log(e.target.value)}
        />
        <FilmList />
      </Flex>
    </div>
  );
};

export default MainPage;
