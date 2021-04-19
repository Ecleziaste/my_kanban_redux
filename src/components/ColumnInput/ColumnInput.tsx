import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ColumnInput: React.FC<Props> = ({ createCard, toggleInput, id }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const handleEnter = (e: any) => {
      if (e.keyCode === 13) {
        createCard(title, id);
        toggleInput(false);
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [title]);

  useEffect(() => {
    const handleEnter = (e: any) => {
      if (e.keyCode === 27) {
        toggleInput(false);
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, []);

  return (
    <Container>
      <Input
        autoFocus
        placeholder="&nbsp;Введите заголовок для карточки"
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <BtnsWrapper>
        <AddBtn
          className="input__add_btn"
          onClick={() => {
            createCard(title, id);
            toggleInput(false);
          }}
        >
          Добавить
        </AddBtn>
        <CancelBtn
          className="input__del_btn"
          onClick={() => toggleInput(false)}
        >
          &#10006;
        </CancelBtn>
      </BtnsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 96%;
  margin: 5px auto;
  padding: 0;
`;
const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  height: 50%;
  align-self: center;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
  }
`;
const AddBtn = styled.button`
  margin-top: 5px;
  height: 25px;
  padding: 4px;
`;
const CancelBtn = styled.button`
  margin-top: 5px;
  width: 25px;
`;

export default ColumnInput;

type Props = {
  id: string;
  createCard: (title: string, columnId: string) => void;
  toggleInput: (arg: boolean) => void;
};
