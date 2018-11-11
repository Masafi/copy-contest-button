function copyToBuff(text, button) {
	var range = document.createRange()
	range.selectNode(text)
	window.getSelection().removeAllRanges()
	window.getSelection().addRange(range)
	// try {
	// 	navigator.clipboard.writeText(text).then(function() {
	// 		button.innerHTML = "Скопировано"
	// 	})
	// } 
	// catch (err) {
	// 	console.log(err)
	// 	alert("Couldn't copy text. Check your browser version")
	// }
	document.execCommand("copy");
}

function createButton(array, nodeRetriever, textRetriever, className) {
	if(!className) {
		className = "copy-button"
	} 
	for(let i = 0; i < array.length; i++) {
		let obj = array[i]
		
		let button = document.createElement("button")
		button.className = className
		button.innerHTML = "Скопировать"
		obj.onmouseleave = () => button.innerHTML = "Скопировать"
		button.onclick = () => copyToBuff(textRetriever(obj), button)
		button.type = "button"

		let node = nodeRetriever(obj)
		node.innerHTML = "<div class='copy-button-container'>" + node.innerHTML + "</div>"
		node.firstChild.appendChild(button)
	}
}