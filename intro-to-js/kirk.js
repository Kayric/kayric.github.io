function askMyName() {
   const name = prompt("Please enter your name")
   if (name != null) {
      document.getElementById("Intro").innerHTML = "My name is " + name;
   }
}

function helloWorld() {
   const h1message = document.getElementById("Intro").innerHTML
   alert(h1message + '' + 'สู้งาน สู้ชีวิต แต่ไม่คิดสู้เมีย')
}

function calAge() {
   const inputage = prompt("Your year of birth (AD)");
   let age = new Date().getFullYear()-inputage;
   // Code ทดลอง// let age = new Date().getFullYear()-prompt("Your year of birth (AD)");
   alert(`${"ยินดีด้วย นายอยู่ในประเทศนี้มา"} ${age} ${"ปีแล้ว"}`);
}

function loadProfile() {
  const myname = "Kirkrapee";
  const province = "Krung Thep";
  document.getElementById("my-name").innerHTML = myname;
  document.getElementById("my-province").innerHTML = province;
  }