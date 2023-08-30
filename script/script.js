$(document).ready(function () {
  /*상단 메인메뉴에 마우스 올릴 때*/
  $(".mainMenu").mouseenter(function () {
    $(".submenu").stop().slideDown();
    $("header>div").stop().animate({ height: "350px" });
  });

  // 상단 메뉴영역에서 마우스를 치울 때
  $("header>div>nav").mouseleave(function () {
    $(".submenu").stop().slideUp();
    $("header>div").stop().animate({ height: "100px" });
  });

  // 상단 하위메뉴에 마우스를 대면 메인메뉴 활성화 유지
  $(".submenu a").mouseenter(function () {
    $(".mainMenu").removeClass("act");
    $(this).parent().prev().addClass("act");
  });

  // 상단 하위메뉴에서 마우스가 멀어질 때
  $(".mainMenu,.submenu").mouseleave(function () {
    $(".mainMenu").removeClass("act");
  });

  /*이미지 슬라이드*/
  setInterval(toLeft, 2500);
  function toLeft() {
    $("#sliding div")
      .stop()
      .animate({ left: "-1100px" }, 2000, function () {
        $("#sliding div").append($("#sliding img").eq(0));
        $("#sliding div").css("left", "0");
      });
  }

  /*팝업배너*/
  $("#partner>img").click(function () {
    $("#popup").fadeIn();
  });
  $("#popup>button").click(function () {
    $("#popup").fadeOut();
  });
});
