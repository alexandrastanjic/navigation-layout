$(function() {
	const topMenu = $('.top-menu-wrapper');
	const orderDetails = $('#orderDetails');
	const orderDetailsContainer = $('.order-details-container');
	const menuItems = $('.menu-item');
	const logoImg = $('#change-img');
	const contentElements = $('.content');

	menuItems.click(function() {
		const dataContent = $(this).data('content');

		switch (dataContent) {
			case 'orders-container':
				logoImg.attr('src', 'assets/logo-vip.png');
				break;
			case 'reward-container':
				logoImg.attr('src', 'assets/logo-gold.png');
				break;
			case 'account-container':
				logoImg.attr('src', 'assets/logo-elite.png');
				break;
			case 'payment-container':
				logoImg.attr('src', 'assets/logo-member.png');
				break;
		}

		contentElements.addClass('hidden');
		contentElements.each(function(index, item) {
			if ($(item).hasClass(dataContent)) {
				$(item).removeClass('hidden');
			}
		});

		menuItems.removeClass('selected');
		$(this).addClass('selected');


		// aici functioneaza doar o singura data la click iar dupa aceea nu mai apare bara de navigare - ce imi scapa?	
		// initial am facut cu each(), dar am avut acelasi rezultat
	
			if ((menuItems).hasClass('selected') && dataContent === 'orders-container') {
				topMenu.fadeOut();
			}
			topMenu.removeClass('hidden');
	
	});

	orderDetails.click(function() {
		orderDetailsContainer.removeClass('hidden').addClass('on-top');
		topMenu.removeClass('hidden');
	});
});
