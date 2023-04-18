function logar (){
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login && senha == "admin" && "admin"){
    alert('Sucesso');
    location.href = "form.html";
  } else {
    alert('Usuario ou senha incorretos');
  }
}

