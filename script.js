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