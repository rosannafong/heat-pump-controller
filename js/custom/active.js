$(function(){
 var url = window.location.href;
 var page = url.substr(url.lastIndexOf('/')+1);
 $('.top-bar-section a[href*="'+page+'"]').closest('li').addClass('active');
});