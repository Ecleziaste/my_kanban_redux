import React from "react";
import { CardType } from "../../App";
import { CommentType } from "../../App";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../../store/comments/selectors";
import { activateCard } from "../../store/cards/actions";

const Card: React.FC<Props> = ({ card }) => {
  const dispatch = useDispatch();

  const comments = useSelector(selectComments);
  const commentsCount = comments.filter(
    (comment: CommentType) => comment.cardId === card.id
  );

  const openCard = (id: number) => {
    // const activeCard = cards.find((card: any) => card.id === id);
    console.log(card.id);
    dispatch(activateCard(true));
    // if (activeCard) {
    //   const activeColumn = columns.find(
    //     (column: Column) => column.id === activeCard.columnId
    //   );
    //   setColumn(activeColumn);
    //   setCard(activeCard);
    // }
  };

  return (
    <Container onClick={() => openCard(card.id)}>
      <div>{card.title}</div>
      <span>Комментарии:&nbsp;{commentsCount.length}</span>
    </Container>
  );
};

const Container = styled.button`
  margin: 5px 0 5px 0;
  padding: 3px;
  width: 100%;
  color: rgb(18, 94, 28);
  border: 2px solid brown;
`;

export default Card;

type Props = {
  card: CardType;
};
