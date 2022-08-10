import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button, styles } from "../utils";

const SingleProductNote = ({ note, setNote }) => {
  const [showText, setShowText] = useState(false);

  const handleChange = (e) => {
    if (e && e.target) {
      setNote(e.target.value);
    }
  };

  return (
    <NoteWrapper>
      {showText ? (
        <TextField
          id="outlined-multiline-static"
          label="Nota"
          placeholder="Inserisci la nota"
          multiline
          rows="4"
          fullWidth
          onChange={(e) => handleChange(e)}
          value={note}
          variant="outlined"
        />
      ) : (
        <Button onClick={() => setShowText(true)}>Add note</Button>
      )}
    </NoteWrapper>
  );
};

SingleProductNote.propTypes = {
  note: PropTypes.string,
  setNote: PropTypes.func.isRequired,
};

SingleProductNote.defaultProps = {
  note: "",
};

const NoteWrapper = styled.div`
  margin-top: 2rem;
  ${styles.transDefault};
`;

export default SingleProductNote;
