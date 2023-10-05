import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Raleway";
  padding: 2em;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderImg = styled.img`
  height: 65px;
  border-radius: 50%;
  filter: brightness(150%);
  margin-right: auto;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  gap: 0.5em;
`;

export const HeaderInfo = styled.div`
  color: #ffffff;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
