import React from "react";
import Column from "../Column";
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import { selectColumns } from "../../store/columns/selectors";

const ColumnList: React.FC<Props> = () => {
  const columnsIds = useSelector(selectColumns, shallowEqual);

  return (
    <Container>
      {columnsIds.map((id) => {
        return <Column id={id} key={id} />;
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

type Props = {};
