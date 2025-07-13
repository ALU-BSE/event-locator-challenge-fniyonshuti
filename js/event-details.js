// event-details.js - JavaScript for Event Details Page

document.addEventListener('DOMContentLoaded', function () {
    const eventDetails = document.getElementById('eventDetails');

    // Helper to get query param
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const eventId = getQueryParam('id');
    const event = eventsData.find(e => e.id === Number(eventId));

    if (!event) {
        eventDetails.innerHTML = '<div class="alert alert-danger text-center">Event not found.</div>';
        return;
    }

    eventDetails.innerHTML = `
        <div class="row">
            <div class="col-md-5">
                <img src="${event.image}" class="img-fluid rounded mb-3" alt="${event.name}">
            </div>
            <div class="col-md-7">
                <h2>${event.name}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p>${event.description}</p>
            </div>
        </div>
    `;
}); 