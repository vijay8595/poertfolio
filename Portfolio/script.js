function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const senderName = document.querySelector("#contactName").value; 
    const senderEmail = document.querySelector("#email").value;
    const recipient = "vijaydas813086@gmail.com";
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    
    const requestData = {senderName, senderEmail, recipient, subject, message};

    fetch("http://localhost:8080/v1/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {

        console.log("Response:", data); ///////////////////////

        document.getElementById("responseMessage").innerText = data.message;
        if (data.message === "Email Sent Successfully!") {
            document.getElementById("contactForm").reset();
        }
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Error sending email.";
        console.error("Error:", error);
    });
});

