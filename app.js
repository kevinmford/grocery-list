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
      html += `<div class="row"><li`
      if (groceryItems[i].checked){
        html += " class= 'checked'";
      }
      html +=` data-index= ${i}> ${groceryItems[i].text}<div class="pull-right">` +
      `<button class="btn btn-xs btn-primary fa fa-pencil edit" data-toggle="modal" data-target="#editBox${i}"></button>`+
      `<div class="modal fade" id="editBox${i}" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" style="display: none">` +
        `<div class="modal-dialog modal-sm" role="document">` +
          `<div class="modal-content">` +
            `<div class="modal-header">` +
              `<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>` +
              `<h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>` +
            `</div>` +
            `<div class="modal-body">` +
              `<input type="text" data-index="${i}" value="${groceryItems[i].text}">` +
              `<button type="button" class="editSubmit close" data-dismiss="modal">Submit</button>` +
            `</div>` +
          `</div>` +
        `</div>` +
      `</div>` +
      `<button class="btn btn-xs btn-info fa fa-check-circle-o check"></button>` +
      `<button class="btn btn-xs btn-danger fa fa-times-circle delete"></button></div></li></div>`;
    }
    $("#theList").html(html);
  }

  $(document).on("click", ".delete", function () {
    var item = parseInt($(this).parent().parent().attr("data-index"));
    groceryItems.splice(item, 1);
    renderList();
  });

  $(document).on("click", ".check", function () {
    var item = parseInt($(this).parent().parent().attr("data-index"));
    groceryItems[item].checked = !groceryItems[item].checked;
    renderList();
  });

  $(document).on("click", ".editSubmit", function () {
    var text = $(this).prev().val();
    var item = parseInt($(this).prev().attr("data-index"));
    groceryItems[item].text = text;
    renderList();
    var selector = `#editBox${item}`;
    $(selector).modal('hide');
  });

});