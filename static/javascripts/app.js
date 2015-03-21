(function (win, body, $, undefined) {
	var $win = $(win);

	// backstretch it up
	$('[data-backstretch-image]').each(function(){
		var $this = $(this),
			img_src = $this.data('backstretch-image');
		if (Modernizr.backgroundsize) {
			// if background size is supported, there's a declaration in the CSS to make the images cover
			$this.css({'background-image': "url('"+img_src+"')"});
		} else {
			$this.backstretch(img_src);
			// for IE7
			$win.on('load', function () { $this.data('backstretch').resize(); });
		}
	});

	// leave space for headshot on about page
	$win.on('ready resize', function () {
		var height = $win.outerHeight() - 253;
		console.log("[height] "+height);
		$('.resume').css('margin-top',height);
	});


}(this, document.body, window.jQuery));
