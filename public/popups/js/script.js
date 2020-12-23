$(".collapse").on("show.bs.collapse", function (e) {
  const collapseHeadId = e.target.previousElementSibling.id;

  $("#" + collapseHeadId).animate(
    {
      backgroundColor: "#d4e6f9",
    },
    1000
  );
});

$(".collapse").on("hide.bs.collapse", function (e) {
  const collapseHeadId = e.target.previousElementSibling.id;

  $("#" + collapseHeadId).animate(
    {
      backgroundColor: "#c7c8c8",
    },
    1000
  );
});
