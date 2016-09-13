 function sendtxt() {
 alert("кликнул");
 }
function res(){
one=1;
two=2;
sum=one+two;
return sum;
}
console.log(res());

function strpn(){
str1="новаЯ ";
str2="программа";
str3=str1+str2;
return str3;
}
console.log(strpn());

/*function tlab(){
tim=st.getDate();
return tim;
}
console.log(tlab());
*/
function ranr(){
return Math.random();
}
console.log(ranr());

function laba (){ /*описание функции*/
for(var i=0;i<10;i++){
sum=i;
console.log(i);
}
}
laba();  /*запуск функции*/

function did (){ /*описание функции*/
al=43;
sum=((al/2)+(al*2))-101;{
console.log(sum);
}
}
did();  /*запуск функции*/

function tlab (){ /*описание функции*/
start=new Date (2015,11,20,17,52,00);
return start;
} 
console.log(tlab());  /*запуск функции*/

function lab () {
a=1; b=1;
if (a==b)
console.log("равны");
else
console.log("не равны");
}
lab ();

function workmas (){
mas=new Array();
mas[0]="xyz";
mas[1]=27;
mas[2]=0;
for(var i=0;i<2;i++){
per=mas[i];
console.log(per);
//alert(per);
}
}
workmas();


var name;
function vvod() {
 name=prompt("Введите свое имя");
  return name;
}
function exdat() {
 //alert("Вас зовут "+name);
document.write("Вас зовут "+name);
}
//}