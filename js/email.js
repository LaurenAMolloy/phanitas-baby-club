//emailJs
export function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value.trim(),
        email: document.querySelector("#email").value.trim(),
        subject: document.querySelector("#subject").value.trim(),
        message: document.querySelector("#message").value.trim(),
    }

    emailjs.send('service_0uokcom', 'template_5ty8a7l', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          //reset form
          showModal();
          document.querySelector(".contact-form").reset();
        },

        (error) => {
          console.log('FAILED...', error);
          alert("Something went wrong. Please try again.");
        },
      );
};

function showModal() {
    //show success modal
    const modal = document.getElementById("successModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    modal.focus();

    const closeBtn = modal.querySelector("#closeModal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      });
    }

    //hide modal after 3 seconds
    setTimeout(() => {
    modal.classList.add("hidden");
    }, 3000);
}

//Handle Form Submission
export function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    sendEmail();
}