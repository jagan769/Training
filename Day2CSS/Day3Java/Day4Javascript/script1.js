let colors=["Red","Blue","Green","Yellow"];
document.getElementById("id1").innerText=colors.toString();

colors.pop();
document.getElementById("id2").innerText=colors;
colors.push("Yellow");
document.getElementById("id3").innerText=colors;
colors.shift("Yellow");
document.getElementById("d1").innerText=colors;
colors.unshift("Red");
document.getElementById("d2").innerText=colors;


let animals=["Cat","Dog","Rat","Fish"];
document.getElementById("a1").innerText=animals.toString();
animals.splice(3,0,"Rhino","Hippo")
document.getElementById("a2").innerText=animals;
animals.splice(2,2,"Fox","Deer","Tiger")
document.getElementById("a3").innerText=animals;

const veggies=["potato","brinjal","tomato","spinach"];
document.getElementById("n1").innerHTML=veggies;
veggies.sort();
document.getElementById("n2").innerHTML=veggies;
const nos=[234,65,43,256,12];
document.getElementById("n11").innerHTML=nos;
nos.sort(function(a,b){return b-a;})
document.getElementById("n12").innerHTML="After sorting: " +nos;

let txt=" ";
nos.map(myFunction);
function myFunction(value,index,array)
{
txt+=value+100 +"<br>";
}
document.getElementById("n21").innerHTML=txt;

const date=newdate();
document.getElementById("n31").innerHTML=date;
