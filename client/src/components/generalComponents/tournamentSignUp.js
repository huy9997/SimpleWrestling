import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const tournamentSignUp = props => {
  return (
    <Modal>
      <Typography variant="h6" id="modal-title">
        My Title
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description">
        My Description
      </Typography>
    </Modal>
  );
};

export default tournamentSignUp;
