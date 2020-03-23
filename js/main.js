
 $(function(){
 var a = new String;
 a = $('.text_cont_inner').text();
 $('.text_cont_inner').text('');
 var c=a.length;
 j=0;
 setInterval(function(){
 if(j<c){
 $('.text_cont_inner').text($('.text_cont_inner').text()+a[j]);
 j=j+1;
 }
 else {$('.text_cont_inner').removeClass('after')}
 },400);
 });