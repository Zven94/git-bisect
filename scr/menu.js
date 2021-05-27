const content = document.getElementById('content');

const menu = `
<div class="container p-2">
<div class="row mt-5">
    <h1 class="border-bottom">Exquisite Kitchen Daily Special Menu</h1>
  <p class="lead">
    For anyone who shares the same passion as me and would love to watch
    and learn more, do well to subscribe (so you will be the first to be
    notified when I upload a new video), share and give my videos a thumbs
    up. Checkout my <a href="https://www.youtube.com/channel/UCNRhWLhBFVZFrPiC5T2xCQA/videos" target="_blank">YouTube Channel</a> 
  </p>
</div>
</div>
`;

const menuItem = `
<div class="container d-flex flex-wrap">
<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="imgs/parfait.jpg" alt="Parfait">
  <div class="card-body">
   <h5>Parfait</h5>
    <p class="card-text">₦1,500.00/Cup</p>
  </div>
</div>


<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="imgs/banana_bread.jpg" alt="Banana bread">
  <div class="card-body">
   <h5>Banana Bread</h5>
    <p class="card-text">₦1,000.00/loaf</p>
  </div>
</div>


<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="imgs/beef_sauce.jpg" alt="Beef Sauce">
  <div class="card-body">
   <h5>Beef Sauce</h5>
    <p class="card-text">₦2,500.00/plate</p>
  </div>
</div>

<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="imgs/fried_rice_asun.jpg" alt="Fried Rice">
  <div class="card-body">
   <h5>Fried Rice with Asun</h5>
    <p class="card-text">₦3,500.00/plate</p>
  </div>
</div>

</div>
`;

const renderMenu = () => {
  content.insertAdjacentHTML('beforeend', menu);
  content.insertAdjacentHTML('beforeend', menuItem);
};

export default renderMenu;
