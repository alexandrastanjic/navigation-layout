// $ (function() {
// 	const topMenu = $('.top-menu-wrapper');
// 	const orderDetails = $ ('#orderDetails');
// 	const orderDetailsContainer = $ ('.order-details-container');
// 	const menuItems = $ ('.menu-item');
// 	const logoImg = $ ('#change-img');

// 	for (let i = 0; i < menuItems.length; i++) {
// 		const menuItem = menuItems[i];

// 		menuItem.addEventListener('click', function() {
// 			for (let j = 0; j < menuItems.length; j++) {
// 				if (menuItems[j].classList.contains('selected')) {
// 					menuItems[j].classList.remove('selected');
// 				} else {
// 					continue;
// 				}
// 			}
// 			menuItem.classList.add('selected');

// 			// if (menuItem.classList.contains('selected') && menuItem.dataset.content !== 'orders-container') {
// 			// 	topMenu[0].classList.remove('hidden');
// 			// } else {
// 			// 	topMenu[0].classList.add('hidden');
// 			// }

// 			if (menuItem.classList.contains('selected') && menuItem.dataset.content !== 'orders-container') {
// 				topMenu[0].classList.remove('hidden');
// 			} else {
// 				topMenu[0].classList.add('hidden');
// 			}

// 			switch (menuItems[i].dataset.content) {
// 				case 'orders-container': logoImg.attr('src', 'assets/logo-vip.png');
// 				break;
// 				case 'reward-container': logoImg.attr('src', 'assets/logo-gold.png');
// 				break;
// 				case 'account-container': logoImg.attr('src', 'assets/logo-elite.png');
// 				break;
// 				case 'payment-container': logoImg.attr('src', 'assets/logo-member.png');
// 				break;
// 			}

// 			const dataContent = menuItem.dataset.content;
// 			console.log(dataContent);
// 			const contentElements = document.getElementsByClassName('content');
// 			for (let k = 0; k < contentElements.length; k++) {
// 				if (contentElements[k].classList.contains('hidden')) {
// 					continue;
// 				} else {
// 					contentElements[k].classList.add('hidden');
// 				}
// 			}
// 			document.getElementsByClassName(dataContent)[0].classList.remove('hidden');
// 		});

	
// 	}
//   //  orderDetails.addEventListener('click', function() {
// 	// 	orderDetailsContainer[0].classList.remove('hidden');
// 	// 	orderDetailsContainer[0].classList.add('on-top');
// 	// 	topMenu[0].classList.remove('hidden');
// 	// });

// });



// $(function() {
// 	const topMenu = $('.top-menu-wrapper');
// 	const orderDetails = $('#orderDetails');
// 	const orderDetailsContainer = $('.order-details-container');
// 	const menuItems = $('.menu-item');
// 	const logoImg = $('#change-img');

// 	// // odata ce ai folosit deja selectorul jQuery mai sus, nu este necesar sa il folosesti si aici, menuItems e suficient
// 	// menuItems.click(function() {
// 	// 	//poti sa faci putin mai simplu in functie de ce am vazut data trecuta
// 	// 	menuItems.each(function() {
// 	// 		if ($(this).hasClass('selected')) {
// 	// 			$(this).removeClass('selected');
// 	// 		}
// 	// 	});
// 	// 	$(this).addClass('selected');

// 		//nu ai nimic cu clasa content in cod, nu sunt convinsa ca asta ai vrut sa selectezi aici
// 		const contentElements = $('.content');
// 		const dataContent = menuItems.data($(contentElements));

// 		//asta s-ar putea sa fie de ce ai nevoie aici ca si alternativa la dataset din js
// 		$(this).data('content');

// 		// tu aici mergi pe selectia elementelor cu o clasa content, care, repet nu exista la tine in cod. iti sugerez sa pornesti de la versiunea JS, nu sa repari ca risti sa vezi aceeasi logica si sa nu iti dai seama unde e gresit
// 		$(contentElements).each(function() {
// 			if ($(this).hasClass('hidden')) {
// 				return;
// 			} else {
// 				$(this).addClass('hidden');
// 			}
// 			$(dataContent).removeClass('hidden');
// 		});

// 		$(menuItems).each(function() {

// 			if ($(this).hasClass('selected') && $(this).data(contentElements) !== 'orders-container') {
// 				$(topMenu).removeClass('hidden');
// 			} else {
// 				$(topMenu).addClass('hidden');
// 			}
// 		});
// 	});

// 	// nu ai nevoie de dublu selector aici, am corectat putin mai sus, aici te las pe tine sa te ocupi
// 	$(orderDetails).on('click', function() {
// 		$(orderDetailsContainer).removeClass('hidden');
// 		$(orderDetailsContainer).addClass('on-top');
// 		$(topMenu).removeClass('hidden');
// 	});
// });





$(function() {
	const topMenu = $('.top-menu-wrapper');
	const orderDetails = $('#orderDetails');
	const orderDetailsContainer = $('.order-details-container');
	const menuItems = $('.menu-item');
	const logoImg = $('#change-img');
	const contentElements = $('.content');

	menuItems.click(function() {
		const dataContent = $(this).data('content');
		contentElements.addClass('hidden');

		contentElements.each(function(index, item) {
			if($(item).hasClass(dataContent)) {
				$(item).removeClass('hidden');
			} 
		});
	
		menuItems.removeClass('selected');
		$(this).addClass('selected');
	});

	orderDetails.click(function() {
		orderDetailsContainer.removeClass('hidden').addClass('on-top');
		topMenu.removeClass('hidden');
	});
});


