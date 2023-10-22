(async () => {
	const headerHTML = await (await fetch('/global/header.html')).text()
	const footerHTML = await (await fetch('/global/footer.html')).text()
	const header = document.getElementById("header")
	const footer = document.getElementById("footer")

	header.innerHTML = headerHTML
	footer.innerHTML = footerHTML
})()