//Document OnReady
$(document).ready(function() {

	//Detect Safari browser ---------------------------------------------------------------
	$(function(){
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 &&  navigator.userAgent.indexOf('Android') == -1)
		{
			$('body').addClass('safari');
		}
		if(navigator.userAgent.indexOf('Mac')>1)
		{
			$('body').addClass('mac');
		}
	});


	//Scroll to page blocks ------------------------------------------------------------
	$('.goto').click( function(){ // ловим клик по ссылке с классом goto
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

	$('.goto').on('click', function () {
		$('.navbar-collapse').removeClass('in');
		$a = $($(this).attr('href'));
		$('html,body').animate({ scrollTop: $a.offset().top - 40}, 500);
		return false;
	});


	//Owl carousel --------------------------------------------------------------------
	$('#face-slider').owlCarousel({
		loop: false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: { items: 1, nav: true },
			561: { items: 2, nav: true },
			769: { items: 2, nav: true },
			992: { items: 3, nav: true },
			1130: { items: 4, nav: true }
		}
	});

	$('#plus-slider').owlCarousel({
		loop: false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: { items: 1, nav: true },
			641: { items: 2, nav: true },
			992: { items: 3, nav: true }
		}
	});

	$('#docs-slider').owlCarousel({
		loop: false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: { items: 1, nav: true },
			501: { items: 2, nav: true },
			768: { items: 3, nav: true },
			1171: { items: 4, nav: true }
		}
	});


	//Fancybox settings	-----------------------------------------------------------------------
	$("a[rel=face-group], a[rel=plus-group], a[rel=docs-group]").fancybox({
		'transitionIn': 'none',
		'transitionOut': 'none',
		'titlePosition': 'over',
		'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});


	//Заявки на конкретную квартиру ------------------------------------------------------------
	$(function() {
		$('.lm-tab .item').each(function(index, el) {
			$('.order-flat', el).click(function() {
				//вертикально-ориентированная картинка
				if ( $('.pict', el).hasClass('vert') ) {
					$('#flat-pict').addClass('vert');
				}
				else {
					$('#flat-pict').removeClass('vert');
				}

				//проход по элементам
				var flattype = $('.hh', el).text(),
				flatpict = $('.pict img', el).attr('src'),
				flatprice = $('.price', el).text(),
				res1 = [flatpict];
				res2 = [flattype];
				res3 = [flatprice];
				$('#flat-pict').attr('src', res1);
				$('#flat-type').val(res2);
				$('#flat-price').val(res3);
			})
		});
	});


});


// Top Menu scroll & fix header ------------------------------------------------------------
$(document).ready(function(){
	/* функция кроссбраузерного определения отступа от верха документа к текущей позиции скроллера прокрутки */
	function getScrollTop() {
		var scrOfY = 0;
		if( typeof( window.pageYOffset ) == "number" ) {
			//Netscape compliant
			scrOfY = window.pageYOffset;
		} else if( document.body
		&& ( document.body.scrollLeft
		|| document.body.scrollTop ) ) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
		} else if( document.documentElement
		&& ( document.documentElement.scrollLeft
		|| document.documentElement.scrollTop ) ) {
			//IE6 Strict
			scrOfY = document.documentElement.scrollTop;
		}
		return scrOfY;
	}

	jQuery(window).scroll(function() {
		fixPaneRefresh();
	});

	function fixPaneRefresh(){
		if (jQuery('.navbar').length) {
			var top  = getScrollTop();
			if (top > 500) jQuery('.navbar').addClass('navsmall');
			else jQuery('.navbar').removeClass('navsmall');

			if ( $('.navbar').hasClass('navsmall') ) {
				$('.header').addClass('fix');
			}
			else { $('.header').removeClass('fix'); }
		}
	}

});


//Yandex Map ------------------------------------------------------------
$(document).ready(function(){
	//Yandex Map на главной
	var myMap;
	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с заданным id ("map").
		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать её центр и коэффициент масштабирования.
			center:[56.832356, 60.674283], // Координаты для центра карты
			zoom:15
		});

		// Создание экземпляра элемента управления
		myMap.controls.add( new ymaps.control.ZoomControl()	);
		myMap.controls.add('typeSelector');

		// 1
		var myGeoObject = new ymaps.GeoObject({
			// Описываем геометрию типа "Точка".
			geometry: {
				type: 'Point',
				coordinates: [56.832356, 60.674283]
			},
			// Описываем данные геообъекта.
			properties: {
				iconContent: '&laquo;Сказка&raquo;',
				//hintContent: '<b>Офис продаж</b><br>',
				balloonContentHeader: '&laquo;Сказка&raquo;',
				
			}
		}, {
			//Задаем пресет метки с точкой с содержимым.
			preset: 'twirl#brownStretchyIcon',

			//Отключаем возможность перетаскивания.
			draggable: false,

			// Отключаем задержку закрытия всплывающей подсказки.
			hintHideTimeout: 0
		});

		// Добавляем геообъекты на карту.
		myMap.geoObjects.add(myGeoObject);
	}
});
