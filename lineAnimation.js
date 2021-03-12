console.log("IMPORTED");
$(document).ready(function() {
  $(window).scroll(function() {

     //Registration
     var flag_reg = 0;
     if(flag_reg == 0) {
      //  if ($("#section1").css("display") !== "none") {
        if ($(window).width() > 600) {
         if($(window).scrollTop() > ($("#section1").offset().top - 300)) {
           $(".path_reg").css("animation", "draw 11s linear");
           $(".path_fast_reg").css("animation", "draw_fast 8s linear");
           $(".path_dash_reg").css("animation", "draw_dash 6s linear");
           $(".highlight_reg").css("animation", "colour 11s linear");
           flag_reg = 1;
 
           setTimeout(function() {
             $(".path_reg").css("stroke-dashoffset", "0");
             $(".path_fast_reg").css("stroke-dashoffset", "0");
             $(".path_dash_reg").css("opacity", "1");
             $(".highlight_reg").css("opacity", "1");
           },2000);
         }
       } else {
          if($(window).scrollTop() > ($("#section1-phone").offset().top - 300)) {
            $(".path_reg").css("animation", "draw 11s linear");
            $(".path_fast_reg").css("animation", "draw_fast 8s linear");
            $(".path_dash_reg").css("animation", "draw_dash 6s linear");
            $(".highlight_reg").css("animation", "colour 11s linear");
            flag_reg = 1;

            setTimeout(function() {
              $(".path_reg").css("stroke-dashoffset", "0");
              $(".path_fast_reg").css("stroke-dashoffset", "0");
              $(".path_dash_reg").css("opacity", "1");
              $(".highlight_reg").css("opacity", "1");
            },2000);
          }
       }
      }

      //mentoring
      var flag_men = 0;
      if(flag_men == 0) {
        // if ($("#section2").css("display") !== "none") {
        if ($(window).width() > 600) {
          if($(window).scrollTop() > ($("#section2").offset().top - 300)) {
              $(".path_men").css("animation", "draw 11s linear");
              $(".path_fast_men").css("animation", "draw_fast 8s linear");
              $(".path_dash_men").css("animation", "draw_dash 6s linear");
              $(".highlight_men").css("animation", "colour 11s linear");
              flag_men = 1;
  
            setTimeout(function() {
              $(".path_men").css("stroke-dashoffset", "0");
              $(".path_fast_men").css("stroke-dashoffset", "0");
              $(".path_dash_men").css("opacity", "1");
              $(".highlight_men").css("opacity", "1");
            }, 2000);
          }
        } else {
          if($(window).scrollTop() > ($("#section2-phone").offset().top - 300)) {
            $(".path_men").css("animation", "draw 11s linear");
            $(".path_fast_men").css("animation", "draw_fast 8s linear");
            $(".path_dash_men").css("animation", "draw_dash 6s linear");
            $(".highlight_men").css("animation", "colour 11s linear");
            flag_men = 1;

          setTimeout(function() {
            $(".path_men").css("stroke-dashoffset", "0");
            $(".path_fast_men").css("stroke-dashoffset", "0");
            $(".path_dash_men").css("opacity", "1");
            $(".highlight_men").css("opacity", "1");
          }, 2000);
        }
        }
      }

      //networking
      var flag_net = 0;
      if(flag_net == 0 && flag_men == 1) {
        // if ($("#section3").css("display") !== "none") {
        if ($(window).width() > 600) {
          if($(window).scrollTop() > ($("#section3").offset().top - 300)) {
            $(".path_net").css("animation", "draw 11s linear");
            $(".path_fast_net").css("animation", "draw_fast 8s linear");
            $(".path_dash_net").css("animation", "draw_dash 6s linear");
            $(".highlight_net").css("animation", "colour 11s linear");
            flag_net = 1;
  
            setTimeout(function() {
                $(".path_net").css("stroke-dashoffset", "0");
                $(".path_fast_net").css("stroke-dashoffset", "0");
                $(".path_dash_net").css("opacity", "1");
                $(".highlight_net").css("opacity", "1");
            }, 2000);
          }
        } else {
          if($(window).scrollTop() > ($("#section3-phone").offset().top - 300)) {
            $(".path_net").css("animation", "draw 11s linear");
            $(".path_fast_net").css("animation", "draw_fast 8s linear");
            $(".path_dash_net").css("animation", "draw_dash 6s linear");
            $(".highlight_net").css("animation", "colour 11s linear");
            flag_net = 1;
  
            setTimeout(function() {
                $(".path_net").css("stroke-dashoffset", "0");
                $(".path_fast_net").css("stroke-dashoffset", "0");
                $(".path_dash_net").css("opacity", "1");
                $(".highlight_net").css("opacity", "1");
            }, 2000);
          }
        }
      }

      //online mentorship program
      var flag_omp = 0;
      if(flag_omp == 0 && flag_men == 1) {
        // if ($("#section4").css("display") !== "none") {
        if ($(window).width() > 600) {
          if($(window).scrollTop() > ($("#section4").offset().top - 300)) {
            $(".path_omp").css("animation", "draw 11s linear");
            $(".path_fast_omp").css("animation", "draw_fast 8s linear");
            $(".path_slow_omp").css("animation", "draw_fast 20s linear");
            $(".path_dash_omp").css("animation", "draw_dash 6s linear");
            $(".highlight_omp").css("animation", "colour 11s linear");
            flag_omp = 1;
  
            setTimeout(function() {
                $(".path_omp").css("stroke-dashoffset", "0");
                $(".path_fast_omp").css("stroke-dashoffset", "0");
                $(".path_dash_omp").css("opacity", "1");
                $(".highlight_omp").css("opacity", "1");
            }, 2000);
          }
        } else {
          if($(window).scrollTop() > ($("#section4-phone").offset().top - 300)) {
            $(".path_omp").css("animation", "draw 11s linear");
            $(".path_fast_omp").css("animation", "draw_fast 8s linear");
            $(".path_slow_omp").css("animation", "draw_fast 20s linear");
            $(".path_dash_omp").css("animation", "draw_dash 6s linear");
            $(".highlight_omp").css("animation", "colour 11s linear");
            flag_omp = 1;
  
            setTimeout(function() {
                $(".path_omp").css("stroke-dashoffset", "0");
                $(".path_fast_omp").css("stroke-dashoffset", "0");
                $(".path_dash_omp").css("opacity", "1");
                $(".highlight_omp").css("opacity", "1");
            }, 2000);
          }
        }
      }

      //grandfinale
      var flag_gf = 0;
      if(flag_gf == 0 && flag_net == 1) {
        // if ($("#section5").css("display") !== "none") {
        if ($(window).width() > 600) {
          if($(window).scrollTop() > ($("#section5").offset().top - 300)) {
            $(".path_gf").css("animation", "draw 11s linear");
            $(".path_fast_gf").css("animation", "draw_fast 8s linear");
            $(".path_dash_gf").css("animation", "draw_dash 6s linear");
            $(".highlight_gf").css("animation", "colour 11s linear");
            flag_gf = 1;
  
            setTimeout(function() {
                $(".path_gf").css("stroke-dashoffset", "0");
                $(".path_fast_gf").css("stroke-dashoffset", "0");
                $(".path_dash_gf").css("opacity", "1");
                $(".highlight_gf").css("opacity", "1");
                console.log("new property set");
            }, 2000);
          }
        } else {
          if($(window).scrollTop() > ($("#section5-phone").offset().top - 300)) {
            $(".path_gf").css("animation", "draw 11s linear");
            $(".path_fast_gf").css("animation", "draw_fast 8s linear");
            $(".path_dash_gf").css("animation", "draw_dash 6s linear");
            $(".highlight_gf").css("animation", "colour 11s linear");
            flag_gf = 1;
  
            setTimeout(function() {
                $(".path_gf").css("stroke-dashoffset", "0");
                $(".path_fast_gf").css("stroke-dashoffset", "0");
                $(".path_dash_gf").css("opacity", "1");
                $(".highlight_gf").css("opacity", "1");
                console.log("new property set");
            }, 2000);
          }
        }
      }
  });
});
