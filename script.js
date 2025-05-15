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
