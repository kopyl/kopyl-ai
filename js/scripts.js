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
			const section = document.querySelector(`#${dataScroll}`);
			const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: sectionTop,
				behavior: "smooth"
			});
		}


	}
}

