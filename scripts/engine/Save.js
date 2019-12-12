(function(exports){

exports.Save = {};

Save.uploadModel = function(){

	// Compress the Model data
	let data = JSON.stringify(Model.data);
	//console.log(data);
	let compressedData = LZString.compressToEncodedURIComponent(data);
	//console.log(compressedData);

	// Save
	let currentURL = [location.protocol, '//', location.host, location.pathname].join('');
	setTimeout(()=>{
		let link = currentURL+'?lz='+compressedData;
		publish("/save/success",[link]);
	},500);

};

})(window);