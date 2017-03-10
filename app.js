"use strict"
$(document).ready(function(){

  $("#intake").submit(function(e){
    e.preventDefault();
    var item = $("#item").val();
    $("#item").val("");
    var html = "<li>" + item + "</li>";
    $("#theList").append(html);
  });


});