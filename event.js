document.getElementById('search-bar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const eventTabs = document.querySelectorAll('.event-tab');
  
    eventTabs.forEach(tab => {
      const title = tab.getAttribute('data-title').toLowerCase();
      tab.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
  });
  