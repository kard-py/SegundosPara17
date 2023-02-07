var se = document.getElementById("segundos")
setInterval(() => {
	var time = new Date()
	var h = 17 - time.getHours()
	var hm = h * 60
	var m = 60 - time.getMinutes()
	m = m + hm
	var s = 60 - time.getSeconds()
	s = s + m * 60
	se.innerHTML = `${s}`
}, 1000)


