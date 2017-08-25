function loadInfo(){
	//PULL IN CATEGORIES//
	var cats = new XMLHttpRequest();
	cats.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var categories = JSON.parse(this.responseText);
	        console.log("firebomb", categories.categories);
	        for (var i = 0; i < categories.categories.length; i++){
	        $("#info").append(`${categories.categories[i].name} `);
	    }
	    }
	};
	cats.open("GET", "json/categories.json", true);
	cats.send();
	
	//PULL IN RESULTS//
	var res = new XMLHttpRequest();
	res.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	console.log("this", this);
	        var results = JSON.parse(this.responseText);
	        console.log("results loaded", results);
	    }
	};
	res.open("GET", "json/result.json", true);
	res.send();

	//PULL IN TYPES//
	var typesInfo = new XMLHttpRequest();
	typesInfo.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var type = JSON.parse(this.responseText);
	        console.log("types loaded", type);
	    }
	};
	typesInfo.open("GET", "json/types.json", true);
	typesInfo.send();
}
loadInfo();



function printToDom (){
	console.log("hello me", loadInfo())
}