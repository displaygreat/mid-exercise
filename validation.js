let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
  input.addEventListener('blur', function() {
    let rule = this.dataset.rule;
    let value = this.value;
    let check;

    switch (rule) {
      case 'fname' :
        check = /[א-תa-z]{2,}/.test(value);
      break;
      case 'lname' :
        check = /[א-תa-z]{2,}/.test(value);
      break;
      case 'tel' :
        check = /[0-9]{8,}/.test(value);
      break;
      case 'mail' :
        check = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(value);
      break;
    }
    this.classList.remove('valid');
    this.classList.remove('invalid');
    if (check) {
      this.classList.add('valid');
    } else {
      this.classList.add('invalid');
      this.insertAdjacentHTML('afterend', `<span class="error">השדה מולא באופן שגוי</span>`)
    }
  })
}