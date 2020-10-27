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
// orderDetails.addEventListener('click', function() {
// 		orderDetailsContainer[0].classList.remove('hidden');
// 		orderDetailsContainer[0].classList.add('on-top');
// 		topMenu[0].classList.remove('hidden');
// 	});

// });


$(function() {
	const topMenu = $('.top-menu-wrapper');
	const orderDetails = $('#orderDetails');
	const orderDetailsContainer = $('.order-details-container');
	const menuItems = $('.menu-item');
	const logoImg = $('#change-img');

	
	$(menuItems).click(function() {
		$(menuItems).each(function() {
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
			}
		});
		$(this).addClass('selected');

		const contentElements = $('.content');
			// deci nu stiu daca macar e ceva corect la ce am facut mai jos, am citit eu ceva cu data() in jQUery dar n-am inteles daca face acelasi lucru ca dataset
		const dataContent = menuItems.data($(contentElements));
		$(contentElements).each(function() {
			if ($(this).hasClass('hidden')) {
				return;
			} else {
				$(this).addClass('hidden');
			}
			$(dataContent).removeClass('hidden');
		});

		$(menuItems).each(function() {
		
			if ($(this).hasClass('selected') && $(this).data(contentElements) !== 'orders-container') {
				$(topMenu).removeClass('hidden');
			} else {
				$(topMenu).addClass('hidden');
			}
		});
	});

	$(orderDetails).on('click', function() {
		$(orderDetailsContainer).removeClass('hidden');
		$(orderDetailsContainer).addClass('on-top');
		$(topMenu).removeClass('hidden');
	});
});
