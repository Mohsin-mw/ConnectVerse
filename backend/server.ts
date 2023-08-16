import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

// ROUTER
import authRouter from "./Router/auth";

// MIDDELWARE
app.use(cors());

// ROUTES
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("server has started on port", port);
});
