import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";
import { useSelector } from "react-redux";
import { selectActiveCard } from "./store/activeCard/selectors";

const App = () => {
  const activeCard = useSelector(selectActiveCard);

  return (
    <div className="App">
      <ColumnList />
      {activeCard !== null && <PopupCard />}
    </div>
  );
};

export default App;

export type CommentType = {
  text: string;
  id: string;
  cardId: string;
  author: string | null;
};

export type ColumnType = {
  title: string;
  id: string;
};

export type CardType = {
  title: string;
  description: string;
  author: string | null;
  id: string;
  columnId: string;
};

export type ActionType = {
  newText: string;
  id: string;
};
