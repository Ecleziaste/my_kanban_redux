import React, { useState, useEffect } from "react";
import Comment from "../Comment";
import { CardType, CommentType } from "../../App";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../../store/comments/selectors";
import {
  removeCard,
  changeCardDesc,
  changeCardTitle,
} from "../../store/cards/actions";
import { removeAllComments } from "../../store/comments/actions";
import { toggleActiveCard } from "../../store/activeCard/actions";
import { addComment } from "../../store/comments/actions";
import { selectActiveCard } from "../../store/activeCard/selectors";
import { selectColumnById } from "../../store/columns/selectors";
import { RootState } from "../../store";

const PopupCard: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const card = useSelector(selectActiveCard);

  const comments = useSelector(selectComments);
  const commentsByCardId = comments.filter(
    (comm: CommentType) => comm.cardId === card.id
  );

  const { title } = useSelector((state: RootState) =>
    selectColumnById(state, card.columnId)
  )!;

  const [text, setText] = useState("");

  const [changeDesc, setChangeDesc] = useState(card.description);
  const handleChangeDesc = (value: string) => {
    setChangeDesc(value);
  };
  const [newTitle, setTitle] = useState(card.description);
  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const changeDescription = (newDesc: any, id: any): void => {
    dispatch(changeCardDesc({ newDesc, id }));
    dispatch(toggleActiveCard({ ...card, description: newDesc }));
  };

  const changeTitle = (newTitle: any, id: any): void => {
    dispatch(changeCardTitle({ newTitle, id }));
    dispatch(toggleActiveCard({ ...card, title: newTitle }));
  };

  const [activeDescriptionInput, setActiveDescriptionInput] = useState(false);
  const toggleDescriptionInput = (value: boolean): void => {
    setActiveDescriptionInput(value);
  };
  const [activeCommentInput, setActiveCommentInput] = useState(false);
  const toggleCommentInput = (value: boolean): void => {
    setActiveCommentInput(value);
  };

  const createComment = (text: string): void => {
    if (text === "" || undefined) {
      alert("пустой коммент не будет добавлен");
    } else {
      const newComment = {
        text,
        author: card.author,
        id: uuidv4(),
        cardId: card.id,
      };
      dispatch(addComment(newComment));
    }
  };

  const closeCard = () => {
    dispatch(toggleActiveCard(null));
  };

  const deleteCard = (id: number): void => {
    closeCard();
    dispatch(removeCard(id));
    dispatch(removeAllComments(id));
  };

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) {
        closeCard();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  const clickedParent = () => {
    closeCard();
  };

  return (
    <Wrapper onClick={clickedParent}>
      <Popup
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <Title>
            <div
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => setTitle(e.currentTarget.textContent)}
              onBlur={() => changeTitle(newTitle, card.id)}
            >
              {card.title}
            </div>
            <div>By {card.author}</div>
            <div> From column '{title}'</div>
          </Title>
          <CloseCard onClick={() => closeCard()}>X</CloseCard>
        </Header>
        <Body>
          <Description>
            <h4>Description:</h4>
            <DescriptionText>{card.description}</DescriptionText>
            <div>
              {activeDescriptionInput ? (
                <div>
                  <FocusedDescInput
                    defaultValue={card.description}
                    placeholder="Добавьте подробное описание здесь..."
                    onChange={(e) => {
                      handleChangeDesc(e.target.value);
                    }}
                    autoFocus
                  ></FocusedDescInput>
                  <PopupDescriptionAddBtn
                    onClick={() => {
                      toggleDescriptionInput(false);
                      changeDescription(changeDesc, card.id);
                    }}
                  >
                    Сохранить
                  </PopupDescriptionAddBtn>
                  <PopupDescriptionCancelBtn
                    onClick={() => {
                      toggleDescriptionInput(false);
                      changeDescription(card.description, card.id);
                    }}
                  >
                    &#10006;
                  </PopupDescriptionCancelBtn>
                </div>
              ) : (
                <DescInput
                  onClick={() => toggleDescriptionInput(true)}
                  placeholder="Добавьте подробное описание здесь..."
                ></DescInput>
              )}
            </div>
          </Description>
          <Hr></Hr>
          <CommentsWrapper>
            {activeCommentInput ? (
              <PopupCommentInput>
                <CommentsInput
                  autoFocus
                  placeholder="Напишите комментарий..."
                  onChange={(e) => setText(e.target.value)}
                  onBlur={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
                ></CommentsInput>
                <CommentsAddBtn
                  onClick={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
                >
                  Добавить
                </CommentsAddBtn>
              </PopupCommentInput>
            ) : (
              <InactivePopupCommentInput
                onClick={() => toggleCommentInput(true)}
                placeholder="Напишите комментарий..."
              ></InactivePopupCommentInput>
            )}
            <CommentsContainer>
              {commentsByCardId &&
                commentsByCardId.map((comment: CommentType) => {
                  return (
                    <Comment
                      author={comment.author}
                      text={comment.text}
                      key={comment.id}
                      id={comment.id}
                      user={card.author}
                    />
                  );
                })}
            </CommentsContainer>
          </CommentsWrapper>
        </Body>

        <DelCardBtn onClick={() => deleteCard(card.id)}>
          delete dis card
        </DelCardBtn>
      </Popup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  overflow: scroll;
  z-index: 500;
`;
const Popup = styled.div`
  background-color: rgba(131, 120, 120, 0.95);
  display: flex;
  flex-flow: column wrap;
  width: 500px;
  margin: 5% auto;
  padding: 10px;
  z-index: 501;
  border: 3px solid black;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 5px;
`;
const Title = styled.div`
  align-self: center;
  margin: 5px;
`;
const CloseCard = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
`;
const Description = styled.div`
  width: 95%;
  margin: 5px;
  cursor: pointer;
`;

const DescriptionText = styled.div`
  word-wrap: break-word;
  overflow: clip;
`;
const FocusedDescInput = styled.input`
  width: 85%;
  height: 70px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #036788;
  background: white;
  cursor: text;
`;
const DescInput = styled.input`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  cursor: pointer;
`;
const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
const Hr = styled.hr`
  margin: 15px 0;
`;
const PopupCommentInput = styled.div`
  width: 80%;
  cursor: text;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
`;
// FIXME: передать сюда пропсом содержимое объекта PopupCommentInput
const InactivePopupCommentInput = styled.input`
  width: 80%;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
`;
const CommentsAddBtn = styled.button`
  width: 20%;
  margin: 15px 0 20px -10px;
  background-color: rgb(163, 236, 89);
  border-radius: 5px;
`;
const PopupDescriptionCancelBtn = styled.button`
  cursor: pointer;
  margin: 5px;
`;
const PopupDescriptionAddBtn = styled.button`
  cursor: pointer;
  margin: 5px;
`;
const CommentsInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin: -10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
  }
`;
const DelCardBtn = styled.button`
  display: flex;
  align-self: flex-end;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;
const CommentsContainer = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  width: 100%;
`;

export default PopupCard;

type Props = {};
