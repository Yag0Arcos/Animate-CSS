$(document).ready(function() {
  $('#submit').click(function() {
    var efflexClient = "name=" + $('#name').val() + "&email=" + $('#email').val() + "&phone=" + $('#phone').val() + "&message=" + $('#message').val();
    $('#name').removeClass('missing');
    $('#email').removeClass('missing');
    $('#phone').removeClass('missing');
    $('#message').removeClass('missing');
    if ($('#name').val().length > 0) {
      if ($('#email').val().length > 0) {
        if ($('#phone').val().length > 0) {
          if ($('#message').val().length > 0) {
            $("#formEfflex").addClass("hide-element");
            $("#formEfflexLoading").removeClass("hide-element");
            setTimeout(function() {
              sendComments(efflexClient);
            }, 1000);
          } else {
            $('#message').addClass('missing');
          }
        } else {
          $('#phone').addClass('missing');
        }
      } else {
        $('#email').addClass('missing');
      }
    } else {
      $('#name').addClass('missing');
    }
    return false;
  });

  function sendComments(data) {
    $.ajax({
      type: "POST",
      url: 'assets/mail/mail.php',
      data: data,
      async: false,
      success: function(data) {
        $("#formEfflexLoading").addClass("hide-element");
        if (data > 0) {
          $("#formEfflexSuccess").removeClass("hide-element");
        } else {
          $("#formEfflexError").removeClass("hide-element");
        }
      },
      error: function(data) {
        $("#formEfflexLoading").addClass("hide-element");
        $("#formEfflexError").removeClass("hide-element");
      }
    });
  }

  //animation start

  setTimeout(function() {
    $('#efflex').animate({
      opacity: 1
    }, 1100);
    $("#svg-container").fadeOut(800, function() {
      $(this).remove();
    });
  }, 5000);



  var time = 5000;

     //desktop animation
     if ($('.logo-container').css('width') === '900px') {
         setTimeout(function() {
             $('.circle-1').animate({
                 top: '55px',
                 left: '189px',
                 opacity: 1
             }, 750);
         }, time + 1000);
  
         setTimeout(function() {
             $('.circle-2').animate({
                 top: '5px',
                 left: '375px',
                 opacity: 1
             }, 750);
         }, time + 1300);
         setTimeout(function() {
             $('.circle-3').animate({
                 top: '55px',
                 left: '560px',
                 opacity: 1
             }, 750);
         }, time + 1600);
         setTimeout(function() {
             $('.circle-4').animate({
                 top: '190px',
                 left: '695px',
                 opacity: 1
             }, 750);
         }, time + 1900);
         setTimeout(function() {
             $('.circle-5').animate({
                 top: '376px',
                 left: '745px',
                 opacity: 1
             }, 750);
         }, time + 2200);
         setTimeout(function() {
             $('.circle-6').animate({
                 top: '561px',
                 left: '695px',
                 opacity: 1
             }, 750);
         }, time + 2500);
         setTimeout(function() {
             $('.circle-7').animate({
                 top: '696px',
                 left: '560px',
                 opacity: 1
             }, 750);
         }, time + 2800);
         setTimeout(function() {
             $('.circle-8').animate({
                 top: '746px',
                 left: '375px',
                 opacity: 1
             }, 750);
         }, time + 3100);
         setTimeout(function() {
             $('.circle-9').animate({
                 top: '696px',
                 left: '189px',
                 opacity: 1
             }, 750);
         }, time + 3400);
         setTimeout(function() {
             $('.circle-10').animate({
                 top: '561px',
                 left: '54px',
                 opacity: 1
             }, 750);
         }, time + 3700);
         setTimeout(function() {
             $('.circle-11').animate({
                 top: '376px',
                 left: '4px',
                 opacity: 1
             }, 750);
         }, time + 4000);
         setTimeout(function() {
             $('.circle-12').animate({
                 top: '190px',
                 left: '54px',
                 opacity: 1
             }, 750);
         }, time + 4300);
     }
  //
  //
  //    //ipad amintaion
  //    if ($('.logo-container').css('width') === '433px') {
  //        setTimeout(function() {
  //            $('.circle-1').animate({
  //                top: '25px',
  //                left: '90px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1000);
  //
  //        setTimeout(function() {
  //            $('.circle-2').animate({
  //                top: '1px',
  //                left: '180px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1300);
  //        setTimeout(function() {
  //            $('.circle-3').animate({
  //                top: '25px',
  //                left: '270px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1600);
  //        setTimeout(function() {
  //            $('.circle-4').animate({
  //                top: '91px',
  //                left: '335px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1900);
  //        setTimeout(function() {
  //            $('.circle-5').animate({
  //                top: '181px',
  //                left: '359px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2200);
  //        setTimeout(function() {
  //            $('.circle-6').animate({
  //                top: '270px',
  //                left: '335px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2500);
  //        setTimeout(function() {
  //            $('.circle-7').animate({
  //                top: '336px',
  //                left: '270px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2800);
  //        setTimeout(function() {
  //            $('.circle-8').animate({
  //                top: '360px',
  //                left: '180px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3100);
  //        setTimeout(function() {
  //            $('.circle-9').animate({
  //                top: '336px',
  //                left: '90px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3400);
  //        setTimeout(function() {
  //            $('.circle-10').animate({
  //                top: '270px',
  //                left: '25px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3700);
  //        setTimeout(function() {
  //            $('.circle-11').animate({
  //                top: '181px',
  //                left: '1px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 4000);
  //        setTimeout(function() {
  //            $('.circle-12').animate({
  //                top: '91px',
  //                left: '25px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 4300);
  //    }
  //
  //
  //    //iPhone animation
  //    if ($('.logo-container').css('width') === '375px') {
  //        setTimeout(function() {
  //            $('.circle-1').animate({
  //                top: '2px',
  //                left: '60px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1000);
  //
  //        setTimeout(function() {
  //            $('.circle-2').animate({
  //                top: '2px',
  //                left: '150px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1300);
  //        setTimeout(function() {
  //            $('.circle-3').animate({
  //                top: '2px',
  //                left: '239px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1600);
  //        setTimeout(function() {
  //            $('.circle-4').animate({
  //                top: '91px',
  //                left: '60px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 1900);
  //        setTimeout(function() {
  //            $('.circle-5').animate({
  //                top: '91px',
  //                left: '150px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2200);
  //        setTimeout(function() {
  //            $('.circle-6').animate({
  //                top: '91px',
  //                left: '239px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2500);
  //        setTimeout(function() {
  //            $('.circle-7').animate({
  //                top: '236px',
  //                left: '60px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 2800);
  //        setTimeout(function() {
  //            $('.circle-8').animate({
  //                top: '236px',
  //                left: '150px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3100);
  //        setTimeout(function() {
  //            $('.circle-9').animate({
  //                top: '236px',
  //                left: '239px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3400);
  //        setTimeout(function() {
  //            $('.circle-10').animate({
  //                top: '325px',
  //                left: '60px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 3700);
  //        setTimeout(function() {
  //            $('.circle-11').animate({
  //                top: '325px',
  //                left: '150px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 4000);
  //        setTimeout(function() {
  //            $('.circle-12').animate({
  //                top: '325px',
  //                left: '239px',
  //                opacity: 1
  //            }, 750);
  //        }, time + 4300);
  //    }
  //
  //    //animation end

});
