const socket = io();

//DOM
const  lblOnline = document.querySelector("#lblOnline");
const  lblOffline = document.querySelector("#lblOffline");
const  textMensaje = document.querySelector("#textMensaje");
const  btnEnviar = document.querySelector("#btnEnviar");

//Se conecta con el server
socket.on('connect' , () => {
    lblOffline.style.display = "none";
    lblOnline.style = "";
});

//Se desconecta del server
socket.on('disconnect' , () => {
    lblOnline.style.display = "none";
    lblOffline.style = "";
});

//Escuchar un evento personalizado del socket(server)
socket.on("enviarMensaje", (payload) => {
    console.log(payload);
})

//Evento del boton Enviar al hacer click.
btnEnviar.addEventListener('click', () => {

    const payload = {
        mensaje : textMensaje.value,
        id: "asdasdas",
        time: new Date().getTime()
    }
    socket.emit("enviarMensaje" ,  payload, (id) => {
        // console.log("Receptando el uid de la base de datos", id)
    });

});