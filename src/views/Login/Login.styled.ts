import styled, { css } from "styled-components";

const makeDirectionColumn = css`
  display: flex;
  flex-direction: column;
`;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
  > form {
    ${makeDirectionColumn}
    gap: 1rem;
    > div {
      ${makeDirectionColumn}
      >p {
        color: #bf1650;
        &::before {
          display: inline;
          content: "⚠ ";
        }
      }
    }
  }
`;

export { LoginPageContainer };
