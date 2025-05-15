// Manipulação do formulário de contato
document.addEventListener('DOMContentLoaded', function () {
	const contactForm = document.getElementById('contactForm');

	if (contactForm) {
		contactForm.addEventListener('submit', function (e) {
			e.preventDefault();

			// Coleta os dados do formulário
			const formData = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				message: document.getElementById('message').value,
			};

			// Aqui você pode adicionar a lógica para enviar os dados para um servidor
			console.log('Dados do formulário:', formData);

			// Limpa o formulário
			contactForm.reset();

			// Mostra mensagem de sucesso
			alert('Mensagem enviada com sucesso!');
		});
	}
});

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

	// Close menu when clicking a link
	links.forEach((link) => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active');
			navLinks.classList.remove('active');
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', function (event) {
		const isClickInsideNav = navLinks.contains(event.target);
		const isClickOnHamburger = hamburger.contains(event.target);

		if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
			hamburger.classList.remove('active');
			navLinks.classList.remove('active');
		}
	});
});
