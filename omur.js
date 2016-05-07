var omur = (function(){
	var _state = 'unknown';

	var _fadeOut = function(timeout){
		if (_isAlreadyFadedout()){
			console.log("Dostum "+timeout+" mili saniye sonra gelicem...");
			return;
		}
		
		console.log("Dostum görüşürüz...");
		_state = "fadeout";
		setTimeout(function(){
			_fadeIn()
		},timeout);
	};

	var _fadeIn = function(){
		console.log("Dostum duymamışım ya...");
		_state = "fadein";
	};

	var _isAlreadyFadedout = function(){
		return _state == "fadeout" ? true : false;
	};

	var _saySomething = function(){
		var someClicheWords = ["Dostum Naber?", "Somon Yedim Aşkım", "Size bir fıkra anlatayım mı?", "Sen şimdi böyle diyince aklıma bir karikatür geldi", "Şahane!", "Harika!", "Standart"]
		return someClicheWords[Math.floor(Math.random() * someClicheWords.length)];
	};

	return {
		fadeOut:function(timeout){
			_fadeOut(timeout);
		},

		fadeIn:function(){
			_fadeIn();
		},

		saySomething:function(){
			console.log(_saySomething());
		}
	}
})();