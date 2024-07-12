document.addEventListener('DOMContentLoaded', () => {
  fetch('data/recipes.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
      }
      return response.json();
    })
    .then(data => {
      const recipeList = document.getElementById('recipe-list');
      recipeList.innerHTML = data.recipes.map(recipe => `
        <div class="recipe-card">
          <h2>${recipe.title}</h2>
          <p>${recipe.description}</p>
          <a href="recipe.html?id=${recipe.id}">View Recipe</a>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
   
    });
});
