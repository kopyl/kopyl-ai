document.addEventListener('DOMContentLoaded', () => {
	scrollToSection();
});


function scrollToSection() {
	const scrolls = document.querySelectorAll("[scroll-to]");

	if (scrolls) {
		for (const scroll of scrolls) {
			scroll.addEventListener("click", clickHandler);
		}

		function clickHandler(e) {
			e.preventDefault();
			const dataScroll = this.getAttribute("scroll-to");
			const offsetTop = document.querySelector(`#${dataScroll}`).getBoundingClientRect().top;

			if (window.innerWidth < 992) {
				setTimeout(addAnimation, 200);
			}

			scroll({
				top: offsetTop,
				behavior: "smooth"
			});
		}
	}
}

