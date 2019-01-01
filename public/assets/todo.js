$(document).ready(function(){
  $("input[type='text']").on("keypress",function(event){
    if(event.which===13){
      var data=$('form input');
      var todo=data;
      $.ajax({
        type:'POST',
        url:'/todo',
        data:todo,
        success: function(data){
          location.reload();
        }
      });
  }
  });
  $('li').on("click",function(){
    var item=$(this).text();
    $.ajax({
      type:'DELETE',
      url:'/todo/'+item,
      success:function(data){
        location.reload();
      }
    });
  });

$("ul").on("click", "li", function () {
	$(this).toggleClass("complete")
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle()
});
});
