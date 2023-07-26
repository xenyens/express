/**
 * Personalizando el routing en un módulo
 */

const express = require("express");

const { smae } = require("../../utils/smae");

const rutaAlimentos = express.Router();

rutaAlimentos.get("/", (req, res) => {
  res.send(JSON.stringify(smae));
});

rutaAlimentos.get("/:nomAlimento", (request, result) => {
  const nombreAlimento = request.params.nomAlimento;
  const resultados = smae.SMAE.filter((alimento) =>
    alimento.Alimento.toLowerCase().includes(nombreAlimento.toLowerCase())
  );

  if (resultados === 0) {
    return result.status(404).send(`El alimento ${alimento} no se encuentra.`);
  }

  result.send(JSON.stringify(resultados));
});

module.exports = rutaAlimentos;
