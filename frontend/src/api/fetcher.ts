import ky from "ky";
import api from "@/consts/api";

const fetcher = ky.extend({
  prefixUrl: api + "/api",
  credentials: "include",
});

export default fetcher;
