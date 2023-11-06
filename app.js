const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/holla", (req, res) => {
    console.log({ urlParam: req.query})
  res.send("Hello Duniaaaa");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  const username = req.body.username
//   if (username === usernameFromDbExist) {
//     res.status(400).send("username tidak dapat digunakan")
//   }
  res.send("Masuk pa haji");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("Update data berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
