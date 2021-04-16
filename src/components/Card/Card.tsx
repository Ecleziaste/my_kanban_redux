import React, { useState } from "react";
import { CardType } from "../../App";
import { CommentType } from "../../App";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../../store/comments/selectors";
import { selectCards } from "../../store/cards/selectors";
import { toggleActiveCard } from "../../store/activeCard/actions";

const Card: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const commentsCount = comments.filter(
    (comment: CommentType) => comment.cardId === id
  );

  const cards = useSelector(selectCards);
  // Почему тут надо указывать тип? Он не прилетает из RootType?
  const titleByCardId = cards.find((c: CardType) => c.id === id).title;
  const cardByCardId = cards.find((c: CardType) => c.id === id);

  const openCard = (card: CardType) => {
    dispatch(toggleActiveCard(card));
  };

  return (
    <Container onClick={() => openCard(cardByCardId)}>
      <div>{titleByCardId}</div>
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
  id: any;
};
