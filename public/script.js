document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const submitForm = () => { 
    let formData = {};
     formData.first_name = $('#first_name').val(); 
    formData.last_name = $('#last_name').val(); 
    formData.email = $('#email').val();
    formData.review = $('#review').val();
     console.log("Form Data Submitted: ", formData);
     }

$(document).ready(function () {
    $("#formSubmit").click(() => {
      submitForm();
    });
  });