import { styles } from "../index";

export const successToast = async (
  title,
  afterFunc = null,
  duration = 1600
) => {
  const { default: Swal } = await import("sweetalert2");

  Swal.fire({
    toast: true,
    background: styles.colors.primaryColor,
    position: "bottom",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    onClose: () => {
      if (afterFunc) {
        afterFunc();
      }
    }
  });
};

export const errorToast = async (title, afterFunc = null, duration = 1800) => {
  const { default: Swal } = await import("sweetalert2");

  Swal.fire({
    toast: true,
    background: styles.colors.primaryColor,
    position: "bottom",
    icon: "error",
    title,
    showConfirmButton: true,
    timer: duration,
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    onClose: () => {
      if (afterFunc) {
        afterFunc();
      }
    }
  });
};
