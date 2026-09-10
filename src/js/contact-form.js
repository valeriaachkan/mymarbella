const form = document.querySelector('#contact-form');

if (form) {
	const button = form.querySelector('button[type="submit"]');
	const status = form.querySelector('#contact-form-status');
	let sending = false;

	function showStatus(message, state) {
		status.textContent = message;
		status.dataset.state = state;
		if (state !== 'pending') status.focus();
	}

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		if (sending || !form.reportValidity()) return;

		const data = new FormData(form);
		if (!String(data.get('h-captcha-response') || '').trim()) {
			showStatus('Please complete the spam verification before sending. If it does not load, refresh the page or email us below.', 'error');
			return;
		}

		sending = true;
		button.disabled = true;
		button.textContent = 'Sending…';
		form.setAttribute('aria-busy', 'true');
		showStatus('Sending your enquiry…', 'pending');
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 20000);

		try {
			const response = await fetch(form.action, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(Object.fromEntries(data)),
				signal: controller.signal,
			});
			const result = await response.json();
			if (!response.ok || result.success !== true) {
				showStatus('Your enquiry was not accepted. Please complete the verification again and retry, or email us below.', 'error');
				return;
			}
			form.reset();
			showStatus('Thank you. Your enquiry has been submitted to Zirka Real Estate.', 'success');
		} catch {
			showStatus('We could not confirm your submission. Please try again later or email us below.', 'error');
		} finally {
			clearTimeout(timeout);
			sending = false;
			button.disabled = false;
			button.textContent = 'Send enquiry';
			form.removeAttribute('aria-busy');
			// Captcha tokens are single-use, including after a rejected submission.
			if (window.hcaptcha) window.hcaptcha.reset();
		}
	});
}
