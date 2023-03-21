const socketController = (socket) => {
    // send a message to the client
    // socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });
  
    // receive a message from the client
    // socket.on("hello from client", (...args) => {
    // ...
    // });
    // console.log("Cliente conectado", socket.id);



    //Escuchando un evento del cliente
    socket.on("enviarMensaje", (payload, callback) => {
        // console.log(payload);
        // simulando el id de una base de datos.
        const id = "ABC-123";
        callback(id);
        socket.broadcast.emit("enviarMensaje", (payload));
    });

    //Desconectamos el cliente....
    socket.on("disconnect", () => {
        // console.log("Cliente Desconectado...", socket.id);
    });
}

module.exports = {
    socketController
}