function loadInfo(){
	//PULL IN CATEGORIES//
	var cats = new XMLHttpRequest();
	cats.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var catagories = JSON.parse(this.responseText);
	        console.log("categories", catagories)
	    }
	};
	cats.open("GET", "catagories.json", true);
	cats.send();
	//PULL IN RESULTS
	var res = new XMLHttpRequest();
	res.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var results = JSON.parse(this.responseText);
	        console.log("results", results);
	    }
	};
	res.open("GET", "result.json", true);
	res.send();
	//PULL IN TYPES//
	var typesInfo = new XMLHttpRequest();
	typesInfo.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var type = JSON.parse(this.responseText);
	        console.log("types", type);
	    }
	};
	typesInfo.open("GET", "types.json", true);
	typesInfo.send();
}
loadInfo();



function printToDom (){

}