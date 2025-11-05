// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";

dotenv.config();
// hay my morena
const app = express();

// Servir archivos estáticos desde la carpeta actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());

// Usa variable de entorno para la API KEY
const API_KEY = process.env.GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

app.post("/api/chat", async (req, res) => {
  try {
    const { history } = req.body;

    // Validación básica del historial
    if (!Array.isArray(history) || history.length === 0) {
      return res.status(400).json({ error: "Historial inválido" });
    }

    // Instrucción de sistema mejorada para preguntas una a una y cursos disponibles
    const systemPrompt = `Eres un evaluador vocacional profesional. No hables de otros temas que no sean la evaluación vocacional. Cuando el usuario diga que está listo, inicia el examen vocacional con preguntas claras y cortas, SOLO UNA PREGUNTA A LA VEZ, espera la respuesta antes de hacer la siguiente pregunta, hasta completar 10 preguntas. Al final, evalúa todas las respuestas y recomienda las áreas y cursos más adecuados de la siguiente lista. Sé amable, directo y no te desvíes del tema.

Estos son los cursos y áreas disponibles:

### Área de Ciencias Físicas y Matemáticas 🌌
* Cálculo Diferencial e Integral - Básica
* Álgebra Lineal - Básica
* Física Clásica - Básica
* Química General - Básica
* Probabilidad y Estadística - Básica
* Ecuaciones Diferenciales - Avanzada
* Mecánica Cuántica - Avanzada
* Astrofísica - Avanzada

---

### Área de Ciencias Biológicas y de la Salud 🩺
* Biología Celular - Básica
* Genética - Básica
* Anatomía y Fisiología Humana - Básica
* Bioquímica - Básica
* Microbiología - Básica
* Farmacología - Avanzada
* Inmunología - Avanzada

---

### Área de Ciencias Sociales 🏛
* Sociología - Básica
* Psicología General - Básica
* Economía - Básica
* Ciencia Política - Básica
* Antropología - Básica
* Derecho Constitucional - Avanzada
* Relaciones Internacionales - Avanzada
* Psicología Clínica - Avanzada

---

### Área de Humanidades y Artes 🎨
* Filosofía - Básica
* Historia Universal - Básica
* Literatura - Básica
* Ética - Básica
* Historia del Arte - Básica
* Lingüística - Avanzada
* Crítica Literaria - Avanzada
`;

    // Construir el historial para Gemini
    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
    ];

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con Gemini", details: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});