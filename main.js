let data = document.querySelector("#t1");
function send() {
  let no = document.querySelector("#t1").value;
  console.log(no);
  document.querySelector(".parent").classList.add("animate__fadeOut");
  setTimeout(function(){ window.location.href = `page2.html?name=${no}`;; }, 500);
  
}

let counter = 0;

document.querySelector("#t1").addEventListener("keypress", function (e) {
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
setTimeout(function () {
  var viewheight = $(window).height();
  var viewwidth = $(window).width();
  var viewport = $("meta[name=viewport]");
  viewport.attr("content", "height=" + viewheight + "px, width=" + 
  viewwidth + "px, initial-scale=1.0");
}, 300)