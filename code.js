(function(){
  var imun=12;
  Cardd(imun);
   var _btn_more=document.getElementById('btn_more');
   _btn_more.onclick=()=>{ imun=imun+12;Cardd(imun);}
   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
  
})();
function card(img,p,pr)
{
  var _cardd=`<div class="col-md-3">
  <div class="card mb-3 ">
  <img src="${img}" width="100%" height="225" class="bd-placeholder-img card-img-top" preserveAspectRatio="xMidYMid slice" alt="">
    <div class="card-body">
      <p class="card-text">${p}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group justify-content-left">
        <span class="input-group-text" id="basic-addon1">${pr}</span>
          <button type="button" class="btn btn-sm border-0 btn-outline-secondary"><div class="mt-2 mr-2"><i class="fas fa-cart-plus text-black h3"></i></div></button>
        </div>
      </div>
    </div>
  </div>
</div>`;
return _cardd;
}

function Cardd(n)
{
  var _blink='./landscape-4587079_1920.jpg';
  var price='20000000đ';
  var _pr='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
  
 var _grid=document.getElementById('griplis');
 var _arr=[];
 var _lis='';
 for(var i=0;i<n;i++)
 {
   _arr.push(card(_blink,i,price));
 }
 
_arr.forEach(element => {
  _lis=_lis+element;
});
_grid.innerHTML=`${_lis}`;

}