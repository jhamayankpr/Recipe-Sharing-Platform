document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get('id');

  fetch('data/recipes.json')
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipes.find(r => r.id === parseInt(recipeId));
      if (recipe) {
        document.getElementById('recipe-details').innerHTML = `
          <h1>${recipe.title}</h1>
          <p>${recipe.description}</p>
        `;
      }
    });

  document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML += `
      <div class="review-card">
        <p>${reviewText}</p>
      </div>
    `;
    document.getElementById('review-form').reset();
  });
});
