var selectedFile;



/*$(document).ready(function(){
    $("#uploadButton").hide();
    $("#upload-group").hide();

});*/

$("#file").on("change", function(event){
    selectedFile = event.target.files[0];
    $("uploadButton").show();

});

function uploadFile(){


    var storageRef = firebase.storage().ref('/articles/' + filename);
    var filename = selectedFile.name;
    var task = storageRef.put(selectedFile);

    uploadTask.on('state_changed', function(snapshot){

    }, function(error) {

    }, function(){
        var downloadURL = uploadTask.snapshot.downloadURL;

    });

    console.log(downloadURL);
    
    }