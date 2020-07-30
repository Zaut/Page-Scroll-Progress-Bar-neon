let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
//  Знчение настраивать в зависимости от высоты сайта
let progressHeight = (window.pageYOffset / totalHeight) * 100;
 progress.style.height = progressHeight + "%"; }