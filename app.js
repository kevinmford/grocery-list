"use strict"
$(document).ready(function(){

  var groceryItems = []


  $("#intake").submit(function(e){
    e.preventDefault();
    var item = $("#item").val();
    $("#item").val("");
    addItem(item);
  });

  function addItem(text){
    var item = {text : text, checked : false}
    groceryItems.push(item);
    renderList();
  }

  function renderList(){
    var html = "";
    for(var i = 0; i < groceryItems.length; i++){
      html += "<li data-index-number='" + i + "'>" + groceryItems[i].text + "<button class='btn btn-xs btn-danger deleteButton pull-right'>Delete</button></li>";
    }
    $("#theList").html(html);
  }

  $(document).on("click", ".deleteButton", function () {
    var item = parseInt($(this).parent().attr("data-index-number"));
    groceryItems.splice(item, 1);
    renderList();
  });


});