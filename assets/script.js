botao = document.getElementById("continuar");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll(
    "input[type=text], input[type=email], input[type=tel], input[type=password]"
  );
  inputs.forEach((e) => {
    e.addEventListener("keyup", () => {
      if (e.value) {
        e.style.border = "none";
      }
    });
  });
});
botao.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll(
    "input[type=text], input[type=email], input[type=tel], input[type=password]"
  );
  inputs.forEach((e) => {
    if (e.value == "") {
      isValid = false;
      e.style.border = "1px solid red";
      console.log(e.value);
    }
  });
  const passFields = form.querySelectorAll("input[type=password]");
  if (passFields[0].value != passFields[1].value) {
    alert("As senhas não coincidem");
  }

  const genderFields = form.querySelectorAll("input[type=radio]");
  let hasGender = false;
  genderFields.forEach((e) => {
    if (e.checked) {
      hasGender = true;
    }
  });
  if (!hasGender) {
    isValid = false;
  }

  if (isValid && passFields[0].value == passFields[1].value) {
    alert("Cadastro efetuado com sucesso!");
    location.href = "./index.html";
  }

  console.log(isValid);
});

// botao = document.getElementById("continuar");
// botao.addEventListener("click", () => {
//   // botao = document.querySelector("#continuar");

//   firstName = document.getElementById("firstnameId");
//   lastName = document.getElementById("lastnameId");
//   email = document.getElementById("emailId");
//   telefone = document.getElementById("numberId");
//   senha = document.getElementById("passwordId");
//   confirmarSenha = document.getElementById("confirmpasswordId");

//   var genero = document.getElementsByClassName("genero");
//   if (genero.value == "") {
//     alert("Genero não informado");
//   }

//   if (firstName.value === "") {
//     alert("Nome não informado");
//   } else if (lastnameId.value === "") {
//     alert("Sobrenome não informado");
//   } else if (emailId.value === "") {
//     alert("E-mail não informado");
//   } else if (numberId.value === "") {
//     alert("Telefone não informado");
//   } else if (passwordId.value === "") {
//     alert("Senha não informada");
//   } else if (confirmpasswordId.value === "") {
//     alert("Confirmar senha não informado");
//   } else {
//     alert("Cadastro realizado com sucesso!");
//     link.href = "./index.html";
//   }
// });
