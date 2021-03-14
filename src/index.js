module.exports =  function toReadable (num) {
   let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tw = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundNum = Math.trunc(num / 100); //x сотен
  console.log(hundNum)
  let renTen = num % 100; // остаток в десятках
  console.log(renTen)
  let tenNum = Math.trunc(renTen / 10); // х десятков
  console.log(tenNum)
  let renNum = renTen % 10; //остатов в единицах
  let newTen = 0;
  if (tenNum === 1) {
    let res = '' + tenNum + renNum;
    newTen = Number(res);
    console.log(newTen)
  }

  let result = '';
  let obj = {
    hundred: hundNum,
    tenths: tenNum,
    units: renNum,
    newTen: newTen
  }
  if (obj.hundred === 0 && obj.tenths === 0 && obj.units === 0) {
    result += dg[obj.units]
  }
  if (obj.hundred != 0) {
    result += dg[obj.hundred] + " hundred";
    if (obj.tenths != 0 && obj.tenths != 1) {
    result += ' ' + tw[obj.tenths];
    if (obj.units != 0) {
      result += " " + dg[obj.units];
    }
    } else if (obj.tenths === 0 && obj.units != 0) {
      result += " " + dg[obj.units];
    }
  else if (obj.tenths === 1) {
    result += ' ' + tn[obj.units]
  } 
  
  }else if (obj.hundred === 0) {
  	if (obj.tenths != 0 && obj.tenths != 1) {
    result +=  tw[obj.tenths];
    if (obj.units != 0) {
      result += " " + dg[obj.units];
    } 
  }else if (obj.tenths === 0 && obj.units != 0) {
      result +=  dg[obj.units];
    }
  else if (obj.tenths === 1) {
    result +=   tn[obj.units]
  }
  }
  return result
}


