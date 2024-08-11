/* preloader */
window.onload = function () {
	const preloader = document.querySelector('.preloader');
	if (preloader) {
		const preloaderTime = Number(preloader.dataset.time) * 1000;
		setTimeout(function () {
			preloader.classList.add('preloaderOpacity');
			document.body.classList.remove('bodyFixed');
		}, preloaderTime);
		setTimeout(function () {
			preloader.classList.add('preloaderDisplay');
			preloader.remove();
			document.querySelectorAll('.heroLeft > div > *').forEach(function (element, index) {
				setTimeout(function () {
					element.classList.add('animate');
				}, 500 * index);
			});
		}, preloaderTime + 750);
	}
}
/* team */
const teamSlider = jQuery('.teamSlider');
const progressBar = jQuery('.teamScrollBar');
teamSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	const calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
	progressBar.css('left', calc + '%');
});
jQuery('.teamSlider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	centerMode: false,
	focusOnSelect: false,
	autoplay: false,
	speed: 500,
	autoplaySpeed: 0,
	draggable: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	cssEase: 'linear',
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.495 5.50507C10.7684 5.77844 10.7684 6.22166 10.495 6.49502L5.69 11.3H20C20.3866 11.3 20.7001 11.6134 20.7001 12C20.7001 12.3866 20.3866 12.7 20 12.7H5.69L10.495 17.5051C10.7684 17.7784 10.7684 18.2217 10.495 18.495C10.2217 18.7684 9.77844 18.7684 9.50507 18.495L3.50507 12.495C3.23171 12.2217 3.23171 11.7784 3.50507 11.5051L9.50507 5.50507C9.77844 5.23171 10.2217 5.23171 10.495 5.50507Z" fill="#000000"/></svg></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5051 5.50507C13.7784 5.23171 14.2217 5.23171 14.495 5.50507L20.495 11.5051C20.7684 11.7784 20.7684 12.2217 20.495 12.495L14.495 18.495C14.2217 18.7684 13.7784 18.7684 13.5051 18.495C13.2317 18.2217 13.2317 17.7784 13.5051 17.5051L18.3101 12.7H4.00005C3.61345 12.7 3.30005 12.3866 3.30005 12C3.30005 11.6134 3.61345 11.3 4.00005 11.3H18.3101L13.5051 6.49502C13.2317 6.22166 13.2317 5.77844 13.5051 5.50507Z" fill="#000000"/></svg></button>',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1
			}
		}
	]
});


const casesSlider = jQuery('.cases.v2 .pricingBlocks > div');
const progressBar2 = jQuery('.teamScrollBar.casess');
casesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	const calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
	progressBar2.css('left', calc + '%');
});

jQuery('.cases.v2 .pricingBlocks > div').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	infinite: false,
	arrows: true,
	centerMode: false,
	focusOnSelect: false,
	autoplay: false,
	speed: 500,
	autoplaySpeed: 0,
	draggable: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	cssEase: 'linear',
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.495 5.50507C10.7684 5.77844 10.7684 6.22166 10.495 6.49502L5.69 11.3H20C20.3866 11.3 20.7001 11.6134 20.7001 12C20.7001 12.3866 20.3866 12.7 20 12.7H5.69L10.495 17.5051C10.7684 17.7784 10.7684 18.2217 10.495 18.495C10.2217 18.7684 9.77844 18.7684 9.50507 18.495L3.50507 12.495C3.23171 12.2217 3.23171 11.7784 3.50507 11.5051L9.50507 5.50507C9.77844 5.23171 10.2217 5.23171 10.495 5.50507Z" fill="#000000"/></svg></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5051 5.50507C13.7784 5.23171 14.2217 5.23171 14.495 5.50507L20.495 11.5051C20.7684 11.7784 20.7684 12.2217 20.495 12.495L14.495 18.495C14.2217 18.7684 13.7784 18.7684 13.5051 18.495C13.2317 18.2217 13.2317 17.7784 13.5051 17.5051L18.3101 12.7H4.00005C3.61345 12.7 3.30005 12.3866 3.30005 12C3.30005 11.6134 3.61345 11.3 4.00005 11.3H18.3101L13.5051 6.49502C13.2317 6.22166 13.2317 5.77844 13.5051 5.50507Z" fill="#000000"/></svg></button>',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1.1
			}
		}
	]
});


