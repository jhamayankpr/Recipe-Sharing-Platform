
function toggleFavorite(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  
  const index = favorites.findIndex(fav => fav.id === item.id);
  
  if (index === -1) {
    
    favorites.push(item);
    alert('Added to favorites!');
  } else {
    
    favorites.splice(index, 1);
    alert('Removed from favorites!');
  }

  
  localStorage.setItem('favorites', JSON.stringify(favorites));

  
  updateFavoritesUI();
}


function updateFavoritesUI() {
  const favoritesContainer = document.getElementById('favorites-container');
  favoritesContainer.innerHTML = ''; 

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = '<p>No favorites added yet.</p>';
  } else {
    favorites.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('favorite-item');
      itemElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button onclick="toggleFavorite(${JSON.stringify(item)})">Remove from Favorites</button>
        <hr>
      `;
      favoritesContainer.appendChild(itemElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', updateFavoritesUI);
