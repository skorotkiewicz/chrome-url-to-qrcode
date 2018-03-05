chrome.tabs.getSelected(null, function(tab) {
	$('#generate_btn').click(function (){
		if(!(/^\s*$/i.test($('#generate_input').val()))){	
			$('#qrcode').empty();
			var qrcode = new QRCode(document.getElementById("qrcode"), { text: $('#generate_input').val(), width: 200, height: 200 });
			$('#download_btn').show();
		}else{
			$('#qrcode').empty().height(0);
			$('#download_btn').hide();
		}
	});
	$('#download_btn').click(function (){
		if($('#qrcode img').length > 0){
			chrome.tabs.create({
				url: $('#qrcode img').attr('src')
			});
		}
	});
});