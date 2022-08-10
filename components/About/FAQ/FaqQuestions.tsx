import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { styles } from "../../utils";

const FaqQuestions = ({ question }) => {
  if (!question)
    return <div>Le risposte alle tue domande arriveranno presto!</div>;
  return (
    <FaqWrapper>
      <h2>{question.title}</h2>
      <ul>
        {question.questions.map(q => (
          <li key={q.question}>
            <div>{q.question}</div>
            <div>{q.answer}</div>
          </li>
        ))}
      </ul>
    </FaqWrapper>
  );
};

const FaqWrapper = styled.div`
  margin-top: 3rem;

  h2 {
    font-size: 2rem;
  }

  ul {
    list-style: none;

    li {
      border-bottom: 1px solid ${styles.colors.lightGrey};
      padding: 1rem;

      div:first-child {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      div:nth-child(2) {
        font-weight: 300;
      }
    }
  }
`;

FaqQuestions.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default FaqQuestions;
