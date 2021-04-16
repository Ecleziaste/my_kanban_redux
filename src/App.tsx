import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";
import { useSelector } from "react-redux";
import { selectActiveCard } from "./store/activeCard/selectors";

const App = () => {
  const activeCard = useSelector(selectActiveCard);
  // const activeCard =
  //   useSelector(selectCards).filter((c: any) => c.isActive === true) || null;

  return (
    <div className="App">
      <ColumnList />
      {activeCard && <PopupCard />}
    </div>
  );
};

export default App;

export type CommentType = {
  text: string;
  id: any;
  cardId: any;
  author: string;
};

export type ColumnType = {
  title: string;
  id: number;
};

export type CardType = {
  title: string;
  description: string;
  author: string;
  id: string;
  columnId: number;
};
