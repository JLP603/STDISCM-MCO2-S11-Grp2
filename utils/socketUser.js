const getMaxBidders = require('./socketAuction').getMaxBidders;

//Store connected Users
var users = []
var permittedUsers = []

// get online users
function getUsers(){
    // onlineUsers = []

    // users.forEach((onlineUser) => {
    //     onlineUsers.push(Object.values(onlineUser)[0])
    // })

    return users
}

// push to users object
function addUser(user) {
	users.push(user)
}

// remove user from object
function removeUser(socketId) {
	console.log("DISCONNECTING: " + socketId)

	users.forEach((user, index) => {
        if(user[socketId]){
            console.log('disconnected')
            console.log(users)
            users.splice(index, 1)

            var i = permittedUsers.indexOf(user[socketId]);
            if (i > -1) {
                permittedUsers.splice(i, 1)
            }
        }
    });

    console.log("AFTER EXIT: ", permittedUsers.length)
}

function getUserCount() {
	console.log(users.length)
	return users.length
}

function entryRequest(email) {
    console.log("BEFORE ENTRY: ", permittedUsers.length, " ", email)

    if (permittedUsers.length < getMaxBidders()) {
        permittedUsers.push(email)
        console.log("AFTER ENTRY: ", permittedUsers.length)
        return true
    }

    return false
}

module.exports = {getUsers, addUser, removeUser, getUserCount, entryRequest};