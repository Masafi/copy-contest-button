var array = document.querySelectorAll("div.input")

createButton(
	array,
	(obj) => obj.querySelector("div.title"),
	(obj) => obj.querySelector("pre.content"),
	"copy-button-informatics"
)