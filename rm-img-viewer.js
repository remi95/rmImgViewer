(function($){
	$.fn.rmImgViewer=function(options){

		var defauts={
			slideTime: 500,
			bgColor: '0, 0, 0, 0.7',
			pointerOnImg: true,
			imgBtnLeft: 'https://image.flaticon.com/icons/svg/226/226170.svg',
			imgBtnRight: 'https://image.flaticon.com/icons/svg/226/226171.svg',
			cursorExit: 'pointer',
		};

		var options = $.extend(defauts, options);

		function initImgViewer(){
			var location = $('main').length == 0 ? $('body') : $('main');

			var viewerContainer = $(document.createElement('div'));
			viewerContainer.addClass('rm-img-viewer-container');
			viewerContainer.css('background-color', 'rgba(' + options.bgColor + ')');
			if (options.cursorExit != 'pointer')
				viewerContainer.css('cursor', 'url("'+ options.cursorExit +'"), pointer');
			location.append(viewerContainer);

			var viewer = $(document.createElement('div'));
			viewer.addClass('rm-img-viewer');
			viewerContainer.append(viewer);

			var leftBtn = createButton('rm-viewer-previous', options.imgBtnLeft);
			var rightBtn = createButton('rm-viewer-next', options.imgBtnRight);
			viewerContainer.append(leftBtn);
			viewerContainer.append(rightBtn);

			return viewer;
		}

		function createButton(className, srcImg){
			var btn = $(document.createElement('div'));
			var btnImg = $(document.createElement('img'));
			btn.addClass(className);
			btnImg.attr('src', srcImg);
			btn.append(btnImg);
			return btn;
		}

		function initImgViews(self, viewer){
			self.children('img').each(function(){
				var imgContainer = $(document.createElement('div'));
				imgContainer.addClass('rm-img-view-container');
				imgContainer.width($(window).width());
				viewer.append(imgContainer);

				var img = $(document.createElement('img'));
				img.addClass('rm-img-view');
				img.attr('src', $(this).attr('src'));
				adaptImgSize(img, $(this));
				imgContainer.append(img); 
			});
			var nbImg = viewer.children().length;
			viewer.width(nbImg*100 + "%");
		}

		function adaptImgSize(img, reference){ 
			var reference = reference || img;
			var windowRatio = ($(window).width()) / ($(window).height());
			var imgRatio = (reference.width()) / (reference.height()); 
			if (imgRatio >= windowRatio)
				img.width('85%').height('auto');
			else if (imgRatio < windowRatio)
				img.height('90%').width('auto');
		}

		function launchViewer(self, viewer, img){
			index = self.children('img').index(img); 
			$('.rm-img-viewer-container').show();
			showImgView(viewer, index); 
		}

		function showImgView(viewer, index){
			viewer.css('left', "-" + index*100 + "%");
			toggleArrowViewer();
		}

		function slideViewer(operator){ 
			$('.rm-img-viewer').animate({
				left: operator + '100%'
			}, options.slideTime, function(){
				toggleArrowViewer();
			});
		}

		function toggleArrowViewer(){
			var last = ($('.rm-img-viewer').children().length -1) * 100;
			var currentPercent = $('.rm-img-viewer')[0].style.left;
			var currentPos = parseInt(currentPercent.slice(0, -1));
			if (Math.abs(currentPos - 0) < 10)
				$('.rm-viewer-previous').hide();
			else
				$('.rm-viewer-previous').show();
			if (Math.abs(currentPos + last) < 10)
				$('.rm-viewer-next').hide();
			else
				$('.rm-viewer-next').show();
		}

		function closeImgViewer(){
 			$('.rm-img-viewer-container').hide();
		}

		function adaptOnResize(){
			$('.rm-img-view-container').each(function(){
				$(this).width($(window).width());
			});
			$('.rm-img-view').each(function(){
				adaptImgSize($(this));
			});
		}

		return this.each(function(){

			var self = $(this); 
			var viewer = initImgViewer();
			initImgViews(self, viewer);

			if (options.pointerOnImg)
				self.children('img').css('cursor', 'pointer');

    		self.children('img').click(function(){ launchViewer(self, viewer, $(this)); });
			$('.rm-viewer-previous').click(function(){ slideViewer('+='); });
			$('.rm-viewer-next').click(function(){ slideViewer('-='); });
			$('.rm-img-view-container').click(function(){ closeImgViewer(); });
			$(window).resize(function(){ adaptOnResize(); });
		});
	};
})(jQuery);