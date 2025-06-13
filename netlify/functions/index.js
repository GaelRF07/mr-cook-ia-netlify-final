const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");

app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Habilita el parsing de JSON en el body de la solicitud

// Define la lógica de tu 'IA' para la ruta /mrCookIA
app.post("/mrCookIA", (req, res) => {
    // ¡ESTA ES LA LÍNEA QUE FALTABA Y CAUSABA EL ERROR 502!
    // Extrae la pregunta del cuerpo de la solicitud JSON
    const pregunta = (req.body.pregunta || "").toLowerCase();

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

    return res.json({ respuesta });
});

// Este es el punto de entrada para Netlify Functions
// Envuelve tu aplicación Express para que funcione como una Lambda
exports.handler = serverless(app);
