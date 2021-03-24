let hehe = window.location.href;
let a = hehe.split("?")[1].split("=")[1].split("+");

a = `${a[0]} ${a[1]} ${a[2]} ${a[3]}`;

// let a='DLK23';
document.querySelector("#np").textContent = `${a}`;

function get_output(a) {
  fetch(`https://apiclub.in/api/v1/vehicle_info/${a.replaceAll(" ", "")}`, {
    method: "POST",
    headers: {
      "API-Key": "89a61b67b23117a4ac60dd480f80e674",
    },
  })
    .then((response) => {
      if (response.status != "200") {
        handleErrors(response.status);
        return 0;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data) set_html(data.response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const handleErrors = () => {
  console.log("ERROR");
  document.querySelector(".div4").style.display = "none";
  document.querySelector(".div3").style.display = "none";

  document.querySelector(".div5").style.display = "flex";
};
function set_html(y) {
  console.log(y);
  let b = document.querySelectorAll(".lb");
  document.querySelector(".div4").style.display = "none";
  document.querySelector(".div3").style.display = "flex";

  b[0].textContent = y.owner_name;
  b[1].textContent = y.fitness_upto;
  b[2].textContent = y.fuel_type;
  b[3].textContent = y.model;
  b[4].textContent = y.insurance_expiry;
  b[5].textContent = y.engine_number;
  b[6].textContent = y.chassis_number;
  b[7].textContent = y.registration_date;
  b[8].textContent = y.rto;
}

get_output(a);
