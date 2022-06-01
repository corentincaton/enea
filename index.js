$(function () {
  $("#slider-1, #slider-2, #slider-3").slider({
    value: 30,
    min: 0,
    max: 100,
    step: 1
  });
  $("#slider-2").slider({
    value: 80,
    min: 0,
    max: 100,
    step: 1
  });
  $("#slider-3").slider({
    value: 50,
    min: 0,
    max: 100,
    step: 1
  });
});

$(function () {
  $(".selector").click(function () {
    $(".moods-authors-genders .content").removeClass("visible");
    $(".moods-authors-genders .content").eq($(this).index()).addClass("visible");
  });
});