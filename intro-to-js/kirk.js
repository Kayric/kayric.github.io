function askMyName() {
    const name = prompt("Please enter your name")
    if (name != null) {
       document.getElementById("Intro").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("Intro").innerHTML
    alert(h1message +''+ 'สู้งาน สู้ชีวิต แต่ไม่คิดสู้เมีย')
 }