 (function(){
       emailjs.init("zHYi8vCno_av-II6o"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID
   })();

   document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();

       emailjs.sendForm('service_4uyh4eo', 'template_8klfh08', this)
       .then(function() {
           alert('Message sent successfully!');
       }, function(error) {
           alert('Failed to send message: ' + JSON.stringify(error));
       });
   });