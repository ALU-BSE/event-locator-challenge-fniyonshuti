// events.js - JavaScript for Event List Page

document.addEventListener('DOMContentLoaded', function () {
    const eventsContainer = document.getElementById('eventsContainer');

    // Get search criteria from localStorage
    let searchCriteria = localStorage.getItem('eventSearch');
    searchCriteria = searchCriteria ? JSON.parse(searchCriteria) : {};

    // Filter events based on criteria
    let filteredEvents = eventsData.filter(event => {
        const matchesSearch = !searchCriteria.search ||
            event.name.toLowerCase().includes(searchCriteria.search.toLowerCase()) ||
            event.location.toLowerCase().includes(searchCriteria.search.toLowerCase());
        const matchesDate = !searchCriteria.date || event.date === searchCriteria.date;
        const matchesCategory = !searchCriteria.category || event.category.toLowerCase() === searchCriteria.category.toLowerCase();
        return matchesSearch && matchesDate && matchesCategory;
    });

    // Render events
    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">No events found matching your criteria.</div></div>';
        return;
    }

    eventsContainer.innerHTML = filteredEvents.map(event => `
        <div class="col-md-6 col-lg-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text mb-1"><strong>Date:</strong> ${event.date}</p>
                    <p class="card-text mb-1"><strong>Location:</strong> ${event.location}</p>
                    <p class="card-text mb-1"><strong>Category:</strong> ${event.category}</p>
                    <p class="card-text">${event.description}</p>
                    <a href="event-details.html?id=${event.id}" class="btn btn-primary mt-auto">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}); 