var numero0 = 0
var numero1 = 1
var numero2 = 2
var numero3 = 3
var numero4 = 4
var numero5 = 5
var numero6 = 6
var numero7 = 7
var numero8 = 8
var numero9 = 9

var resut = []
var resut1 = []



function aaa(num) {
  if (resut[0] !== 0) {
    resut.push(num)
    resut1 = resut.join("")
    document.getElementById('screen').innerHTML = resut1;
  } else {
    resut.pop()
    resut.push(num)
    resut1 = resut.join("")
    document.getElementById('screen').innerHTML = resut1;
  }
}
function sinais(sinal) {
  sinal.toString()
  switch (sinal) {
    case "mais":
      resut.push("+")
      resut1 = resut.join("")
      document.getElementById('screen').innerHTML = resut1;
      break;
    case "menos":
      resut.push("-")
      resut1 = resut.join("")
      document.getElementById('screen').innerHTML = resut1;
      break;
    case "mult":
      resut.push("*")
      resut1 = resut.join("")
      document.getElementById('screen').innerHTML = resut1;
      break;
    case "div":
      resut.push("/")
      resut1 = resut.join("")
      document.getElementById('screen').innerHTML = resut1;
      break;
    case "igual":
      let results = eval(resut.join(''))
      document.getElementById('screen').innerHTML = results;
      while (resut.length) {
        resut.pop()
      }
      resut.push(results)
      break;
    case 'ac':
      resut.length = 0
      resut.push(0)
      document.getElementById('screen').innerHTML = resut
      break;

  }
}