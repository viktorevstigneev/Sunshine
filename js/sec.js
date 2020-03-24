// 1
const data = document.querySelector('.date');
const btn1 = document.querySelector('.btn1');
const block1 = document.querySelector('.block1');
// 2
const o = document.querySelector('#text');
const btn2 = document.querySelector('.btn2');
const block2 = document.querySelector('.block2');
// 3
const n = document.querySelector('#text1');
const btn3 = document.querySelector('.btn3');
const block3 = document.querySelector('.block3');
//4
const block4 = document.querySelector('.block4');
const message =document.querySelector('.message');
const letter=document.querySelector('.let');

message.addEventListener('click',()=>{
message.src='./img/message.png';
message.style.display='block';
letter.style.display='block';
});

btn1.addEventListener('click',()=>{
  console.log('data.value: ', data.value);
if(data.value==="2019-11-20"){alert('молодец')
block1.style.display="none";
block2.style.display="block";}
else{
  alert("ты молодец) но это не правильно");
}

  });

btn2.addEventListener('click',()=>{
  if(o.value===""){
    alert("не не не,так низя делать,ты ничего не ввела");
  }
  else{
     if(o.value==="солнышко" || o.value==="Солнышко"){
       alert("молодец, солншыко ))");
      block2.style.display="none";
      block3.style.display="block";}
      else{
        alert("ты почти смогла,подумай еще это не сложно)");
     }
   
     }
    
    });

btn3.addEventListener('click',()=>{
if(n.value===""){
  alert("низя оставлять поле пустым");
}
else{
  if(n.value==="люблю тебя" || n.value==="Люблю тебя" || n.value===" Я люблю тебя" || n.value===" я люблю тебя"){
    alert("это был последний вопрос ,я в тебе не сомневался");
    block3.style.display="none";
    block4.style.display="block"
  }
  else{
    alert("ээээх,а я надеялся");
  }
}
     
      });