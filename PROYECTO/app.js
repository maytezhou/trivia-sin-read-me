const next = document.getElementById('next');
const firstScreen = document.getElementById('login');
const options = document.getElementById('options');
options.style.display='none';
paisQuestion1.style.display = 'none';
paisQuestion2.style.display= 'none';
paisQuestion3.style.display= 'none';
techQuestion1.style.display = 'none';
techQuestion2.style.display = 'none';
techQuestion3.style.display = 'none';
ultimaPantalla.style.display='none';
lastScreen.style.display='none';
thanksScreen.style.display = 'none';
gracias.style.display ='none';
let contador=0;
let contador2=0;

next.addEventListener('click', function(){
  const userName = document.getElementById('user').value;
  alert("Bienvenid@ " + userName);
  firstScreen.style.display = 'none';
  options.style.display = 'block';
})

const paises = document.getElementById('paises');
paises.addEventListener('click', () =>{
  options.style.display = 'none';
  paisQuestion1.style.display = 'block';
})

const siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click', () =>{
  var radios = document.getElementsByName('capital1');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "dublin"){
    contador++;
  }
 }
 }
  paisQuestion1.style.display = 'none';
  paisQuestion2.style.display= 'block';
  
})

const siguiente2 = document.getElementById('siguiente2');
siguiente2.addEventListener('click', () =>{
  var radios = document.getElementsByName('capital2');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "paris"){
    contador++;
  }
 }
 }
  paisQuestion2.style.display = 'none';
  paisQuestion3.style.display= 'block';
})


 

  

const results = document.getElementById('results');
results.addEventListener('click', () =>{
  var radios = document.getElementsByName('capital3');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "lima"){
    contador++;
  }
 }
 }
  paisQuestion3.style.display = 'none';
  ultimaPantalla.style.display ='block';
  alert("Tienes " + contador + " puntos");
})

const playagain=document.getElementById('playagain');
playagain.addEventListener('click', () =>{
  firstscreen.reaload();
})

const end = document.getElementById('end');
end.addEventListener('click', () =>{
  ultimaPantalla.style.display='none';
  gracias.style.display = 'block';
})
const mujerestech = document.getElementById('mujerestech');
mujerestech.addEventListener('click', () =>{
  options.style.display ='none';
  techQuestion1.style.display = 'block';
})

const siguiente3 = document.getElementById('siguiente3');
siguiente3.addEventListener('click', () =>{
  var radios = document.getElementsByName('mujeres1');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "ada"){
    contador2++;
  }
 }
 }
  techQuestion1.style.display = 'none';
  techQuestion2.style.display= 'block';
})

const siguiente4 = document.getElementById('siguiente4');
siguiente4.addEventListener('click', () =>{
  var radios = document.getElementsByName('mujeres2');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "margaret"){
    contador2++;
  }
 }
 }
  techQuestion2.style.display = 'none';
  techQuestion3.style.display= 'block';
})

const resultados2 = document.getElementById('resultados2');
resultados2.addEventListener('click', () =>{
  var radios = document.getElementsByName('mujeres3');
  for (var i = 0; i < radios.length; i++)
{
 if (radios[i].checked)
 {
  if(radios[i].value == "seis"){
    contador2++;
  }
 }
 }
  techQuestion3.style.display = 'none';
  lastScreen.style.display ='block';
  alert("Tienes " + contador2 + " puntos");
})


const playAgain=document.getElementById('playAgain');
playAgain.addEventListener('click', () =>{
  contador2=0;
  lastScreen.style.display='none';
  options.style.display='block';
  location.reaload();
})

const salir = document.getElementById('salir');
salir.addEventListener('click', () =>{
  lastScreen.style.display = 'none';
  thanksScreen.style.display ='block';
})