const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');



menuBtn.addEventListener('click', () => {
	mobileMenu.style.display = 'block';
	document.body.classList.toggle('stop-scrolling');
});

closeBtn.addEventListener('click', () => {
	mobileMenu.style.display = 'none';
})

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


// Scroll Animations

window.sr = ScrollReveal();
sr.reveal('.navigation', {
    duration: 2000,
    origin:'bottom'
});

sr.reveal('.header-section-content', {
    duration: 2000,
    origin:'left',
    distance: '300px'
});

sr.reveal('.primary-btn', {
    duration: 1000,
    delay: 500,
	distance: '100px',
    origin:'bottom'
});

sr.reveal('.light-btn', {
    duration: 1000,
    delay: 500,
	distance: '100px',
    origin:'bottom'
});

sr.reveal('.sub-section', {
    duration: 2000,
    origin:'left',
    distance: '300px',
	viewfactor: 0.3
});

sr.reveal('#tab-1-content .tab-content-box', {
    duration: 2000,
    origin:'right',
    distance: '300px',
	viewfactor: 0.3
});

sr.reveal('.card:first-child', {
    duration:1000,
    origin:'bottom',
    distance: '300px',
	viewfactor: 0.3
});

sr.reveal('.card:nth-child(2)', {
    duration: 1000,
	delay: 700,
    origin:'bottom',
    distance: '300px',
	viewfactor: 0.3
});

sr.reveal('.card:nth-child(3)', {
    duration: 1000,
	delay: 1400,
    origin:'bottom',
    distance: '300px',
	viewfactor: 0.3
});

sr.reveal('.accordion', {
    duration: 2000,
    origin:'bottom',
	distance: '300px',
	viewfactor: 0.3
});

sr.reveal('h5', {
    duration: 2000,
    origin:'left',
	distance: '300px',
	viewfactor: 0.3
});

sr.reveal('.light-text', {
    duration: 2000,
    origin:'left',
	distance: '300px',
	viewfactor: 0.3
});