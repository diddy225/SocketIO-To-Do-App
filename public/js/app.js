const socket = io();

document.getElementById('btn').addEventListener("click", function(e){
  const item = document.getElementById('item').value;
  e.preventDefault();
  socket.emit('send-item', {item: item});
  document.getElementById('item').value = '';
  socket.on('display-item', (data) => {
    $('#content').append(`<li><label for="item">${data.item}</label> <input type="checkbox"></li>`)
  })
})

fetch('api/todo')
.then(function(data){ return data.json()})
.then(function(data){
  data.forEach((e) => {
    $('#content').append(`<li><label for="item">${e.item}</label> <input type="checkbox"></li>`)
  });
})
.catch(function(err){
  console.log(err);
})

