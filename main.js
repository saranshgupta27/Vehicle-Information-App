let data = document.querySelector("#t1");
function send() {
  let no = document.querySelector("#t1").value;
  console.log(no);
  window.location.href = `page2.html?name=${no}`;
}

let counter = 0;

document.querySelector("#t1").addEventListener("keyup", function (e) {
    console.log(isNaN(e.target.value[7]));
    
  if(e.keyCode!=8){ 
    if (e.target.value.length == "2" ) {
     
    e.target.value = e.target.value + " ";
  }
  if (e.target.value.length == "5") {
    e.target.value = e.target.value + " ";
  }
  if(e.target.value.length == "8" && isNaN(e.target.value[7]) )
  {
    e.target.value = e.target.value + " ";
    
  }
  else if (e.target.value.length == "8" && e.target.value[7]!=undefined) {
    e.target.value = e.target.value.substr(0,7) + " "+e.target.value[7];
  }
}
});
