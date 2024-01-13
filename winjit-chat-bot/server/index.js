const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {authRoute}=require("./routes/auth")
const connectDb = require("./config/connectDB");  // Move the import statement here

// import routes
const getDataByPromptRoutes = require("./routes/chatRoutes");

// make instance of express
const app = express();

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Connect to MongoDB
connectDb();  // Call the connectDB function here

// routes
app.use(authRoute)
app.use(getDataByPromptRoutes);

// app.use("/", (req, res) => {
//   return res.status(200).json("Hey-Buddy");
// });

app.use("*", (req, res) => {
  return res.status(404).json({
    success: true,
    message: "Page-Not-Found",
  });
});

// port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
