document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});



const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 450,
});

const paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);


const gambar = document.querySelectorAll('.materialboxed');
M.Materialbox.init(gambar);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
})

