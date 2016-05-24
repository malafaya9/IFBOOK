function digitar(){
    var conteudo = document.getElementById("postar").value;
	var tamanhoCampo = conteudo.length;
	
	if(tamanhoCampo > 73){
		document.getElementById("postar").style.height = "85px";
	}
				
	if(tamanhoCampo > 315){
		document.getElementById("postar").style.height = "150px";
	}
	
	if(tamanhoCampo < 315 && event.keycode === 8){
		document.getElementById("postar").style.height = "85px";
	}

    if(tamanhoCampo < 75 && event.keyCode === 8){
        document.getElementById("postar").style.height = "25px";
    }
}

function quantidade(){
    var conteudo = document.getElementById("matricula").value;
    var tamanhoCampo = conteudo.length;

    if(tamanhoCampo == 14){
        document.getElementById("matricula").value = conteudo.toString().slice(0, 13);
    }
}

/* Desabilitar nome calourask (não mais usado)
function checar(){
    var marcado = document.getElementById("anonimo").checked;
    var conteudo = document.getElementById("nome-calourask").value;

    if(marcado == true){
        document.getElementById("nome-calourask").disabled = true;
        document.getElementById("nome-calourask").style.backgroundColor = "#d5cccc";
        if(conteudo != -1){
            document.getElementById("nome-calourask").value = "";
        }
    }

    else{
        document.getElementById("nome-calourask").disabled = false;
        document.getElementById("nome-calourask").style.backgroundColor = "#f3e9f3";
    }
}
*/

function changeSelectCadastro(){
    var select = document.getElementById("curso");
    var value = select.options[select.selectedIndex].value;

    if (value == "SelecioneSeuCurso") {
        alert("Você não selecionou seu curso..");
        document.getElementById("redirecionar").action = "cadastro";
    }

    else {
        document.getElementById("redirecionar").action = "cadastro";
    }
}

function changeSelectCalourask(){
    var select = document.getElementById("curso-calourask");
    var value = select.options[select.selectedIndex].value;

    if (value == "SelecioneSeuCurso") {
        alert("Você não selecionou seu curso..");
        document.getElementById("calourask").action = "calourask";
    }

    else {
        document.getElementById("calourask").action = "feed";
    }
}

function logar(){
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;

    if (usuario == "marcosadriano99" && senha == "finnpoeisreal"){
        document.getElementById("formulario-login").action = "feed";
    }

    else{
        document.getElementById("formulario-login").action = "index";
        alert("Usuário ou senha incorretos");
    }
}