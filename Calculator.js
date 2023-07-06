function btnClick(val){
    
    document.getElementById("displayScreen").value+=val;
}
function clearScreen(){
    document.getElementById("displayScreen").value="";
}
function equalBtn(){
    try{
    var text= document.getElementById("displayScreen").value;
    var result=eval(text);
    document.getElementById("displayScreen").value=result;
    }catch{
        alert("invalid");
    }
}
function operatorbtn(val){
   if (document.getElementById("displayScreen").value=="" && document.getElementById("displayScreen").value.lastIndexOf("+"))
   {

   }else{
    document.getElementById("displayScreen").value+=val;
   }
}


