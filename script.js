// Adiciona classe 'active' ao link do menu atual
document.addEventListener('DOMContentLoaded', function () {
	const currentPage = window.location.pathname.split('/').pop();
	const navLinks = document.querySelectorAll('.nav-links a');

	navLinks.forEach((link) => {
		if (link.getAttribute('href') === currentPage) {
			link.classList.add('active');
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');
	const links = document.querySelectorAll('.nav-links a');

	// Toggle menu
	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		navLinks.classList.toggle('active');
	});

	// Fechar menu ao clicar em um link
	links.forEach((link) => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active');
			navLinks.classList.remove('active');
		});
	});

	// Fechar menu ao clicar fora
	document.addEventListener('click', function (event) {
		const isClickInsideNav = navLinks.contains(event.target);
		const isClickOnHamburger = hamburger.contains(event.target);

		if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
			hamburger.classList.remove('active');
			navLinks.classList.remove('active');
		}
	});
});
