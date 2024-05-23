export function emailCheck(email: string) {
  const check = {
    message: "",
    isValid: true,
  };

  if (email.length < 1) {
    check.message = "Email can't be empty";
    check.isValid = false;
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ||
    email.length > 255
  ) {
    check.message = "Invalid email";
    check.isValid = false;
  }

  return check;
}

export function passwordCheck(password: string) {
  const check = {
    message: "",
    isValid: true,
  };

  if (password.length < 1) {
    check.message = "Password can't be empty";
    check.isValid = false;
  } else if (password.length < 6) {
    check.message = "Password is too short";
    check.isValid = false;
  }

  return check;
}
