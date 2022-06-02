const $form = document.querySelector(".form-container__wrapper");
const $inputName = document.querySelector(".input-name");
const $labelName = document.querySelector(".label-name");
const $inputEmail = document.querySelector(".input-email");
const $labelEmail = document.querySelector(".label-email");
const $inputPassword1 = document.querySelector(".input-password-1");
const $inputPassword2 = document.querySelector(".input-password-2");
const $labelPassword = document.querySelector(".label-password");
const $checkbox = document.querySelector(".form-container__wrapper__terms-wrapper--checkbox");
const $checkboxWrapper = document.querySelector(".form-container__wrapper__terms-wrapper");

function verifyName() {
  if ($inputName.value.length <= 3) {
    $labelName.innerHTML = `<label for="form-name" class="form-container__wrapper--title label-name"
    >Nome Completo 
    <strong class="alert">O nome deve conter ao menos 3 letras</strong></label
  >`;
  return false;
  }
  return true;
}

function verifyEmail() {
  const field = $inputEmail.value 
  if (!field.includes("@")) {
    $labelEmail.innerHTML = `<label for="form-email" class="form-container__wrapper--title label-name"
    >E-mail 
    <strong class="alert">E-mail inválido</strong></label
  >`;
  return false;
  }
  return true;
}

function verifyPassword() {
  if ($inputPassword1.value !== $inputPassword2.value) {
    $labelPassword.innerHTML = `
    <label
      for="form-confirm-password"
      class="form-container__wrapper--title label-password">
      Confirmar Senha
      <strong class="alert">
        As senhas devem ser iguais
      </strong>
    </label>`
    return false;
  }
  return true;
}

function verifyCheckbox(){
  if(!$checkbox.checked){
    $checkboxWrapper.innerHTML = `<input
    type="checkbox"
    name="terms"
    id="form-terms"
    class="form-container__wrapper__terms-wrapper--checkbox"
  />
  <label
    for="form-terms"
    class="form-container__wrapper__terms-wrapper--title"
    >
    Aceito os termos de uso e concordo com as
    <a href="#" class="form-container__wrapper__terms-wrapper--link">
      políticas de privacidade
    </a>
    </label>
    <strong class="alert">
      Você deve aceitar as políticas de privacidade
    </strong>`
    return false;
  }
  return true;
}

$form.addEventListener('submit', function(event){
  verifyName();
  verifyEmail();
  verifyPassword();
  verifyCheckbox();
  event.preventDefault();
  if (verifyName() && verifyEmail() && verifyCheckbox() && verifyPassword()){
    SubmitEvent(event);
  }
})