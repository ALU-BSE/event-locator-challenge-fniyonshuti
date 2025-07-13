// index.js - JavaScript for Event Locator Home Page

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const categoryFilter = document.getElementById('categoryFilter');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Store search criteria in localStorage
        localStorage.setItem('eventSearch', JSON.stringify({
            search: searchInput.value.trim(),
            date: dateFilter.value,
            category: categoryFilter.value
        }));
        // Redirect to events page
        window.location.href = 'events.html';
    });
}); 