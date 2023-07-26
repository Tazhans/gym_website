$(document).ready(function() {

    let offset = {offset: "100%"}

    $(function() {
        $(document).scroll(function() {
          var $nav = $("#mainNavbar");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        })
      });

      $(".man_working_out_animation").waypoint(function() {
        $(".man_working_out_animation").addClass("animate__animated animate__fadeInLeft");
      }, 
        offset
      );

    // Classes Section
      $(".class_image").waypoint(function() {
        $(".class_image").addClass("animate__animated animate__slideInUp");
      }, 
        offset
      );

      $(".class_image_2").waypoint(function() {
        $(".class_image_2").addClass("animate__animated animate__slideInUp");
      }, 
        offset
      );

      $(".class_image_3").waypoint(function() {
        $(".class_image_3").addClass("animate__animated animate__slideInUp");
      }, 
        offset
      );

      // End Classes Section

      // Team Members Section

      $(".team_members").waypoint(function() {
        $(".team_members").addClass("animate__animated animate__zoomInRight animate__slow");
      }, 
        offset
      );

      $(".team_members_2").waypoint(function() {
        $(".team_members_2").addClass("animate__animated animate__zoomInUp animate__slow");
      }, 
        offset
      );

      $(".team_members_3").waypoint(function() {
        $(".team_members_3").addClass("animate__animated animate__zoomInLeft animate__slow");
      }, 
        offset
      );

      // End Team Members Section

      // Gallery Section

      $(".gallery").waypoint(function() {
        $(".gallery").addClass("animate__animated animate__slideInLeft animate__delay__2");
      }, 
        {offset: "80%"}
      );

      $(".gallery_2").waypoint(function() {
        $(".gallery_2").addClass("animate__animated animate__slideInUp");
      }, 
        offset
      );

      $(".gallery_3").waypoint(function() {
        $(".gallery_3").addClass("animate__animated animate__slideInRight");
      }, 
        offset
      );

      $(".gallery_4").waypoint(function() {
        $(".gallery_4").addClass("animate__animated animate__slideInLeft");
      }, 
        offset
      );

      $(".gallery_5").waypoint(function() {
        $(".gallery_5").addClass("animate__animated animate__slideInUp");
      }, 
        offset
      );

      $(".gallery_6").waypoint(function() {
        $(".gallery_6").addClass("animate__animated animate__slideInRight");
      }, 
        offset
      );

      // End Gallery Section

      // Contact Us Section

      $(".contact_us_section").waypoint(function() {
        $(".contact_us_section").addClass("animate__animated animate__zoomInUp animate__slow")
      },
      offset
      );

      // End Contact Us Section

});

