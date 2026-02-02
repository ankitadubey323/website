// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

// export const generateProject = async (prompt: string) => {
//   const res = await api.post("/api/bolt", { prompt });
//   return res.data;
// };

// // import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000",
// });

// export const testBackend = async () => {
//   const response = await api.get("/api/");
//   return response.data;
// };
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const generateProject = async (prompt: string) => {
  try {
    const res = await api.post("/api/bolt", { prompt });
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Rate limit error
      if (error.response?.status === 429) {
        throw new Error("RATE_LIMIT");
      }

      throw new Error(
        error.response?.data?.message || "Something went wrong"
      );
    }

    throw new Error("Network error");
  }
};
