
/**  Menu Principal  **/
function mudaFoto (foto) {
    document.getElementById ("icone").src = foto;
}

/**  Aba (Fale Conosco)  **/
function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 1500,00;
    document.getElementById('cTot').value = tot;
  }  