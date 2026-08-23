function sendMessage(event) {

    event.preventDefault();

    alert(
        "Your message has been sent successfully!\n\n" +
        "Society management will contact you soon."
    );

    event.target.reset();

}


/* Event Registration */

const eventButtons =
    document.querySelectorAll(".event-body .primary-btn");

eventButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert(
            "You have been registered for this event!"
        );

    });

});