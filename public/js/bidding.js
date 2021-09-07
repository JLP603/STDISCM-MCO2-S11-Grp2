socket.on('new-bid', (bid, user) => {
	var name = user.fName + " " + user.lName, 
		email = "(" + user.email + ")"

    $('#output').append('<p> -> <em>' + name + ' ' + email + ' bid PHP ' + bid + '.</em></p>');
})

socket.on('autobuy', (bid, user) => {
	var name = user.fName + " " + user.lName, 
		email = "(" + user.email + ")"

    $('#output').append('<p> -> <em>' + name + ' ' + email + ' bid the autobuy price of PHP ' + bid + '.</em></p>');

    $('#output').append('<p> -> <em><strong>' + name + '  won the auction.</strong></em></p>');
})

$(document).ready(function() {
	$("#bidBtn").on('click', function() {
		if (document.getElementById('bid').checkValidity()) {
			var bid = $("#bid").val()

			socket.emit('bid', bid, user)
			$("#bid").val('')
		}
	})

	$("#autobuyBtn").on('click', function() {
		socket.emit('autobuy', user)
	})
})