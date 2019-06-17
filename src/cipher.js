window.cipher = {
  encode: (number_offset, textEncode) => {
    let msgCipher = "";
    for (let i = 0; i < textEncode.length; i++) {
      let character = textEncode[i];
      let textChar;
      //Espacios
      if (character.match(/[a-z]/i)) {
        //Condicion para mayuscula A =65...Z=90
        if (textEncode.charCodeAt(i) >= 65 && textEncode.charCodeAt(i) <= 90) {
          textChar = (textEncode.charCodeAt(i) - 65 + parseInt(number_offset)) % 26 + 65;
          msgCipher += String.fromCharCode(textChar);
          //Condicion para minusculas a=97...z=122
        } else if (textEncode.charCodeAt(i) >= 97 && textEncode.charCodeAt(i) <= 122) {
          textChar = (textEncode.charCodeAt(i) - 97 + parseInt(number_offset)) % 26 + 97;
          msgCipher += String.fromCharCode(textChar);
        }
      } else {
        msgCipher += character;
      }
    }
    return msgCipher;
  },
  decode: (number_offset, textDecode) => {
    let msgDecipher = "";
    for (let i = 0; i < textDecode.length; i++) {
      let characterD = textDecode[i];
      //Espacios
      if (characterD.match(/[a-z]/i)) {
        //Condicion mayuscula A =65...Z=90 
        if (textDecode.charCodeAt(i) >= 65 && textDecode.charCodeAt(i) <= 90) {
          let textChar = (textDecode.charCodeAt(i) + 65 - parseInt(number_offset)) % 26 + 65;
          msgDecipher += String.fromCharCode(textChar);
          //Condicion para minusculas a=97...z=122
        } else if (textDecode.charCodeAt(i) >= 97 && textDecode.charCodeAt(i) <= 122) {
          let textChar = ((textDecode.charCodeAt(i) - 97 - parseInt(number_offset) + 52) % 26) + 97;
          msgDecipher += String.fromCharCode(textChar);
        }
      } else {
        msgDecipher += characterD;
      }
    }
    return msgDecipher;
  }
};
