// $(function () { $('[data-toggle="tooltip"]').tooltip(); });
// $(function () { $('[data-toggle="popover"]').popover(); });
// $(function () { $('[data-toggle="modal"]').modal(); });

$(document).ready(function() {
    $('#chooseAccountType').modal();
    $('#billingTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});

$('#createAccoundModalTrigger').click(function(e) {
    $('#loginModal').modal('hide');
    $('#signupModal').modal('show');
    e.stopPropagation();
});

$('#forgotPasswordModalTrigger').click(function(e) {
    $('#loginModal').modal('hide');
    $('#forgotPasswordModal').modal('show');
    e.stopPropagation();
});

$('#loginModalTrigger').click(function(e) {
    $('#forgotPasswordModal').modal('hide');
    $('#loginModal').modal('show');
    e.stopPropagation();
});

$('#editSocialMediaTrigger').click(function(e) {
    $('#editAgentInfo').modal('hide');
    $('#editSocialMedia').modal('show');
    e.stopPropagation();
});

