function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var button = document.getElementById("button");

    button.addEventListener("click", function(e){
        e.preventDefault();
        console.log('click');
        if(email.value == "admin@admin.com" && senha.value == "123"){
          
            window.location.href = "../index.html";

            console.log('logado');

        }else{
            alert("Email ou senha incorreto");
        }
    });
};

logar();