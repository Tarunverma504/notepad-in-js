$(document).ready(function(){
$("#style").change(function(){  $("#text").css('fontFamily',this.value); });

$("#size").change(function(){ $("#text").css("fontSize",this.value);  });
$("#Bold").click(function(){
    var a=$("#text").css("fontWeight");
    if(a==400)  
    {  
        document.getElementById("Bold").style.backgroundColor="black";
        document.getElementById("Bold").style.color="#3399ff";
        $("#text").css("fontWeight","bold");     
    }
    else
    {
        document.getElementById("Bold").style.backgroundColor="#3399ff";
        document.getElementById("Bold").style.color="black";
         $("#text").css("fontWeight","normal"); 
         }
 });
$("#Italic").click(function(){ 
    if(this.value=="Italic")
    {
        this.value="nonItalic";
        document.getElementById("Italic").style.backgroundColor="black";
        document.getElementById("Italic").style.color="#3399ff";
        $("#text").css("fontStyle","italic"); 
    }
    else{ this.value="Italic";
    document.getElementById("Italic").style.backgroundColor="#3399ff";
    document.getElementById("Italic").style.color="black";
    $("#text").css("fontStyle","normal");}
});


$("#Underline").click(function(){
    
    if(this.value=="Underline")
    {
        document.getElementById("Underline").style.backgroundColor="black";
        document.getElementById("Underline").style.color="#3399ff";
        this.value="normal";
        $("#text").css("textDecoration","underline");
    }
    else{
        this.value="Underline";
        document.getElementById("Underline").style.backgroundColor="#3399ff";
        document.getElementById("Underline").style.color="black";
        $("#text").css("textDecoration","none   ");
    }
 });

 document.getElementById("clear").addEventListener("mouseover",event =>{
    document.getElementById("clear").style.backgroundColor="black";
    document.getElementById("clear").style.color="#3399ff";
 });
 document.getElementById("clear").addEventListener("mouseout",event =>{
    document.getElementById("clear").style.backgroundColor="#3399ff";
        document.getElementById("clear").style.color="black";
 });

 $("#clear").click(function(){
     location.reload();
});































});