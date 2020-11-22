let data = document.querySelector("#t1");
function send() {
  let no = document.querySelector("#t1").value;
  console.log(no);
  document.querySelector(".parent").classList.add("animate__fadeOut");
  // setTimeout(function(){ window.location.href = `page2.html?name=${no}`;; }, 500);
  
}

let ok = "D";
let nk = "D";
let i = 0;
document.querySelector("#t1").addEventListener("keydown", function (e) {
  setTimeout(function(){ 
  //   temp=e.target.value;
  //   console.log(temp.length);
  //   i=0;j=0;
  //   while(i<temp.length)
  // {
  //   j=i+1;
  //   if (isNaN(temp[i]) && !isNaN(temp[j]) )
  //   {
      
  //       // if(temp[j]=='')
  //       // {
  //       //   j=j+1
  //       // }
  //       swap=temp[j];
  //       temp[j]=' ';
  //       temp[j+1]=swap;
  //       break;
  //     }
  //     else 
  //     { continue};
  
  //   }i++;
  if (i < 13) 
      {
        nk = e.key;
        console.log(ok, nk);
        if (isNaN(nk) != isNaN(ok)) 
        {
          console.log("inside");
          e.target.value =e.target.value.substr(0, i)+" ";
        
          i++;
        }
        ok = nk;
      }
      i++;
      ok = nk;
    
   }, 500);
  
});
  
//   if (e.key.toUpperCase()!= 'backspace') {
//     if (i < 13) 
//     {
//       nk = e.key;
//       console.log(ok, nk);
//       if (isNaN(nk) != isNaN(ok)) 
//       {
//         console.log("inside");
//         e.target.value =e.target.value.substr(0, i)+" ";
      
//         i++;
//       }
//       ok = nk;
//     }
//     i++;
//     ok = nk;
//   } else{ nk=ok;
//     if(ok!=' ' && e.target.value.substr(i-1)==' ')
//     {
//       ok=e.target.value.substr(i-2);i--;
//     } 
//       else {ok=e.target.value.substr(i-1); i--; console.log(ok, nk); }}
// });
//   let i=0
//   while(i<13){
//   nb=e.target.value;
//   if(i==2){
    
//   nb[i+1]=nb[i];
//     nb[i]=''; 
//   }
//   if(i==5){
//     nb[i+1]=nb[i];
//     nb[i]=''; 
//   }
//   if(i==9){
//     nb[i+1]=nb[i];
//     nb[i]=''; 
//   }
  
//   e.target.value=nb;
// }i++;});
  // if (e.keyCode != 8) {
  //   if (e.target.value.length == "2") {
  //     e.target.value = e.target.value + " ";
  //   }
  //   if (e.target.value.length == "5" && isNaN(e.target.value[4])) {
  //     e.target.value = e.target.value.substr(0, 4) + " " + e.target.value[4];
      
  //   } 
  //   else if (e.target.value.length == "5" && e.target.value[4] != undefined) {
  //     e.target.value = e.target.value+ " " ;
  //   }
  //   if (e.target.value.length == "7" && isNaN(e.target.value[8]) && e.target.value[8] != undefined) {
  //     e.target.value = e.target.value.substr(0, 7)+e.target.value[8] + " ";
      
  //   } 
  //   else if(e.target.value.length == "7"  && e.target.value[8] != undefined)
  //   {e.target.value = e.target.value.substr(0, 7)+ " "; }
  //   else if (e.target.value.length == "7" && !isNaN(e.target.value[8])) {
  //     e.target.value = e.target.value.substr(0, 7)+ " ";
      
  //   } 
  //   else if (e.target.value.length == "7" && e.target.value[6] != undefined) {
  //     e.target.value = e.target.value.substr(0, 7) + " " + e.target.value[4];
  //   }
  //   if (e.target.value.length == "5") {
  //     e.target.value = e.target.value + " ";
  //   }
  //   if (e.target.value.length == "9") {
  //     e.target.value = e.target.value + " ";
  //   } }});
  



// if(e.target.value.length == "8" && isNaN(e.target.value[7]) )
// {
//   e.target.value = e.target.value + " ";
  
// }
// else if (e.target.value.length == "8" && e.target.value[7]!=undefined) {
//   e.target.value = e.target.value.substr(0,7) + " "+e.target.value[7];}
