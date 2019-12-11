/**
 * Calcula os pontos da liga cearense de Keyforge.
 * @param {string} sequencia de lojas.
 * @param {string} presença do jogador.
 * @return pontos calculados.
 * @customfunction
 */
function CALDEIRINHA(seqLojas, p) {
  var pontos = 0;
  var presenca = p[0];
  
  const lojasPres = { b: '', q: '', r: '', o: '' };

  var seq = seqLojas.split('');
  var i;
  for (i = seq.length - 1; i >= 0; i--) {
    var pres = presenca.pop();
    if (pres == 'o') {
      pontos++;
    }
    if (seq[i] in lojasPres) {
      lojasPres[seq[i]] += pres.toString();
    }
  }
  
  if (pontos >= 12) {
    pontos += 8;
  } else if (pontos >= 10) {
    pontos += 5;
  } else if (pontos >= 8) {
    pontos += 3;
  } else if (pontos >= 6) {
    pontos += 2;
  } else if (pontos >= 4) {
    pontos++;  
  }
  
  var qtdLojas = 0;
  var lojasArr = ['b', 'q', 'r'];
  for (i=0; i<3; i++) {
    var loja = lojasArr[i];
    var presStr = lojasPres[loja];
    var lenPres = presStr.length;
    var indexOfO = presStr.indexOf('o');
    if (indexOfO >=0) {
      qtdLojas++;
      for (var j=indexOfO; j<=lenPres-4; j++) {
        if (presStr.substr(j,4) === 'oooo') {
          pontos++;
          break;
        }
      }
    }
  }
  
  if (qtdLojas >= 3) {
    pontos += 3;
  } else if (qtdLojas >= 2) {
    pontos++;  
  }
  
  return pontos;
};
