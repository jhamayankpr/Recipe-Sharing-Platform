
document.getElementById('review-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  
  if (!rating || !comment) {
    alert('Please enter both rating and comment.');
    return;
  }

  try {
    
    const response = await fetch('https://mockapi.io/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, comment }),
    });

    if (!response.ok) {
      throw new Error('Failed to add review. Please try again later.');
    }

    const newReview = await response.json();

    
    displayReview(newReview);

    
    document.getElementById('rating').value = '';
    document.getElementById('comment').value = '';

    alert('Review added successfully!');
  } catch (error) {
    console.error('Error adding review:', error);
    alert('Failed to add review. Please try again later.');
  }
});


function displayReview(review) {
  const reviewsContainer = document.getElementById('reviews-container');
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <p>Rating: ${review.rating}</p>
    <p>Comment: ${review.comment}</p>
    <p>Posted by: ${review.user}</p>
    <hr>
  `;
  reviewsContainer.appendChild(reviewElement);
}


async function fetchReviews() {
  try {
    const response = await fetch('https://mockapi.io/api/reviews');
    if (!response.ok) {
      throw new Error('Failed to fetch reviews.');
    }
    const reviews = await response.json();
    
    reviews.forEach(review => displayReview(review));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    alert('Failed to fetch reviews. Please try again later.');
  }
}


document.addEventListener('DOMContentLoaded', fetchReviews);
