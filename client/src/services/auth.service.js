import axios from "axios";

export async function login(e) {
  e.preventDefault();
  try {
    const { data: response } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    console.log("response", response);
    setRedirect(true);
    dispatch(login_({ email: email, password: password }));
    localStorage.setItem("loginToken", response.loginToken);
    localStorage.setItem("user", JSON.stringify(response));
    console.log("Login successful", response);
  } catch (err) {
    console.log("Login failed", err);
  }
}

export async function signUp(e) {
  e.preventDefault();
  try {
    await axios.post("/signup", { email, password });
    console.log("Sign up successful");
  } catch (err) {
    console.log("Sign up failed", err);
  }
}

export default {
  signUp,
  login,
};
