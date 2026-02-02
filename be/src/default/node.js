const nodeTemplate = {
  name: "node",
  files: [
    {
      path: "index.js",
      content: `
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.listen(3000, () => {
  console.log("Server running");
});
      `
    }
  ]
};

export default nodeTemplate;
