import { styled } from "styles";

export default function Test() {
  console.log(process.env);

  return <Title> Aoo rapaz :) {`${process.env.REACT_APP_MY_TEST_KEY}`}</Title>;
}

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 3rem;
  background-color: #ccc;
  color: blue;
`;
