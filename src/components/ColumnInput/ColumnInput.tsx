import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

const ColumnInput: React.FC<Props> = ({ createCard, toggleInput, id }) => {
  const [title, setTitle] = useState("");
  // КАК теперь добавлять на Enterб не используя локальный стейт?
  // устаревший код??
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        createCard(title, id);
        toggleInput(false);
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [title]);
  // или any
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) {
        toggleInput(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // const validate = (e: any) => {
  //   const errors: ErrorsType = {
  //     cardTitle: "",
  //   };
  //   if (e.cardTitle && e.cardTitle.length <= 0) {
  //     errors.cardTitle = "Заголовок должен содержать хотя бы 1 символ";
  //   }
  //   return errors;
  // };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // пришлось писать валидацию внутри, т.к. валидация из createCard не робит. И она не робит лол!
  const onSubmit = async (values: any) => {
    await sleep(150);
    const title = values.cardTitle;
    createCard(title, id);
    toggleInput(false);
    // if (title.length > 0) {
    //   createCard(title, id);
    //   toggleInput(false);
    // } else {
    //   alert("Заголовок должен содержать хотя бы 1 символ");
    // }
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={title}
        render={({ handleSubmit, form }) => (
          <Container onSubmit={handleSubmit}>
            <form>
              {/* как стилизовать со styled components */}
              <Input>
                <Field
                  autoFocus
                  name="cardTitle"
                  component="input"
                  // onInput={(e: any) => setTitle(e.target.value)}
                  type="text"
                  placeholder="&nbsp;Введите заголовок для карточки"
                />
              </Input>

              <BtnsWrapper>
                <AddBtn type="submit">Добавить</AddBtn>
                <CancelBtn
                  // onClick={form.reset}
                  onClick={() => toggleInput(false)}
                >
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
// FIXME: div \ input
const Input = styled.div`
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

type ErrorsType = {
  cardTitle: string;
};
