$(function() {
	const topMenu = $('.top-menu-wrapper');
	const orderDetails = $('#orderDetails');
	const orderDetailsContainer = $('.order-details-container');
	const menuItems = $('.menu-item');
	const logoImg = $('#change-img');
	const contentElements = $('.content');

	menuItems.click(function() {
		const dataContent = $(this).data('content');

		// de ce crezi ca trebuia mai mult aici?
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

		//nu mai apare pentru ca nu il mai arati, tu doar il ascunzi, trebuie sa intelegi ca tu controlezi ce se intampla aici, nu codul
		//tehnicile astea adddClass/removeClass fadeIn/fadeOut e ok sa fie folosite la packet pentru ca actioneaza diferit asupra CSS-ului, daca folosesti una dintr-o parte si una din cealalta risti sa nu fie efectul dorit
		//fadeIn iti strica putin stilui, trebuie sa folosesti un wrapper extern pe care sa faci doar asta fadeIn, sa nu se bage in stilul tau

		if ((menuItems).hasClass('selected') && dataContent === 'orders-container') {
			//topMenu.fadeOut();
			topMenu.addClass('hidden');
		} else {
			//topMenu.fadeIn();
			topMenu.removeClass('hidden');
		}
		
	});

	orderDetails.click(function() {
		orderDetailsContainer.removeClass('hidden').addClass('on-top');
		topMenu.removeClass('hidden');
	});
});
