import Styled from "styled-components";

export const CardContainer = Styled.div`
  margin: 3px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid blue;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "rebeccapurple" : "lightgreen"}
`;

export const CardHeader = Styled.div`
  border-bottom: 2px solid blue;
  width: 100%;
  text-align: center;
  padding-top: 5px;
  font-weight: bold;
  height: 30px;
  background-color: lightblue;
  border-radius: 10px;
`;

export const CardContent = Styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
`;
