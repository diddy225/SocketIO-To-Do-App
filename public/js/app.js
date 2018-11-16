const socket = io();

const sendItem = function(event) {
  event.preventDefault();
  const item = $("#item").val();

  socket.emit("send-item", { item: item.toUpperCase() });
  $("#item").val("");
};

function getItems() {
  $("#content").empty();
  $.get("api/todo", function(data) {
    data.forEach(e => {
      if (!e.complete) {
        $("#content").append(
          `<li id="${e._id}"><label>${
            e.item
          }</label><i class="far fa-circle" data="${e.complete}"></i></li>`
        );
      } else {
        $("#content").append(
          `<li id="${e._id}"><label style="color:#bbb">${
            e.item
          }</label><i class="far fa-times-circle" data="${
            e.complete
          }"></i></li>`
        );
      }
    });
  });
}

socket.on("display-item", function(data) {
  $("#content").append(
    `<li id="${data._id}"><label>${
      data.item
    }</label><i class="far fa-circle" data="${data.complete}"></i></li>`
  );
});

$("#content").on("click", "i", function() {
  const id = $(this)
    .parent()
    .attr("id");
  let data = {
    id: id,
    complete: true
  };
  $.ajax({
    url: "api/todo",
    method: "PUT",
    data: data,
    dataType: "json"
  });
  $(this)
    .siblings("label")
  $(this).removeClass("far fa-circle");
  $(this).addClass("far fa-times-circle");
});

$("#content").on("dblclick", "i", function() {
    const id = $(this).parent().attr("id");
    $.ajax({
      url: `api/todo/${id}`,
      method: "DELETE"
    });
    getItems();
});

$("#btn").on("click", sendItem);
getItems();
