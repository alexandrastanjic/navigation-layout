document.addEventListener('DOMContentLoaded', function(event) {
	const topMenu = document.getElementsByClassName('top-menu-wrapper');
	const orderDetails = document.getElementById('orderDetails');
	const orderDetailsContainer = document.getElementsByClassName('order-details-container');
	const menuItems = document.getElementsByClassName('menu-item');
	const logoImg = document.getElementById('change-img');

	for (let i = 0; i < menuItems.length; i++) {
		const menuItem = menuItems[i];

		menuItem.addEventListener('click', function() {
			for (let j = 0; j < menuItems.length; j++) {
				if (menuItems[j].classList.contains('selected')) {
					menuItems[j].classList.remove('selected');
				} else {
					continue;
				}
			}
			menuItem.classList.add('selected');

			if (menuItem.classList.contains('selected') && menuItem.dataset.content !== 'orders-container') {
				topMenu[0].classList.remove('hidden');
			} else {
				topMenu[0].classList.add('hidden');
			}

			if (menuItems[i].dataset.content === 'orders-container') {
				logoImg.setAttribute('src', '../assets/logo-vip.png');
			}	else if (menuItems[i].dataset.content === 'reward-container') {
				logoImg.setAttribute('src', '../assets/logo-gold.png');
			} else if (menuItems[i].dataset.content === 'account-container') {
				logoImg.setAttribute('src', '../assets/logo-elite.png');
			} else if (menuItems[i].dataset.content === 'payment-container') {
				logoImg.setAttribute('src', '../assets/logo-member.png');
			}

			const dataContent = menuItem.dataset.content;
			const contentElements = document.getElementsByClassName('content');
			for (let k = 0; k < contentElements.length; k++) {
				if (contentElements[k].classList.contains('hidden')) {
					continue;
				} else {
					contentElements[k].classList.add('hidden');
				}
			}
			document.getElementsByClassName(dataContent)[0].classList.remove('hidden');
		});
	}

	orderDetails.addEventListener('click', function() {
		orderDetailsContainer[0].classList.remove('hidden');
		orderDetailsContainer[0].classList.add('on-top');
		topMenu[0].classList.remove('hidden');
	});
});
