 function sendtxt() {
 alert("�������");
 }
function res(){
one=1;
two=2;
sum=one+two;
return sum;
}
console.log(res());

function strpn(){
str1="����� ";
str2="���������";
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

function laba (){ /*�������� �������*/
for(var i=0;i<10;i++){
sum=i;
console.log(i);
}
}
laba();  /*������ �������*/

function did (){ /*�������� �������*/
al=43;
sum=((al/2)+(al*2))-101;{
console.log(sum);
}
}
did();  /*������ �������*/

function tlab (){ /*�������� �������*/
start=new Date (2015,11,20,17,52,00);
return start;
} 
console.log(tlab());  /*������ �������*/

function lab () {
a=1; b=1;
if (a==b)
console.log("�����");
else
console.log("�� �����");
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
 name=prompt("������� ���� ���");
  return name;
}
function exdat() {
 //alert("��� ����� "+name);
document.write("��� ����� "+name);
}
//}