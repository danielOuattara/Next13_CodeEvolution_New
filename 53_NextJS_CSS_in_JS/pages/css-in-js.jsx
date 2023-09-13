import styled from "styled-components";

const Title = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors};
`;

export default function Css_In_Js() {
  return (
    <>
      <h2 style={{ color: "green" }}>Hello NextJS</h2>

      <Title>
        <h2>Hello NextJS</h2>
      </Title>
    </>
  );
}
