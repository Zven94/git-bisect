const content = document.getElementById('content');

const slider = `
<div
id="carouselExampleControls"
class="carousel slide"
data-ride="carousel"
>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="imgs/parfait.jpg" alt="Parfait" />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Parfait</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img
      class="d-block w-100"
      src="imgs/banana_bread.jpg"
      alt="Banana Bread"
    />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Banana Bread</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img
      class="d-block w-100"
      src="imgs/beef_sauce.jpg"
      alt="Beef Sauce"
    />
    <div class="carousel-caption d-none d-md-block d-lg-block">
      <h5>Beef Sauce</h5>
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#carouselExampleControls"
  role="button"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#carouselExampleControls"
  role="button"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
`;

const aboutInfo = `
<div class="container p-2">
<div class="row mt-5">
    <h1 class="border-bottom">About</h1>
  <p class="lead">
    Hi there! Welcome to Exquisite Kitchen where I share my passion for
    cooking with the world. Cooking is meant to be fun and not boring, so,
    I would be sharing with you easy and healthy recipes you can try out.
    Hey! I’m not here to turn you to a perfect cook but to help you
    navigate the kitchen and make food everyone will love.
  </p>
  <p class="lead">
    For anyone who shares the same passion as me and would love to watch
    and learn more, do well to subscribe (so you will be the first to be
    notified when I upload a new video), share and give my videos a thumbs
    up.</a> 
  </p>
</div>
</div>
`;

const renderHome = () => {
  content.insertAdjacentHTML('beforeend', slider);
  content.insertAdjacentHTML('beforeend', aboutInfo);
};

export default renderHome;
