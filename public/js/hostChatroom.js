function startBid() {
    document.getElementById("startTime").disabled = true;
 	socket.emit('start-auction')   
}

