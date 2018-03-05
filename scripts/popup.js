chrome.tabs.getSelected(null, function(tab) {
	var qrcode = new QRCode(document.getElementById("qrcode"), { text: tab.url, width: 200, height: 200 });
	$('#url').width(200).text(tab.url);
});