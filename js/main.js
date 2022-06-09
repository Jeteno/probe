
var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('.intro')
	text.classList.add ('red');
	var img = document.querySelector ('.journey');
	img.style.display = 'none'
}

$ (function () {
	$(window).scroll (function() {
		$('.learn').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindown = $(window).scrollTop ();
			if (imagePos < topOfWindown+650) {
				
				$(this).addClass ('fadeInUp')
			}
		});
	});
});

$ (function () {
	$(window).scroll (function() {
		$('.questionnaire-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindown = $(window).scrollTop ();
			if (imagePos < topOfWindown+650) {
				
				$(this).addClass ('fadeInUp')
			}
		});
	});
});

$ (function () {
	$(window).scroll (function() {
		$('.form').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindown = $(window).scrollTop ();
			if (imagePos < topOfWindown+650) {
				
				$(this).addClass ('fadeInUp')
			}
		});
	});
});