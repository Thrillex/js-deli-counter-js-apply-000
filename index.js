function takeANumber(deliLine,name){
var count = deliLine.length+1;

  deliLine.push(name);
  return (`Welcome, ${name}. You are number ${count} in line.`);
}

function nowServing(deliLine){
  var first = deliLine[0];
  if (deliLine.length == 0){
    return "There is nobody waiting to be served!";
    }else {
    return `Currently serving ${first}.`;}
    deliLine.shift();

}

function currentLine(deliLine){
    if (deliLine.length == 0){
  return("The line is currently empty.")
} else {
  var list = `The line is currently:`
  deliLine.forEach(function(item,index,array){
    var entry = ` ${index}. ${item},`;
    list = list.concat(entry);
    
} 
} return list;



}
