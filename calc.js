
//kaivitub siis kui terve dokument laetud

window.onload = function(){
  //console.log('laetud');
  // saan katte input valjad

  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');


//console.log('cm');
  //lisan nuppudele kuularid
  document.getElementById('to_inch').addEventListener('click',convertToInch);
  document.getElementById('to_inch').addEventListener('click',function(){

  cm.value = inch.value * 2.54;

  });


};


function convertToInch(){

  // arvutan umber tolllideks ja lisan vaartuse tollid lahtrisse
  inch.value = cm.value/2.54;

}
