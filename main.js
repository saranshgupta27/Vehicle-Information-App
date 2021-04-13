let allow = true;
let allow_2 = false;

function licenseplate_y() {
  allow = true;
  allow_2 = false;
  document.querySelector("#d1").innerHTML =
    '<input type="text" oninput="this.value = this.value.toUpperCase()" placeholder="MH 14 DH 56XX" name="name" maxlength="14" id="t1" pattern="^[A-Z]{2} [0-9]{1,2} [A-Z]{0,3} [0-9]{4}$" required />';
  text_format();
  document.querySelector("#h1-2").textContent =
    "Enter Vehicle Registration Number";
}

function licenseplate_n() {
  allow = false;
  allow_2 = true;
  document.querySelector("#d1").innerHTML =
    '<input type="text" oninput="this.value = this.value.toUpperCase()" placeholder="DL 08123456XXXXX" name="name"  maxlength="16 "id="t1" class="t2" pattern="^[A-Z]{2} [0-9]{12,13}$" required />';
  text_format();

  document.querySelector("#h1-2").textContent = "Enter Driving License Number";
  if (allow_2) {
    document
      .querySelector("#t1")
      .addEventListener("keydown", function fdata(e) {
        setTimeout(function () {
          if (e.target.value.length == "2") {
            e.target.value = e.target.value + " ";
          }
        }, 200);
      });
  }
}

function text_format() {
  if (allow) {
    let size = 0;
    let swap;
    document
      .querySelector("#t1")
      .addEventListener("keydown", function fdata(e) {
        setTimeout(function () {
          if (e.target.value.length >= size) {
            if (e.target.value.length == "2") {
              e.target.value = e.target.value + " ";
            }
            if (
              e.target.value.length == "5" &&
              isNaN(e.target.value[4]) &&
              e.target.value[4] != " "
            ) {
              e.target.value =
                e.target.value.substr(0, 4) + " " + e.target.value[4];
            } else if (
              e.target.value.length == "5" &&
              e.target.value[4] != " "
            ) {
              e.target.value = e.target.value + " ";
            }
            if (
              e.target.value.length == "7" &&
              !isNaN(e.target.value[e.target.value.length - 1])
            ) {
              e.target.value =
                e.target.value.substr(0, 6) + " " + e.target.value[6];
            }
            if (
              e.target.value.length > 6 &&
              !isNaN(e.target.value[e.target.value.length - 1]) &&
              e.target.value[e.target.value.length - 1] != " " &&
              isNaN(e.target.value[e.target.value.length - 2])
            ) {
              // console.log("length" + e.target.value.length);
              // console.log("value-1 " + e.target.value[e.target.value.length - 1]);
              swap = e.target.value[e.target.value.length - 1];
              console.log("swap " + swap);
              e.target.value =
                e.target.value.substr(0, e.target.value.length - 1) +
                " " +
                `${swap}`;
            }
          }
          size = e.target.value.length;
        }, 90);
      });
  }
}

text_format();
