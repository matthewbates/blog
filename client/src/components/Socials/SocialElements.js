import styled from "styled-components";

export const SocialsContainer = styled.div`
  display: flex;
  gap: 1em;

  i {
    color: #ffffff;
    font-size: 1.25em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
