const readAllBtn = document.getElementById("readAll")
const num = document.getElementById("num")

readAllBtn.addEventListener("click", () => {
	const notificationCards = document.querySelectorAll(".notificationCard")
	notificationCards.forEach(element => {
		element.classList.remove("notRead")
		num.textContent = "0"
	})

	const indicators = document.querySelectorAll(".indicator")

	indicators.forEach(element => {
		element.classList.remove("indicator")
		element.classList.add("read")
	})
})