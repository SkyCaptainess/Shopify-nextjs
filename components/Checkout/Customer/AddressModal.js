import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import { useMutation } from "react-apollo";
import { CheckoutContext } from "../Checkout";
import { Button, ButtonWrapperStyle } from "../../utils";
import { MUTATION_ADD_ADDRESS } from "../../Structure/GraphQL/Mutations";
import { QUERY_GET_ADDRESSES } from "../../Structure/GraphQL/Queries";
import AddressForm from "../AddressForm";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

const AddressModal = ({ modalOpen, setModalOpen }) => {
  const context = useContext(CheckoutContext);
  const { addressChosen, setAddressChosen } = context;

  const [createAddress, { loading }] = useMutation(MUTATION_ADD_ADDRESS, {
    refetchQueries: [{ query: QUERY_GET_ADDRESSES }],
  });

  const onSubmit = (formData) => {
    createAddress({
      variables: {
        ...formData,
        country: "IT",
      },
    }).then((res) => {
      console.log("RES", res);
      setModalOpen(false);
      // TODO: non seleziona il nuovo perché forse poi sono refetchati e prende il primo
      setAddressChosen(res.createAddress.id);
    });
  };

  return (
    <AddressModalWrapper>
      <Dialog
        // classes={{
        //   root: classes.center,
        //   paper: classes.modal
        // }}
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModalOpen(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className="modalHeader"
        >
          <IconButton
            className="modalCloseButton"
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModalOpen(false)}
          >
            <Close className="modalClose" />
          </IconButton>
          <h4 className="modalTitle">Inserisci un nuovo indirizzo</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className="modalBody"
        >
          <AddressForm onSubmit={onSubmit} addressChosen={addressChosen} />
        </DialogContent>
        <DialogActions className="modalFooter">
          <label
            htmlFor="submit-address-form"
            tabIndex="0"
            className="address_button"
          >
            Salva
          </label>

          {/* <Button disabled={loading} form="formaddress" type="submit" color="success">
            Salva
          </Button> */}
          <Button onClick={() => setModalOpen(false)} color="danger">
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </AddressModalWrapper>
  );
};

AddressModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

const AddressModalWrapper = styled.div`
  .modalHeader {
    border-bottom: none;
    padding: 24px 24px 0 24px;
    min-height: 16.43px;
  }

  .modalBody {
    padding: 2rem 2rem 1.8rem 2rem;
    position: relative;
  }

  .modalCloseButton {
    background: 0 0;
    border: 0;
    color: #999;
    cursor: pointer;
    float: right;
    font-size: inherit;
    font-weight: 700;
    line-height: 1;
    opacity: 0.9;
    padding: 0;
    text-shadow: none;
    -webkit-appearance: none;
  }

  .modalClose {
    width: 1rem;
    height: 1rem;
  }

  .modalTitle {
    color: red;
  }

  h4 {
    margin: 0;
    line-height: 1.42857143;
    color: red;
  }

  .modalFooter {
    margin: 0;
    padding: 1rem;
    padding-top: 0;
    text-align: right;

    .address_button {
      ${ButtonWrapperStyle};
    }
  }
`;

export default AddressModal;
