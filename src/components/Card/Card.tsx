import React from "react";
import { CardType } from "../../Types";
import { CommentType } from "../../Types";
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
  // const titleByCardId = useSelector(selectTitleByCardId);
  const titleByCardId = cards.find((card: CardType) => card.id === id)!.title;
  const cardById = cards.find((card: CardType) => card.id === id)!;

  const openCard = (card: CardType) => {
    dispatch(toggleActiveCard(card));
  };

  return (
    <Container onClick={() => openCard(cardById)}>
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
  id: string;
};
