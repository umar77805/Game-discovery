import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b8bbbbfbb61446eb7ecc17221f66586",
  },
});
