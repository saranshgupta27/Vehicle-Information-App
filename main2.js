let hehe = window.location.href;
let a = hehe.split("?")[1].split("=")[1].split("+");
console.log(a);
const category = `${hehe.split("&")[1].split("=")[1]}`;
if (category != "dl_info") {
  a = `${a[0]} ${a[1]} ${a[2]} ${a[3].split("&")[0]}`;
  document.querySelector("#np").textContent = `${a}`;
  a = a.replaceAll(" ", "");
} else {
  a = `${a[0]} ${a[1].split("&")[0]}`;
  document.querySelector("#np").textContent = `${a}`;
}
console.log(a);

function call_api(a, category) {
  fetch(`https://api.apiclub.in/api/v1/${category}/${a}`, {
    method: "POST",
    headers: {
      "API-Key": "",
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
  const b = document.querySelectorAll(".lb");
  const d = document.querySelectorAll(".img-caption");
  const img = document.querySelectorAll(".grid-img");
  document.querySelector(".div4").style.display = "none";
  document.querySelector(".div3").style.display = "flex";
  if (category == "vehicle_info") {
    img.forEach((item) => {
      item.style.visibility = "visible";
    });
    b[0].textContent = y.owner_name;
    b[1].textContent = y.fitness_upto;
    b[2].textContent = y.fuel_type;
    b[3].textContent = `${y.brand_name} ${y.brand_model}`;
    b[4].textContent = y.insurance_expiry;
    b[5].textContent = y.engine_number;
    b[6].textContent = y.chassis_number;
    b[7].textContent = y.registration_date;
    b[8].textContent = y.rto;
  } else if (category == "dl_info") {
    d[0].textContent = "Status";
    b[0].textContent = y.status;
    d[1].textContent = "RTO Code";
    b[1].textContent = y.rto_code;
    d[2].textContent = "Date Of Birth";
    b[2].textContent = y.dob;
    d[3].textContent = "Vehicle Class";
    b[3].textContent = y.vehicle_class;
    d[4].textContent = "Holder Name";
    b[4].textContent = y.holder_name;
    d[5].textContent = "Gender";
    b[5].textContent = y.gender;
    d[6].textContent = "RTO";
    b[6].textContent = y.rto;
    d[7].textContent = "Valid From";
    b[7].textContent = y.valid_from;
    d[8].textContent = "Valid Upto";
    b[8].textContent = y.valid_upto;
  } else if (category == "fast_tag_info") {
    d[0].textContent = "Status";
    b[0].textContent = y.isValid;
    d[1].textContent = "Owner Name";
    b[1].textContent = y.owner_name;
    d[2].textContent = "Biller ID";
    b[2].textContent = y.biller_id;
    d[3].textContent = "Fast tag Balance";
    b[3].textContent = y.fastag_balance;
    d[4].textContent = "Issuer name";
    b[4].textContent = y.issuer_name;
    d[5].textContent = "Min Amount";
    b[5].textContent = y.min_amount;
    d[6].textContent = "Max Amount";
    b[6].textContent = y.max_amount;
    d[7].textContent = "";
    b[7].textContent = "";
    d[8].textContent = "";
    b[8].textContent = "";
  }
}

call_api(a, category);
