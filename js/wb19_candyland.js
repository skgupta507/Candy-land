$(document).ready(function()
{
   $("a[href*='#welcomeLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_welcomeLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#aboutLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_aboutLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#aboutLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_aboutLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#servicesLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#faqLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_faqLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#servicesLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#contactLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contactLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#contactLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contactLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#contactLayoutGrid3']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contactLayoutGrid3').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#locationsLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_locationsLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#galleryLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_galleryLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#faqLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_faqLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("#faqAccordion").accordion(
   {
      event: 'click',
      animate: 'linear',
      icons: null,
      collapsible: true,
      header: 'h4',
      heightStyle: 'content'
   });
   $("a[href*='#locationsLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_locationsLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#galleryLayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_galleryLayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
   });
   var slidergallerySlideShow = $('#gallerySlideShow-gallery').lightSlider(
   {
      controls: false,
      gallery: true,
      item: 1,
      loop: true,
      thumbItem: 3,
      thumbMargin: 30,
      galleryMargin: 30,
      pause: 3000,
      auto: true
});
});
