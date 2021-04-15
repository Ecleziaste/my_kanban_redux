import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "./store/cards/selectors";
import { selectUser } from "./store/user/selectors";
import { setUser } from "./store/user/actions";

const App = () => {
  const dispatch = useDispatch();
  const user: any = useSelector(selectUser);
  const cards: any = useSelector(selectCards);
  const [card, setCard] = useState<any>(
    cards.find((c: any) => c.isActive === true || null)
    // тут с фильтром всё ломается
  );
  const openIt = () => {
    setCard(cards.filter((c: any) => c.isActive === true));
    // если find - то срабатывает со второго клика
  };
  const closeIt = () => {
    setCard(null);
  };

  return (
    <div className="App">
      <ColumnList openIt={openIt} />
      {card && <PopupCard user={user} closeIt={closeIt} />}
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
  isActive: boolean;
};

export type CardType = {
  title: string;
  description: string;
  author: string;
  id: string;
  columnId: number;
  isActive: false;
};
