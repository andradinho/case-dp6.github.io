var contactUs = document.querySelector('.menu-lista-contato');
var pdfDownload = document.querySelector('.menu-lista-download');
var cardButton = document.querySelectorAll('.card-montadoras');
var contactForm = document.querySelectorAll('form ul li input');

contactUs.addEventListener('mousedown',function(event){
    ga('send', {
        hitType:'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});
pdfDownload.addEventListener('mousedown',function(event){ 
    ga('send', {
        hitType:'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});
cardButton.forEach(function(item){
    item.addEventListener('mousedown',function(){
        ga('send', {
            hitType:'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: this.querySelector('.card-title').innerText
        });
    });
});
contactForm.forEach(function(item){
    item.addEventListener('change',function(){
        ga('send',{
            hitType:'event',
            eventCategory: 'contato',
            eventAction: this.id,
            eventLabel: 'preencheu'
        });
    });
});
if (document.location.hash == "#contato") {
    document
      .querySelector('button[type="submit"]')
      .addEventListener("click", function () {
        var observeModal = setInterval(function () {
          var modal = document.querySelector(".lightbox-open");
  
          if (modal) {
              ga('send',{
                  hitType: 'event',
                  eventCategory: 'contato',
                  eventAction: 'enviado',
                  eventLabel: 'enviado'
              } )
            clearInterval(observeModal);
          }
        }, 50);
      });
  }