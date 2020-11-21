let hehe= window.location.href;
a=hehe.split('?')[1].split('=')[1];





function get_output(a) {
  fetch(`https://shrouded-falls-48764.herokuapp.com/vehicle-info/${a}`, {
    method: "GET",
    headers: {
      "API-Key": "80ea7721dd2f4a81b255d61016655732",
    },
  })
    .then((error,response,data) => {
      
      console.log(response.status);
      return data.json();

    })
    .then((final) => {
      mainf(final);
      
    });

  const mainf = function (y) {
    let x = Object.keys(y);
    let v = y[x[0]];

    // console.log(v);
    set_html(y);
  };
}
function set_html(y) {
  let b = document.querySelectorAll(".lb");
  document.querySelector('.div4').style.display='none';
document.querySelector('.div3').style.display='flex';
  
  b[0].textContent = y["Owner Name"];
  b[1].textContent = y["Fitness Upto"];
  b[2].textContent = y["Fuel Type"];
  b[3].textContent = y["Model"];
  b[4].textContent = y["Reg Date"];
  b[5].textContent = y["Insurance expiry"];
  b[6].textContent = y["Engine Number"];
  b[7].textContent = y["Chassis Number"];
  b[8].textContent = y["Registering Authority"];
  let d=a.split('%20');
d=`${d[0]} ${d[1]} ${d[2]} ${d[3]}`;
  document.querySelector('#np').textContent=`${d.toUpperCase()}`;

}
get_output(a);
