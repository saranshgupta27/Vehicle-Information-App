let hehe= window.location.href;
a=hehe.toUpperCase().split('?')[1].split('=')[1].split('-');

a=`${a[0]} ${a[1]} ${a[2]} ${a[3]}`;

// let a='DLK23';
document.querySelector('#np').textContent=`${a.replace(/ /g, "-")}`;
function get_output(a) {
  fetch(`https://shrouded-falls-48764.herokuapp.com/vehicle-info/${a}`, {
    method: "GET",
    headers: {
      "API-Key": "80ea7721dd2f4a81b255d61016655732",
    },
  })
  .then(response => {
    
    if(response.status != '200'){
      handleErrors(response.status);
      return 0;
    }
    return response.json();
  })
  .then(data => {
    if(data)
      mainf(data);
  })
  .catch(err => {
    console.log(err);
  });

  const mainf = function (y) {
    let x = Object.keys(y);
    let v = y[x[0]];
    
    set_html(y);
  };
}

const handleErrors = () => {
  console.log('ERROR');
  document.querySelector('.div4').style.display='none';
  document.querySelector('.div3').style.display='none';
  
  document.querySelector('.div5').style.display='flex';




}
function set_html(y) {
  let b = document.querySelectorAll(".lb");
  document.querySelector('.div4').style.display='none';
  document.querySelector('.div3').style.display='flex';
  
  b[0].textContent = y["Owner Name"];
  b[1].textContent = y["Fitness Upto"];
  b[2].textContent = y["Fuel Type"];
  b[3].textContent = y["Model"];
  b[4].textContent = y["Insurance expiry"];
  b[5].textContent = y["Engine Number"];
  b[6].textContent = y["Chassis Number"];
  b[7].textContent = y["Reg Date"];
  b[8].textContent = y["Registering Authority"];

  

}



get_output(a);