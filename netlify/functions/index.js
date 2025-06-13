const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");

// Habilita CORS para todas las solicitudes
app.use(cors());
// Habilita el parsing de JSON en el body de la solicitud
app.use(express.json());

// Define la lógica de tu 'IA' para CUALQUIER ruta POST recibida por la funcion
// El comodin "*" asegura que Express siempre reciba la solicitud POST.
app.post("*", (req, res) => { // <--- CAMBIO AQUÍ: de "/mrCookIA" a "*"
    // --- Logs para depuración (aparecerán en los logs de Netlify Functions) ---
    console.log("-------------------");
    console.log("Request received (POST wildcard)");
    console.log("Original URL:", req.originalUrl); // Ver la URL completa que Express ve
    console.log("Request Body:", req.body);

    const pregunta = (req.body.pregunta || "").toLowerCase();
    console.log("Pregunta extraída:", pregunta);

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

    console.log("Respuesta generada:", respuesta);
    console.log("-------------------");

    return res.json({ respuesta });
});

// Este es el punto de entrada para Netlify Functions
exports.handler = serverless(app);
