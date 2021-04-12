import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";
import { useDispatch, useSelector } from "react-redux";
import { selectColumns } from "./store/columns/selectors";
import { selectCards } from "./store/cards/selectors";

const LocalStorageKeys = {
  user: "user",
  cards: "cards",
};

const App = () => {
  const columns = useSelector(selectColumns);
  const cards = useSelector(selectCards);

  // в useState должна попадать карта\колонка с полем isActive: true
  const [column, setColumn] = useState<any>(null);
  const [card, setCard] = useState<any>(null);

  const [userName, setUserName] = useState<any>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.user) || "null")
  );
  const askUserName = () => {
    if (userName === null || "") {
      setUserName(prompt("Введите имя пользователя", "User"));
    }
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(userName));
  };
  askUserName();

  const changeTitle = (title: string): void => {
    card.title = title;
    const newCards = cards.map((c: any) => {
      if (c.id === card.id) {
        return card;
      }
      return c;
    });
    localStorage.setItem(LocalStorageKeys.cards, JSON.stringify(newCards));
  };

  return (
    <div className="App">
      <ColumnList columns={columns} cards={cards} userName={userName} />
      {card && (
        <PopupCard
          card={card}
          columnTitle={column.title}
          changeTitle={changeTitle}
          user={userName}
        />
      )}
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
  id: any;
  columnId: number;
  isActive: false;
};
