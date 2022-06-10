function sendMsg(user) {
	let msgDivLeft = document.createElement("div");
	let msgDivRight = document.createElement("div");
	let msgSent = document.createElement("button");
	let msgRecieved = document.createElement("button");
	let chatLeft = document.getElementById("chatLeft");
	let chatRight = document.getElementById("chatRight");
	msgDivLeft.classList.add("msg");
	msgDivRight.classList.add("msg");
	msgSent.classList.add("msg-sent");
	msgRecieved.classList.add("msg-recieved");
	switch(user) {
		case "left":
			let msgEnteredLeft = document.getElementById("inputLeft").value;
			if (msgEnteredLeft.length != 0 && msgEnteredLeft.length <= 50) {
				msgSent.innerHTML = msgEnteredLeft;
				msgRecieved.innerHTML = msgEnteredLeft;
				msgDivLeft.appendChild(msgSent);
				msgDivRight.appendChild(msgRecieved);
				chatLeft.insertBefore(msgDivLeft, chatLeft.childNodes[0]);
				chatRight.insertBefore(msgDivRight, chatRight.childNodes[0]);
				document.getElementById("inputLeft").value = null;
			} else if (msgEnteredLeft.length > 50) {
				alert("message too long!");
			};
			break;
		case "right":
			let msgEnteredRight = document.getElementById("inputRight").value;
			if (msgEnteredRight.length != 0 && msgEnteredRight.length <= 50) {
				msgSent.innerHTML = msgEnteredRight;
				msgRecieved.innerHTML = msgEnteredRight;
				msgDivRight.appendChild(msgSent);
				msgDivLeft.appendChild(msgRecieved);
				chatLeft.insertBefore(msgDivLeft, chatLeft.childNodes[0]);
				chatRight.insertBefore(msgDivRight, chatRight.childNodes[0]);
				document.getElementById("inputRight").value = null;
			} else if (msgEnteredRight.length > 50) {
				alert("message too long!");
			};
			break;
	};
};