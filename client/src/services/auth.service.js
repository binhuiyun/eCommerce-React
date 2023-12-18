import axios from "axios";

export async function login(e) {
  e.preventDefault();
  try {
    const { data: response } = await axios.post("/login", { email, password });
    setRedirect(true);
    setUser(response);
    localStorage.setItem("user", JSON.stringify(response.user));
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
