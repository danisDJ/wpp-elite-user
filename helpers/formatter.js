const phoneNumberFormatter = function(number) {
  // 1. Elimine caracteres que não sejam números
  let formatted = number.replace(/\D/g, '');

  // 2. Remova o 0 inicial (prefixo)
  //    Em seguida, substituído por 55
  if (formatted.startsWith('0')) {
    formatted = '55' + formatted.substr(1);
  }
  // 3. Verifica se possui o código do país
  if (!formatted.startsWith('55')) {
    formatted = '55' + formatted;
  }
  // 4. veifica se o numero esta com o 9° digito e remove pois o wpp nao reconhece ele
  if (formatted.length > 12) {
    formatted = formatted.slice(0, 4) + formatted.slice(5, formatted.length);
  }

  if (!formatted.endsWith('@c.us')) {
    formatted += '@c.us';
  }

  return formatted;
}

module.exports = {
  phoneNumberFormatter
}