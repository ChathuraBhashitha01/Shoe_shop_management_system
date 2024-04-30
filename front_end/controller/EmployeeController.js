$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');


function clearAll(){
    $("#customer,#supplier,#employee").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navEmployee").click(function (){
    setView($("#employee"))
});

let profilePic=document.getElementById("profilePic")
let inputFile=document.getElementById("inputFile")

inputFile.onchange = function (){
    profilePic.src=URL.createObjectURL(inputFile.files[0])
}