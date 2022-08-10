import React from "react";
import { successToast, errorToast } from "../utils/Toast/Toast";
import { Button } from "../utils";
import useLogout from "../../frontend-structure/user/hooks/useLogout";

interface SignoutButtonType {
  className?: string;
}

const SignOutButton: React.FC<SignoutButtonType> = (props) => {
  const [signout, loading] = useLogout();

  const handleSignout = async () => {
    signout()
      .then(({ data }) => {
        if (data) {
          if (data.signout?.success) {
            successToast(data.signout.message);
          } else {
            errorToast(data.signout.message);
          }
        }
      })
      .catch((err) => {
        console.log("Errore nel logout", err);
        errorToast("Errore nel logout, riprova tra poco!");
      });
  };

  return (
    <Button disabled={loading} internal onClick={handleSignout} {...props}>
      Logout
    </Button>
    // <a onClick={handleSignout}>SCOLLEGATI</a>
  );
};

export default SignOutButton;
