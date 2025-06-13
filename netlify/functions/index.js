const express = require("express"); 
const cors = require("cors"); 
const app = express(); 
const serverless = require("serverless-http"); 
 
app.use(cors()); 
app.use(express.json()); 
 
app.post("/mrCookIA", (req, res) =
 
    let respuesta = "Lo siento, no entend¡ tu pregunta."; 
 
    if (pregunta.includes("desayuno")) { 
        respuesta = "Te recomiendo un desayuno con avena y fruta."; 
    } else if (pregunta.includes("almuerzo")) { 
        respuesta = "Un almuerzo equilibrado podr¡a ser pollo a la plancha con ensalada."; 
    } else if (pregunta.includes("cena")) { 
        respuesta = "Para cenar, una crema de verduras es ligera y saludable."; 
    } else if (pregunta.includes("calor¡as")) { 
        respuesta = "El c lculo de calor¡as depende de tus datos personales, ­cu‚ntame m s!"; 
    } else if (pregunta.includes("rastreador")) { 
        respuesta = "Abriendo el rastreador para ti..."; 
    } else if (pregunta.includes("dieta")) { 
        respuesta = "Vamos a tu plan de dieta..."; 
    } else if (pregunta.includes("registro")) { 
        respuesta = "Te llevo al registro de alimentos..."; 
    } 
 
    return res.json({ respuesta }); 
}); 
 
exports.handler = serverless(app); 
