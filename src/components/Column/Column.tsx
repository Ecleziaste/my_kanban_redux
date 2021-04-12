import React, { useState } from "react";
import styled from "styled-components";
import ColumnInput from "../ColumnInput";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../store/cards/selectors";
import { selectColumns } from "../../store/columns/selectors";
import { addCard } from "../../store/cards/actions";
import { changeTitle } from "../../store/columns/actions";
import { v4 as uuidv4 } from "uuid";

const Column: React.FC<Props> = ({ userName, title, id }) => {
  const dispatch = useDispatch();

  const [activeColumnInput, setActiveColumnInput] = useState(false);
  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  const cards = useSelector(selectCards);
  const cardsByColumnId = cards.filter((card: any) => card.columnId === id);

  const columns = useSelector(selectColumns);
  // FIXME: меняет все колонки, а хотелось бы конкретную
  // и ваще роняет всё
  const changeColumnTitle = (value: string, id: number): void => {
    const columnsCopy = [...columns];
    columnsCopy.map((column: any) => {
      if (column.id === id) {
        column.title = value;
      }
      // return columnsCopy;
    });
    dispatch(changeTitle(columnsCopy));
  };

  const createCard = (title: string, columnId: number): void => {
    if (title === "" || undefined) {
      alert("карточка нуждается хотя бы в одном символе");
    } else {
      const newCard = {
        title,
        description: "",
        author: userName,
        id: uuidv4(),
        columnId,
        isActive: false,
      };
      dispatch(addCard(newCard));
    }
  };

  return (
    <Container>
      <Title
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          changeColumnTitle(e.currentTarget.textContent || "", id)
        }
        defaultValue={title}
      >
        {title}
      </Title>
      <Cardlist>
        {cardsByColumnId.map((card: any) => {
          return <Card card={card} key={card.id + 1} />;
        })}
      </Cardlist>
      {activeColumnInput ? (
        <ColumnInput
          id={id}
          createCard={createCard}
          toggleInput={toggleInput}
        />
      ) : (
        <AddCardBtn onClick={() => toggleInput(true)}>
          &#43; Добавить Карточку
        </AddCardBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(245, 239, 239, 0.932);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
  border: 3px solid rgb(5, 92, 92);
  border-radius: 10px;
  width: 20%;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
    cursor: text;
  }
`;
const Cardlist = styled.div`
  width: 96%;
  margin: 5px;
  padding: 0;
`;
const AddCardBtn = styled.button`
  margin: 5px;
  height: 25px;
  width: 96%;
  background-color: rgb(122, 122, 247);
  text-align: left;
`;

export default Column;

type Props = {
  userName: any;
  title: string;
  id: number;
  cards: Array<any>;
};
