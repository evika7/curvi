const contactForm = document.getElementById("contact-form");

if (!contactForm) {
    console.error("Form element with id 'contact-form' not found.");
} else {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        // url thanks
        window.location.href = "/thanks.html";
    })
    .catch((e) => alert("Error occured: " + e.message));
});
}