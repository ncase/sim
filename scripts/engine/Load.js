(function(){

// Get the path to the JSON
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Local or Remote or URL?
var path, local, lz, url;
if(local = getParameterByName("s")){ // note: "=" not "=="
    path = "models/"+local+".json";
}else if(lz = getParameterByName("lz")){ // also: "=" not "=="
    //path = Save.baseURL+remote+".json?print=pretty";
    // REPLACE WITH LZ-WHATEVER.
}else if(url = getParameterByName("url")){ // yup: "=" not "=="
    path = url;
}else{
    path = "models/forest.json";
}

let onLoadSuccess = (model)=>{

    // Recursive: every state, and action within, must have actions.
    // Yeah this over-does it, but whatever.
    var _mustHaveActions = function(array){
        for(var i=0;i<array.length;i++){
            var item = array[i];
            item.actions = item.actions || [];
            _mustHaveActions(item.actions);
        }
    };
    _mustHaveActions(model.states);

    // Show all the UI, whatever.
    document.body.style.display = "block";

    // Now init 'em
    Model.init(model);

};

if(lz){

    let compressedData = LZString.decompressFromEncodedURIComponent(lz);
    let data = JSON.parse(compressedData);
    onLoadSuccess(data);

}else{

    // Load it & make it the model
    reqwest({
        url: path,
        type: 'json', 
        method: 'get',
        error: function(err){
        },
        success: (model)=>{
            onLoadSuccess(model);
        }
    });

}

})();