$(function() {

    // $("#contactForm input,select,textarea").not("[type=submit]").jqBootstrapValidation({
    //     submitError: function($form, event, errors) {
    //         // additional error messages or events
    //          // Fail message
    //          $('#success').html("<div class='alert alert-danger'>");
    //          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //              .append("</button>");
    //          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
    //          $('#success > .alert-danger').append('</div>');
    //          //clear all fields
    //          $('#contactForm').trigger("reset");
    //     },
    //     submitSuccess: function($form, event) {
    //         event.preventDefault(); // prevent default submit behaviour

    //         var $form = $('#contactForm');
    //         $.post($form.attr("action"), $form.serialize()).then(function() {
    //         });
    //         // Success message
    //         $('#success').html("<div class='alert alert-success'>");
    //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //             .append("</button>");
    //         $('#success > .alert-success')
    //             .append("<strong>Your message has been sent. </strong>");
    //         $('#success > .alert-success')
    //             .append('</div>');

    //         //clear all fields
    //         $('#contactForm').trigger("reset");
    //     },
    //     filter: function() {
    //         return $(this).is(":visible");
    //     },
    // });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
