import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { InputAdornment } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import Place from "@material-ui/icons/Place";
import { FormWrapper, CustomInput, styles } from "../utils";

const AddressForm = ({ onSubmit, addressChosen, isGuest }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: addressChosen.name,
      surname: addressChosen.surname,
      road: addressChosen.road,
      roadnumber: addressChosen.roadnumber,
      intern: addressChosen.intern,
      city: addressChosen.city,
      province: addressChosen.province,
      cap: addressChosen.cap,
      email: addressChosen.email || "",
      confirmEmail: addressChosen.confirmEmail || ""
    }
  });

  return (
    <FormModalWrapper id="formaddress" onSubmit={handleSubmit(onSubmit)}>
      {isGuest && (
        <div className="form_threequarterone">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputRef={register({
              required: true
            })}
            inputProps={{
              type: "email",
              placeholder: "Email valida",
              name: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Conferma Email"
            id="confirmEmail"
            inputRef={register({ required: true })}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder: "Conferma la tua email",
              name: "confirmEmail",
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              )
            }}
          />
        </div>
      )}
      {!isGuest && (
        <div className="form_fieldline">
          <CustomInput
            labelText="Nome"
            id="name"
            formControlProps={{
              fullWidth: true
            }}
            inputRef={register({ required: true })}
            inputProps={{
              type: "text",
              placeholder: "Nome",
              name: "name",
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Cognome"
            id="surname"
            inputRef={register({ required: true })}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder: "Cognome",
              name: "surname",
              endAdornment: (
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              )
            }}
          />
        </div>
      )}
      <div className="form_threequarterone">
        <CustomInput
          labelText="Via"
          id="road"
          inputRef={register({ required: true })}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            placeholder: "Indirizzo",
            name: "road",
            endAdornment: (
              <InputAdornment position="end">
                <Home />
              </InputAdornment>
            )
          }}
        />
        <CustomInput
          labelText="Numero"
          id="roadnumber"
          inputRef={register({ required: true })}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            placeholder: "N°",
            name: "roadnumber",
            endAdornment: (
              <InputAdornment position="end">
                <Home />
              </InputAdornment>
            )
          }}
        />
      </div>
      <CustomInput
        labelText="Campanello"
        id="intern"
        inputRef={register({ required: true })}
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "text",
          placeholder: "Campanello",
          name: "intern",
          endAdornment: (
            <InputAdornment position="end">
              <Home />
            </InputAdornment>
          )
        }}
      />
      <CustomInput
        labelText="Città"
        id="city"
        inputRef={register}
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "text",
          placeholder: "Città",
          name: "city",
          endAdornment: (
            <InputAdornment position="end">
              <Place />
            </InputAdornment>
          )
        }}
      />
      <div className="form_threequarterone">
        <CustomInput
          labelText="Provincia"
          id="province"
          inputRef={register}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            placeholder: "Provincia",
            name: "province",
            endAdornment: (
              <InputAdornment position="end">
                <Place />
              </InputAdornment>
            )
          }}
        />
        <CustomInput
          labelText="CAP"
          id="cap"
          inputRef={register}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            placeholder: "CAP",
            name: "cap",
            endAdornment: (
              <InputAdornment position="end">
                <Place />
              </InputAdornment>
            )
          }}
        />
      </div>
      <input
        type="submit"
        id="submit-address-form"
        style={{ display: "none" }}
      />
    </FormModalWrapper>
  );
};

AddressForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  addressChosen: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  isGuest: PropTypes.bool
};

AddressForm.defaultProps = {
  isGuest: false
};

const FormModalWrapper = styled.form`
  ${FormWrapper};
  .form_fieldline {
    display: flex;
  }

  @media (min-width: ${styles.size.tablet}) {
    .form_threequarterone {
      display: flex;

      div:nth-child(1) {
        flex: 1;
        margin-right: 1rem;
      }

      div:nth-child(2) {
        flex: 1;
      }
    }
  }
`;

export default AddressForm;
