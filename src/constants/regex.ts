const number = /[0-9]/;
const lowercaseString = /[a-z]/;
const uppercaseString = /[A-Z]/;
const specialSymbol = /_+|[^\w]/;
const emailString =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameString = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|^,"~<>;:[\]]+$/u;
const urlString = /^(((ftp|http|https):\/\/).[a-z0-9-%/&=?.]+)|((www\.).[a-z0-9-%/&=?.]+\..)/;

export { number, lowercaseString, uppercaseString, specialSymbol, urlString, nameString, emailString };

