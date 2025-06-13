const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");

// Habilita CORS para todas las solicitudes
app.use(cors());
// Habilita el parsing de JSON en el body de la solicitud
app.use(express.json());

// Define la lógica de tu 'IA' para la ruta /mrCookIA
app.post("/mrCookIA", (req, res) => {
    // --- Logs para depuración (aparecerán en los logs de Netlify Functions) ---
    console.log("-------------------");
    console.log("Request received for /mrCookIA");
    console.log("Request Body:", req.body); // Muestra todo el cuerpo de la solicitud

    // Extrae la pregunta del cuerpo de la solicitud JSON
    // Si req.body.pregunta no existe, usa una cadena vacía para evitar errores
    const pregunta = (req.body.pregunta || "").toLowerCase();
    console.log("Pregunta extraída:", pregunta); // Muestra la pregunta que tu función está usando

    let respuesta = "Lo siento, no entendí tu pregunta.";

    if (pregunta.includes("desayuno")) {
        respuesta = "Te recomiendo un desayuno con avena y fruta.";
    } else if (pregunta.includes("almuerzo")) {
        respuesta = "Un almuerzo equilibrado podría ser pollo a la plancha con ensalada.";
    } else if (pregunta.includes("cena")) {
        respuesta = "Para cenar, una crema de verduras es ligera y saludable.";
    } else if (pregunta.includes("calorías")) {
        respuesta = "El cálculo de calorías depende de tus datos personales, ¡cuéntame más!";
    } else if (pregunta.includes("rastreador")) {
        respuesta = "Abriendo el rastreador para ti...";
    } else if (pregunta.includes("dieta")) {
        respuesta = "Vamos a tu plan de dieta...";
    } else if (pregunta.includes("registro")) {
        respuesta = "Te llevo al registro de alimentos...";
    }

    console.log("Respuesta generada:", respuesta); // Muestra la respuesta que se va a enviar
    console.log("-------------------");

    // Envía la respuesta como JSON
    return res.json({ respuesta });
});

// Este es el punto de entrada para Netlify Functions
// Envuelve tu aplicación Express para que funcione como una Lambda
exports.handler = serverless(app);
