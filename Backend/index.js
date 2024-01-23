import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import categoryRouter from "./routers/catgeory.router";
import zoneRouter from "./routers/zone.router";
import reviewRouter from "./routers/reviews.router";
import movieRouter from "./routers/movie.router";
import seasonRouter from "./routers/season.router";
import tvShowRouter from "./routers/tvShow.router";
import userRouter from "./routers/user.router";
import authorRouter from "./routers/author.router";
import blogRouter from "./routers/blog.router";

const app = express();
app.use(cors()); // To avaoid cors errors genereated Through cross plateforms (differents ports access)
app.use(express.json()); // To read Body Data
app.use(express.static(__dirname)); // to file read statically
const port = process.env.PORT; // Use port from .env file

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Connect Mongoose to Database
mongoose
  .connect("mongodb://127.0.0.1:27017/movieGram")
  .then(() => {
    console.log("DataBase Connected !!");
  })
  .catch((error) => console.log(error));

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

//App Running Server
app.listen(port, () => {
  console.log("Server is Running on port http://localhost:" + port);
});

// Using Routers
app.use("/categories", categoryRouter);
app.use("/zones", zoneRouter);
app.use("/reviews", reviewRouter);
app.use("/movies", movieRouter);
app.use("/seasons", seasonRouter);
app.use("/tvShows", tvShowRouter);
app.use("/users", userRouter);
app.use("/authors", authorRouter);
app.use("/blogs", blogRouter);
