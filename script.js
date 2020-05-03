$("img").click((e) => {
  let src = e.target.getAttribute("src");

  $("#modalImg").attr("src", src);
  $("#myModal").modal("show");
});
