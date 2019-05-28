function multiply(){
  let multiply = 1;
    for(let i = 0; i<arguments.length;i++){
      multiply *= arguments[i];
    }
    return multiply
}