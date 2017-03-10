"use strict"
$(document).ready(function(){

  var groceryItems = []


  $("#intake").submit(function(e){
    e.preventDefault();
    var item = $("#item").val();
    $("#item").val("");
    addItem(item);
  });

  function addItem(item){
    groceryItems.push(item);
    renderList(groceryItems);
  }

  function renderList(groceryItems){
    var html = "";
    for(var i = 0; i < groceryItems.length; i++){
      html += "<li>" + groceryItems[i] + "</li>";
    }
    $("#theList").html(html);
  }
});