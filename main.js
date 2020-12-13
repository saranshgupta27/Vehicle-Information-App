var selector = document.getElementById("t1");
Inputmask({
  mask: "aa-9{1,2}-a{1,3}-9999",
  placeholder: "MH-14-DH-56XX",
  definitions: {
    '*': {
      casing: "upper"
    }
  }
}).mask(selector);
