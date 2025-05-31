function filterCategory(category) {
  const listings = document.querySelectorAll('.listing');
  listings.forEach(listing => {
    if (category === 'all' || listing.dataset.category === category) {
      listing.style.display = 'block';
    } else {
      listing.style.display = 'none';
    }
  });
}