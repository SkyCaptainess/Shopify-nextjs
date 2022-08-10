import styled from "styled-components";
import { styles } from "../utils";

const LoginFormWrapper = styled.form`
  margin: 0;

  .socialLine {
    margin-top: 1rem;
    padding: 0;
    text-align: center;
  }

  .divider {
    margin-top: 1rem;
    margin-bottom: 0;
    text-align: center;
  }

  .errorText {
    background: ${styles.colors.dangerColor};
    border-radius: 0.2rem;
    font-weight: 600;
    margin: 5px auto 5px auto;
    padding: 1rem;
    text-align: center;
    width: 80%;
  }

  .cardFooterPasswordForget {
    color: #595959;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default LoginFormWrapper;
