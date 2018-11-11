var array = document.querySelectorAll("table.sample-tests")

createButton(
	array,
	(obj) => obj.querySelector("thead").querySelector("tr").querySelector("th"),
	(obj) => obj.querySelector("tbody").querySelector("tr").querySelector("td").querySelector("pre"),
	"copy-button-yandex"
)