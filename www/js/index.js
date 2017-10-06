onPost = function () {
	var url = document.getElementById('url').value;
	var xhr = new XMLHttpRequest();

	xhr.open('POST', url, true);

	xhr.onload = () => {
		document.getElementById('status').innerText =
			'Status code:\n' + xhr.status
			+ '\n\nBody:\n' + xhr.responseText
			+ '\n\nHeaders:\n' + xhr.getAllResponseHeaders()
	};

	xhr.send(null);
};
