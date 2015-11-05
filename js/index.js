$('#J_tab').on('click','a',function(){
  var href = $(this).attr('href');
  window.history.pushState({page:href},'test',href);
  callback();
  return false;
});


 var c = $('#J_content');

 callback();

 function callback(){
   c.html(location.pathname);
 }

 if('pushState' in history){
   window.addEventListener("popstate", function() {
       callback();
   });
 }
