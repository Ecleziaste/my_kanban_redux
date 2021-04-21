import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

const ColumnInput: React.FC<Props> = ({ createCard, toggleInput, id }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        toggleInput(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: ValuesType) => {
    await sleep(150);
    const title = values.cardTitle;
    console.log(title);

    createCard(title, id);
    toggleInput(false);
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <Container onSubmit={handleSubmit}>
            <form>
              <div>
                <Field name="cardTitle">
                  {(prop) => (
                    <Input
                      autoFocus
                      type="text"
                      placeholder="&nbsp;Введите заголовок для карточки"
                      {...prop.input}
                    />
                  )}
                </Field>
              </div>
              <BtnsWrapper>
                <AddBtn type="submit">Добавить</AddBtn>
                <CancelBtn type="reset" onClick={() => toggleInput(false)}>
                  &#10006;
                </CancelBtn>
              </BtnsWrapper>
            </form>
          </Container>
        )}
      />
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
  height: 25px;
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

type ValuesType = {
  cardTitle: string;
};
