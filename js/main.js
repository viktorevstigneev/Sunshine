const heartImageElement=document.querySelector('.heart__image');
const captionElement=document.querySelector('.caption');
const link=document.querySelector('.link2');
let k=0;



heartImageElement.addEventListener('click',()=>{
if(k===0){
heartImageElement.src="./img/cat.png";
captionElement.textContent="теперь жмякни на котика";
k++;}
else{
link.href="./index1.html";
}
});

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

 