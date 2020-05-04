$("#demo").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#demo_pos").offset().top,
    },
    500
  );
  return false;
});

$("#reviews").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#reviews_pos").offset().top,
    },
    500
  );
  return false;
});
