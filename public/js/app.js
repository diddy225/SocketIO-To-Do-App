const socket = io();


const sendItem = function(event) {
  event.preventDefault();
  const item = $("#item").val();

  socket.emit("send-item", { item: item });
  $("#item").val("");

};


const getItems = function(){
  $('#content').empty();
  $.ajax({
    url: "api/todo",
    method: "GET",
    dataType: "json"
  })
    .then(function(data) {
      data.forEach(ele => {
        $("#content").append(`<li><label>${ele.item}</label><input type="checkbox"></li>`);
      });
    })
    .catch(function(err) {
      console.log(err);
    });

    socket.on('display-item', (data) => {
      console.log(data);
      $("#content").append(`<li><label>${data.item}</label><input type="checkbox"></li>`);
    })
}

  $('#btn').on('click', sendItem);
  getItems();