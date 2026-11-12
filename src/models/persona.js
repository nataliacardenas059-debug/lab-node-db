/*
 * Laboratorio — Listado de personas
 * Archivo: src/models/persona.js
 * Tu tarea (paso 6): describir el documento Persona y exportar el modelo.
 * La colección en MongoDB se llama personas.
 * Guía: README.md
 */

const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Persona", personaSchema);
