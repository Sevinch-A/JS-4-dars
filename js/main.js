// MATH IN JS

//let round = Math.round(8.8);
//document.write(round);

//let math = Math.pow(5,5);
//document.write(pow)

//let sqrt = Math.sqrt(36);
//document.write(sqrt);

//let abs = Math.abs(-12.8)
//document.write(abs)

//let ceil = Math.ceil(49.1);
//let floor = Math.floor(49.9);

//let min = Math.min(23,149,3456,9999,3,4)
//let max = Math.max(23,149,3456,9999,3,4)

//document.write(max);

let byTag = document.getElementsByTagName("p");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classnomi");
let bySelector = document.querySelector(".classnomi");
let bySelectorAll = document.querySelectorAll(".classnomi")
let byAll = document.getElementsByTagName("h1").namedItem("idNomi")

byAll.style.backgroundColor = "green"
byAll.style.color = "yellow"
byAll.style.width = "350px"
byAll.style.height = "200px"
byAll.style.border = "5px solid royalblue"
byAll.style.textAlign = "center"
byAll.style.paddingTop = "70px"
byAll.style.boxSizing = "border-box"
byAll.style.textTransform = "uppercase"

console.log(byAll);