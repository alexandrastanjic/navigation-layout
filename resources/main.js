$(function() {
	const orderDetails = $('#orderDetails');
	const orderDetailsContainer = $('.order-details-container');
	const menuItems = $('.menu-item');
	const logoImg = $('#change-img');
	const contentElements = $('.content');
	const topMenu = $('.top-menu-main-wrapper');

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

		if (menuItems.hasClass('selected') && dataContent === 'orders-container') {
			topMenu.fadeOut();
		} else {
			topMenu.fadeIn();
		}
	});

	orderDetails.click(function() {
		orderDetailsContainer.removeClass('hidden').addClass('on-top');
		topMenu.fadeIn();
	});
});
