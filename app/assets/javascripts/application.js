// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require dropzone
//= require refile
//= require_tree .

$(document).ready(function () {
  Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element
    autoProcessQueue: false,
    parallelUploads: 25,
    paramName: "post[images_files]",
    uploadMultiple: true,
    maxFiles: 25,
    // The configuration we've talked about above

    init: function() {
      alert('init')
      var myDropzone = this;

      // First change the button to actually tell Dropzone to process the queue.
      this.element.querySelector("input[type=submit]").addEventListener("click", function(e) {
        // Make sure that the form isn't actually being sent.
        e.preventDefault();
        e.stopPropagation();
        myDropzone.processQueue();
      });
    }
  }
});
