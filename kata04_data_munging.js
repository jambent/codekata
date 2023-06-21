const client = new XMLHttpRequest();
client.open('GET', 'weather.dat');
client.onload = (function(){

const txt = client.responseText;
})
client.send(null);

console.log(txt);