/* scrolls */
jQuery('a').click(function (event) {
	if (jQuery(this).attr('href').startsWith('#body')) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, 500);
	} else if (jQuery(this).attr('href').startsWith('#')) {
		event.preventDefault();
		jQuery('html, body').animate({
				scrollTop: jQuery(jQuery(this).attr('href')).offset().top - document.querySelector('header').offsetHeight
		}, 500);
	}
});
/* header */
elementsTopListener();
window.addEventListener('scroll', elementsTopListener);
function elementsTopListener() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		document.querySelector('header').classList.add('stickyHeader');
	} else {
		document.querySelector('header').classList.remove('stickyHeader');
	}
}
/* menus */
document.getElementById('openMenu').onclick = function () {
	document.querySelector('.mobileMenu').classList.add('visibleMenu');
	document.body.classList.add('fixed');
	setTimeout(function () {
		document.querySelector('.mobileMenu').classList.add('activeMenu');
	}, 100);
}
document.getElementById('closeMenu').onclick = function () {
	closeMenu();
}
document.querySelector('.overflowBody').onclick = function () {
	closeMenu();
}
jQuery('.mobileMenu').click(function(event) {
	if (jQuery(event.target).is('a, img')) {
		closeMenu();
	}
});
function closeMenu() {
	document.querySelector('.mobileMenu').classList.remove('activeMenu');
	document.body.classList.remove('fixed');
	setTimeout(function () {
		document.querySelector('.mobileMenu').classList.remove('visibleMenu');
	}, 600);
}
/* chat */
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatForm = document.getElementById('chatForm');
const currentChat = document.querySelector('.currentChat');
const scrollChat = document.querySelector('.scrollChat');
document.querySelector('.startChat').addEventListener('click', function () {
	localStorage.setItem('chatID', createId(128));
	document.querySelector('.startContent').classList.add('opacity');
	setTimeout(function () {
		document.querySelector('.startContent').classList.add('displayNone');
		document.querySelector('.chatOnline').classList.remove('displayNone');
		setTimeout(function () {
			document.querySelector('.chatOnline').classList.add('opacity');
			messageInput.focus();
		}, 10);
	}, 500);
});
function createId(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result + Date.now();
}
let messages = [];
messages.push({role: 'assistant', content: chatForm.dataset.firstMessage});
function sendMessageHandler(event) {
	event.preventDefault();
	console.log(1);
	let userMessage = document.createElement('div');
	let aiMessage = document.createElement('div');
	if (!localStorage.getItem('totalMessages')) {
		localStorage.setItem('totalMessages', 0);
	}
	localStorage.setItem('totalMessages', Number(localStorage.getItem('totalMessages')) + 1);
	if (localStorage.getItem('resetTime')) {
		if (Date.now() > Number(localStorage.getItem('resetTime'))) {
			localStorage.setItem('resetTime', (Number(chatForm.dataset.time) * 1000) + Date.now());
			localStorage.setItem('totalMessages', 1);
		} else {
			if ((Number(localStorage.getItem('totalMessages'))) > Number(chatForm.dataset.maximum)) {
				userMessage.classList.add('humanMessage');
				const message = messageInput.value.trim()
				userMessage.innerText = message;
				currentChat.append(userMessage);
				aiMessage.classList.add('aiMessage');
				aiMessage.innerHTML = '<i></i><span>' + chatForm.dataset.finalMessage + '</span>';
				currentChat.append(aiMessage);
				messageInput.value = '';
				scrollChat.scrollTo({
					top: scrollChat.scrollHeight,
					behavior: 'smooth'
				});
				return 0;
			}
		}
	} else {
		localStorage.setItem('resetTime', (Number(chatForm.dataset.time) * 1000) + Date.now());
	}
	userMessage.classList.add('humanMessage');
	const message = messageInput.value.trim()
	userMessage.innerText = message;
	currentChat.append(userMessage);
	messages.push({role: 'user', content: message});
	if (messages.length > Number(chatForm.dataset.messages)) {
		messages.shift();
	}
	messageInput.value = '';
	messageInput.disabled = true;
	sendMessage.disabled = true;
	scrollChat.scrollTo({
		top: scrollChat.scrollHeight,
		behavior: 'smooth'
	});
	fetch('', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({messages: messages, chat_id: localStorage.getItem('chatID')}),
	})
	.then((response) => response.json())
	.then((data) => {
		sendMessage.disabled = false;
		messageInput.disabled = false;
		messageInput.focus();
		const messageElement = document.createElement('div');
		const p = document.createElement('p');
		if (data.hasOwnProperty('error')) {
			alert('Something went wrong. Please, try again later');
		} else if (data.hasOwnProperty('message')) {
			messages.push({role: 'assistant', content: data.message});
			if (messages.length > Number(chatForm.dataset.messages)) {
				messages.shift();
			}
			aiMessage.classList.add('aiMessage');
			aiMessage.innerHTML = '<i></i><span>' + data.message + '</span>';
			currentChat.append(aiMessage);
			scrollChat.scrollTo({
				top: scrollChat.scrollHeight,
				behavior: 'smooth'
			});
		}
	})
	.catch(error => {
		console.error(error);
		sendMessage.disabled = false;
		messageInput.disabled = false;
		messageInput.focus();
	});
}
chatForm.addEventListener('submit', sendMessageHandler);
/* form */
const form = document.querySelector('#contactForm');
if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const data = {};
		const bitrixData = {};
		let iterator = 0;
		for (const element of form.elements) {
			iterator++;
			if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
				if (element.name.startsWith('identify')) {
					const label = document.querySelector(`label[for="${element.name}"]`);
					if (label) {
						data[iterator] = '<br><strong>' + label.innerHTML.trim() + '</strong>: ' + element.value;
					}
				} else {
					bitrixData[element.name] = element.value;
				}
			}
		}
		jQuery.ajax({
			data: {
				action:'send_contact_form',
				...bitrixData,
				...data
			},
			type: 'post',
			url: my_ajax_object.ajax_url,
			dataType: 'JSON',
			success: function(data) {
				if (data[0].success) {
					jQuery.fancybox.open(jQuery("#thank-you").html());
					for (const element of form.elements) {
						if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
							element.value = '';
						}
					}
				}
			}
		});
	});
}
/* dropdown */
function componentsDropdown(dropdownElements, dropdownButtonSelector, dropdownMenuSelector, classActive, classActiveToTop, selectClass, selectMultipleClass, sublitMultipleSelector, resetChoiceSelector, searchSelector, resetSearchSelector, dropdownMenuMargin = 5, dropdownMenuMaxHeight = 200, dropdownItemsSelector = 'li a, li button, li input', dropdownUnactiveItemsSelector = 'li span', searchItemsSelector = 'ul > li', animationTime = 500) {
	let animationInProgress = false;
	dropdownElements.forEach(function (element) {
		const dropdownMenuElement = element.querySelector(dropdownMenuSelector);
		const dropdownButtonElement = element.querySelector(dropdownButtonSelector);
		const submitMultipleElement = element.querySelector(sublitMultipleSelector);
		const resetChoiceElement = element.querySelector(resetChoiceSelector);
		const searchElement = element.querySelector(searchSelector);
		const resetSearchElement = element.querySelector(resetSearchSelector);
		let changeElement = dropdownButtonElement.querySelector(dropdownButtonElement.dataset.change);
		if (!changeElement) {
			changeElement = dropdownButtonElement;
		}
		dropdownButtonElement.addEventListener('click', componentsDropdownButtonClicked);
		dropdownMenuElement.querySelectorAll(dropdownItemsSelector).forEach(function (dropdownItemElement) {
			if (element.classList.contains(selectMultipleClass)) {
				if (submitMultipleElement) {
					submitMultipleElement.addEventListener('click', function () {
						componentsDropdownClose();
					});
				}
				if (dropdownItemElement.type && dropdownItemElement.type === 'checkbox') {
					dropdownItemElement.addEventListener('change', function () {
						componentsDropdownChoose(dropdownItemElement, true, true);
					});
				} else {
					dropdownItemElement.addEventListener('click', function () {
						componentsDropdownChoose(dropdownItemElement);
					});
				}
			} else if (element.classList.contains(selectClass)) {
				if (dropdownItemElement.type && dropdownItemElement.type === 'radio') {
					dropdownItemElement.addEventListener('change', function () {
						componentsDropdownChoose(dropdownItemElement, true);
					});
				} else {
					dropdownItemElement.addEventListener('click', function () {
						componentsDropdownChoose(dropdownItemElement, true);
					});
				}
			} else {
				dropdownItemElement.addEventListener('click', function () {
					componentsDropdownChoose(dropdownItemElement);
				});
			}
		});
		if (resetChoiceElement) {
			resetChoiceElement.addEventListener('click', componentsDropdownReset);
		}
		if (searchElement) {
			searchElement.addEventListener('input', componentsDropdownSearch);
			searchElement.addEventListener('keyup', componentsDropdownSearch);
			if (resetSearchElement) {
				resetSearchElement.addEventListener('click', componentsDropdownSearchClear);
			}
		}
		function componentsDropdownButtonClicked() {
			if (!animationInProgress) {
				animationInProgress = true;
				if (element.classList.contains(classActive)) {
					componentsDropdownClose();
				} else {
					componentsDropdownOpen();
				}
			}
		}
		function componentsDropdownChoose(selectedElement = null, changeValue = false, isMultiple = false) {
			if (changeValue) {
				if (isMultiple) {
					const checkboxElements = element.querySelectorAll('input[type="checkbox"]');
					changeElement.innerHTML = '';
					checkboxElements.forEach(function (checkboxElement) {
						if (checkboxElement.checked) {
							changeElement.innerHTML += '<label for="' + checkboxElement.id + '">' + element.querySelector('[for="' + checkboxElement.id + '"]').innerText + '</label>';
							propertiesClassAdd(checkboxElement.parentElement, classActive);
						} else {
							propertiesClassRemove(checkboxElement.parentElement, classActive);
						}
					});
					changeElement.querySelectorAll('label').forEach(function (labelElement) {
						labelElement.addEventListener('click', function (event) {
							event.stopPropagation();
						});
					});
					if (changeElement.innerHTML) {
						propertiesClassAdd(resetChoiceElement, classActive);
					} else {
						changeElement.innerHTML = dropdownButtonElement.dataset.default;
						propertiesClassRemove(resetChoiceElement, classActive);
					}
					return true;
				} else {
					let selectedValue = element.querySelector('[for="' + selectedElement.id + '"]');
					if (selectedValue) {
						selectedValue = selectedValue.innerText;
					} else {
						selectedValue = selectedElement.innerText;
					}
					changeElement.innerText = selectedValue;
					propertiesClassAdd(resetChoiceElement, classActive);
				}
			}
			if (!isMultiple) {
				dropdownMenuElement.querySelectorAll(dropdownItemsSelector + ', ' + dropdownUnactiveItemsSelector).forEach(function (dropdownItemElement) {
					if ((dropdownItemElement === selectedElement) && (dropdownItemElement.parentElement.dataset.select !== 'false')) {
						propertiesClassAdd(dropdownItemElement.parentElement, classActive);
					} else {
						propertiesClassRemove(dropdownItemElement.parentElement, classActive);
					}
				});
			}
			componentsDropdownClose();
		}
		function componentsDropdownClose() {
			if (dropdownMenuElement.style.maxHeight) {
				dropdownMenuElement.style.maxHeight = null;
			}
			propertiesClassRemove(element, classActive);
			setTimeout(function () {
				propertiesClassRemove(element, classActiveToTop);
			}, animationTime);
			document.removeEventListener('click', componentsDropdownOutsideClick);
			componentsDropdownTabIndex('-1');
			setTimeout(function () {
				componentsDropdownSearchClear();
				animationInProgress = false;
			}, animationTime);
		}
		function componentsDropdownOpen() {
			componentsDropdownSetHeight();
			propertiesClassAdd(element, classActive);
			if (componentsDropdownCalculateDistance()) {
				propertiesClassAdd(element, classActiveToTop);
			}
			componentsDropdownTabIndex();
			setTimeout(function () {
				document.addEventListener('click', componentsDropdownOutsideClick);
				animationInProgress = false;
			}, animationTime);
		}
		function componentsDropdownOutsideClick(event) {
			if (!element.contains(event.target)) {
				componentsDropdownClose();
			}
		}
		function componentsDropdownSetHeight() {
			const dropdownMenuElementHeight = dropdownMenuElement.scrollHeight;
			if (dropdownMenuElementHeight > dropdownMenuMaxHeight) {
				dropdownMenuElement.style.maxHeight = dropdownMenuMaxHeight + 'px';
			} else {
				dropdownMenuElement.style.maxHeight = dropdownMenuElementHeight + 1 + 'px';
			}
		}
		function componentsDropdownTabIndex(tabIndex = null) {
			dropdownMenuElement.querySelectorAll(dropdownItemsSelector).forEach(function (linkElement) {
				linkElement.tabIndex = tabIndex;
			});
		}
		function componentsDropdownCalculateDistance() {
			return ((window.innerHeight - element.getBoundingClientRect().bottom) <= (dropdownMenuMaxHeight + dropdownMenuMargin)) && ((element.getBoundingClientRect().top) >= (dropdownMenuMaxHeight + dropdownMenuMargin));
		}
		function componentsDropdownReset(event) {
			event.stopPropagation();
			changeElement.innerHTML = dropdownButtonElement.dataset.default;
			propertiesClassRemove(resetChoiceElement, classActive);
			dropdownMenuElement.querySelectorAll(dropdownItemsSelector).forEach(function (dropdownItemElement) {
				dropdownItemElement.checked = null;
				propertiesClassRemove(dropdownItemElement.parentElement, classActive);
			});
		}
		function componentsDropdownSearch(event) {
			if (event.key === 'Escape' || event.keyCode === 27) {
				componentsDropdownSearchClear();
			} else {
				const searchValue = searchElement.value.toLowerCase();
				element.querySelectorAll(searchItemsSelector).forEach(function (searchItemElement) {
					if (!searchItemElement.innerText.toLowerCase().includes(searchValue)) {
						searchItemElement.style.display = 'none';
					} else {
						searchItemElement.style.display = null;
					}
				});
			}
		}
		function componentsDropdownSearchClear() {
			if (searchElement) {
				searchElement.value = null;
				element.querySelectorAll(searchItemsSelector).forEach(function (searchItemElement) {
					searchItemElement.style.display = null;
				});
			}
		}
	});
}
function propertiesClassRemove(element, className) {
	if (element && element.classList.contains(className)) {
		element.classList.remove(className);
	}
}
function propertiesClassAdd(element, className) {
	if (element && !element.classList.contains(className)) {
		element.classList.add(className);
	}
}
document.addEventListener('DOMContentLoaded', function () {
	componentsDropdown(document.querySelectorAll('.dropdown'), ':scope > button', ':scope > ul', 'active', 'activeBottom', 'dropdownSelect', 'dropdownMultiple', 'input.dropdownMultipleSubmit', 'input[type="reset"]', 'input.dropdownSearch', 'input.dropdownSearchReset');
});
/* videobot */
/*function waitForVideo(videoId) {
	fetch('', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({video_id: videoId}),
	})
	.then((response) => response.json())
	.then((data) => {
		if (data.data.video_url) {
			const video = document.createElement('video');
			video.src = data.data.video_url;
			video.autoplay = true;
			video.controls = true;
			document.querySelector('.videobotContainer .loader').remove();
			document.querySelector('.videobotContainer').append(video);
		} else {
			waitForVideo(videoId);
		}
	})
	.catch(error => {
		console.error(error);
	});
}
function createVideo(event) {
	event.preventDefault();
	const loader = document.createElement('div');
	loader.classList.add('loader');
	document.querySelector('.videobotContainer').append(loader);
	const textArea = document.getElementById('video_message');
	const video = textArea.value;
	textArea.disabled = true;
	document.querySelector('#video_message_form .button').disabled = true;
	fetch('', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({video: video}),
	})
	.then((response) => response.json())
	.then((data) => {
		if (data.data.video_id) {
			waitForVideo(data.data.video_id);
		}
	})
	.catch(error => {
		console.error(error);
	});
}
const videoForm = document.getElementById('video_message_form');
videoForm.addEventListener('submit', createVideo);*/