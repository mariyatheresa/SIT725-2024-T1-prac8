document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  const socket = io("http://localhost:2008");

  socket.on('number', (msg) => {
    console.log('Random Number: ' + msg);
  });
});

const getcards = () => {
  $.get('/api/food', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  })
};



$(document).ready(() => {

  $.get('/api/reviews', (reviews) => {
    const reviewsContainer = $('#reviews-container');


    reviews.forEach((review) => {
      const cardHtml = `
          <div class="col s12 m4">
          <div class="card">
              <div class="card-image">
                  <img src="${review.imageURL}" alt="reviews">
                  <span class="card-title">${review.foodName}</span>
              </div>
              <div class="card-content">
                  <p>${review.review}</p>
              </div>
          </div>
      </div>
          `;

      reviewsContainer.append(cardHtml);
    });
  });
});

