function myReplace(str, before, after) {
    let regex = /[A-Z]/
    if (arguments[1].match(regex)) {
      arguments[2] = arguments[2][0].toUpperCase() + arguments[2].slice(1);
      str = str.replace(arguments[1], arguments[2]);
      console.log(str)
    } else 
    str = str.replace(arguments[1], arguments[2]);
    
    return str;
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")