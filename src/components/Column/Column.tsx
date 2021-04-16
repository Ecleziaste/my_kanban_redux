import React, { useState } from "react";
import styled from "styled-components";
import ColumnInput from "../ColumnInput";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { selectCardsIdsbyColumnId } from "../../store/cards/selectors";
import { selectColumnById, selectColumns } from "../../store/columns/selectors";
import { addCard } from "../../store/cards/actions";
import { changeTitle } from "../../store/columns/actions";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store";
import { selectUser } from "../../store/user/selectors";

const Column: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { title } = useSelector((state: RootState) =>
    selectColumnById(state, id)
  )!;
  const cardIds = useSelector((state: RootState) =>
    selectCardsIdsbyColumnId(state, id)
  );

  const [activeColumnInput, setActiveColumnInput] = useState(false);
  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  const changeColumnTitle = (newTitle: string, id: number): void => {
    dispatch(changeTitle({ newTitle, id }));
  };

  const createCard = (title: string, columnId: number): void => {
    if (title === "" || undefined) {
      alert("карточка нуждается хотя бы в одном символе");
    } else {
      const newCard = {
        title,
        description: "",
        author: user,
        id: uuidv4(),
        columnId,
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
        {cardIds.map((id) => {
          return <Card id={id} key={id} />;
        })}
      </Cardlist>
      {activeColumnInput ? (
        <ColumnInput
          id={id}
          key={id}
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
  id: number;
};
