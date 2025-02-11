const SERVICE_ID = "service_z455hyv";
const PUBLIC_ID = "PmaHLHkm5f10t3ag9";
const TEMPLATE_ID = "template_tlhhxd5";

function sendEmail(name, email, message, subject) {
  $("#sendMessageBtn").html("Sending..");

  const templateParams = {
    from_name: name,
    from_email: email,
    from_message: message,
    subject: subject,
  };

  emailjs
    .send(
      SERVICE_ID, // PUBLIC_ID from GitHub Secrets
      TEMPLATE_ID, // SERVICE_ID from GitHub Secrets
      templateParams
    )
    .then(
      function (response) {
        $("#sendMessageBtn").html("Sent!");
      },
      function (error) {
        alert("Failed to send email. Error: " + error);
      }
    );
}

function handleSubmit() {
  $("#sendMessageBtn").on("click", function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    const subject = $("#subject").val();
    if (name == "") {
      alert("Please enter your name");
      return;
    }
    if (email == "") {
      alert("Please enter your email");
      return;
    }
    if (message == "") {
      alert("Please enter the message");
      return;
    }
    if (subject == "") {
      alert("Please enter the subject");
      return;
    }

    sendEmail(name, email, message, subject);
  });
}

$(() => {
  emailjs.init({
    publicKey: PUBLIC_ID,
  });
  handleSubmit();
});
