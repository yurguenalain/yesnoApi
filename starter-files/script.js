// API
const API_URL = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


//Función para llamar a la API o mostrar error.
const fetchBall = async () => {
    try {
        const respuesta = await fetch($API_URL);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


//Función para mostrar la respuesta
function mostrarRespuesta(respuesta) {
    const respuestaContainer = document.querySelector("#answer");
    respuestaContainer.innerHTML = `
    <p>${respuesta.answer}</p>
    <img src="${respuesta.image}"/>
    `;
}

//Función para el botón
document.getElementById("button").addEventListener("click", async () => {
    const elTexto = document.getElementById("input").value.toLowerCase();

    if (!elTexto) {
        document.getElementById("error").textContent = "Por favor ingresa una pregunta.";
        return; //Return vacío para detenerlo en caso de que no haya texto.
    }
    document.getElementById("error").textContent = "";

    const respuesta = await fetchBall();
    if (respuesta) {
        mostrarRespuesta(respuesta);

        setTimeout(() => {
            document.querySelector("#answer").innerHTML = "";
        }, 10000);
    }
});

