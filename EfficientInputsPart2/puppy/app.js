 var puppyInput = document.querySelector('#puppy-input');
    var submit = document.querySelector('#submit');

    submit.onclick = function () {
      if (puppyInput.value !== "puppy") {
        puppyInput.setCustomValidity("The input should say 'puppy'. You typed: '" + puppyInput.value + "'");
      } else {
        puppyInput.setCustomValidity("");
      }
    };