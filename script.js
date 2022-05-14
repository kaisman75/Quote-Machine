



const Colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

async function generatQuote(){ 
  const response=await fetch("https://type.fit/api/quotes");
  const data=await response.json();
  var randomQuote=Math.floor(Math.random() * data.length); 
  document.getElementById("text").innerText= data.[randomQuote].text;
  document.getElementById("author").innerText= "author :"+data[randomQuote].author;
var getColor=Math.floor(Math.random()* Colors.length); 
document.getElementById("body").style.backgroundColor=Colors[getColor]; 
document.getElementById("text").style.color=Colors[getColor];
document.getElementById("new-quote").style.backgroundColor=Colors[getColor]; 
document.getElementById("tweet-quote").style.color=Colors[getColor];
 

}

