(function () {
  emailjs.init("s3X7PGT03MyRV97xg");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_dp68643",
    "sxjp1k9",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
    },
    function (error) {
      alert("Failed to send message.");
      console.error(error);
    }
  );
});
