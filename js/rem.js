(function(factory){
    factory();
    window.addEventListener('resize',factory,false);
}(function(){
    var width = document.documentElement.clientWidth;
    width = width > 750 ? 750 : width;
    document.documentElement.style.fontSize = width / 7.5 + 'px';
}));