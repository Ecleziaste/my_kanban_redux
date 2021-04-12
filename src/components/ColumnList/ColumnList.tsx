import React from "react";
import Column from "../Column";
import { CommentType } from "../../App";
import styled from "styled-components";

const ColumnList: React.FC<Props> = ({ columns, userName, cards }) => {
  return (
    <Container>
      {columns.map((column) => {
        return (
          <Column
            userName={userName}
            title={column.title}
            id={column.id}
            key={column.id}
            cards={cards}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: rgb(196, 190, 190);
  padding: 15px;
`;

export default ColumnList;

type Props = {
  userName: any;
  columns: Array<any>;
  cards: Array<any>;
};
