const express = require("express");
const app = express();

// Router

const rutaAlimentos = require("../src/routers/rutaAlimentos");
app.use("/api/alimentos/", rutaAlimentos);

//Routing

app.get("/", (req, res) => {
  res.send("My first server with Express, Patients 👩🏻‍⚕️");
});

// Obtaint PORT dynamic.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
