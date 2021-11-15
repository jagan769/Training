    let text = "the rain in spain stays mainly in plain";
    let matchtext=text.match(/ain/g)
    document.getElementById("id1").innerHTML=text;
    document.getElementById("id2").innerHTML=matchtext;
    let bl=text.includes("world")
    document.getElementById("id3").innerHTML=bl;

    let str="please locate where 'locate' occurs!";
    let n=str.indexOf("locate")
    let m=str.lastIndexOf("locate")
    document.getElementById("id4").innerText=n;
    document.getElementById("id5").innerText=m;

    const fruits=["Mango","banana","orange","apple"];
    document.getElementById("de1").innerHTML=fruits.toString();
    document.getElementById("de2").innerHTML=fruits.join(" * ");

    fruits.pop();
    document.getElementById("de3").innerText=fruits;
    fruits.push("apple");
    document.getElementById("de4").innerText=fruits;
    fruits.shift("apple");
    document.getElementById("de5").innerText=fruits;
    fruits.unshift("kiwi");
    document.getElementById("de6").innerText=fruits;
    fruits[2]="peach";
    document.getElementById("de7").innerText=fruits;
     
    fruits.splice(2,2,"plum","berry");
    document.getElementById("de8").innerText=fruits;

    const mygirls=["archa","ambili","ria"];
    const myboys=["raj","ravi","amal"];
    const mychildren=mygirls.concat(myboys,fruits);
    document.getElementById("de9").innerText=mychildren;

