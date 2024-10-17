const express = require('express');
const router = express.Router();
const tasks = require("../MOCK_DATA.json");

router.get('/', (req, res) => {
	// Retornar el listado de todas las tareas...
});

router.get('/:id', (req, res) => {
	// Retornar la tarea identificada con id...
});

router.post('/', (req, res) => {
	// Crear una tarea
});

router.put('/:id', (req, res) => {
	// Editar la tarea identificada con id...
});

router.delete('/:id', (req, res) => {
	// Eliminar la tarea identificada con id...
});

module.exports = router;