import axios from "axios";

export default async function(email, password) {
  try {
    const response = await axios.post("api/auth/login", { email, password });
    console.log(response);
    return response.data === "successLogin";
  } catch (err) {
    console.error(err);
    throw err;
  }
}
