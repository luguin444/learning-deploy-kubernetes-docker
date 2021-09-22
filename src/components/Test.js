import { styled, media } from 'styles';

export default function Test() {

  console.log(media.isMobile())

  return(
      <Title> Dando bom menino </Title>
  );
}

const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
    font-size: 3rem;
    background-color: #ccc;
    color: blue;
`