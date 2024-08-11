let loaderVideo;
async function startVideoChat() {
	loaderVideo = document.createElement('div');
	loaderVideo.classList.add('loader');
	document.querySelector('.leftVideo').append(loaderVideo);
	document.getElementById('startVideo').disabled = true;
	document.getElementById('startVideoMobile').disabled = true;
	document.querySelector('.leftVideo .loadedVideo').style.opacity = '0.2';
	document.querySelector('.leftVideo .staticVideo').style.opacity = '0.2';
	document.getElementById('newBtn').click();
}
let videoTimer = 0;
const messageInputVideo = document.getElementById('messageInputVideo');
const sendMessageVideo = document.getElementById('sendMessageVideo');
const chatFormVideo = document.getElementById('chatFormVideo');
const currentChatVideo = document.querySelector('.currentChatVideo');
const scrollChatVideo = document.querySelector('.scrollChatVideo');
function videoChat() {
	const videoInterval = setInterval(function () {
		videoTimer++;
		if (videoTimer >= Number(chatFormVideo.dataset.closeTime)) {
			clearInterval(videoInterval);
			videoTimer = 0;
			document.getElementById('closeBtn').click();
			document.getElementById('startVideo').disabled = false;
			document.getElementById('startVideo').style.display = null;
			document.getElementById('startVideoMobile').disabled = false;
			document.getElementById('startVideoMobile').style.display = null;
			document.querySelector('.leftVideo .loadedVideo').style.opacity = '0';
			document.querySelector('.leftVideo .videobotContainer').style.opacity = '0';
			document.querySelector('.leftVideo .staticVideo').style.opacity = '1';
			document.querySelector('.formVideo').style.opacity = '0';
			setTimeout(function () {
				document.getElementById('startVideo').style.opacity = '1';
				document.getElementById('startVideoMobile').style.opacity = '1';
			}, 10);
			setTimeout(function () {
				document.querySelector('.formVideo').style.display = 'none';
			}, 500);
		}
	}, 1000)
	document.getElementById('startVideo').style.opacity = '0';
	document.getElementById('startVideoMobile').style.opacity = '0';
	localStorage.setItem('chatIDVideo', createIdVideo(128));
	setTimeout(function () {
		document.getElementById('startVideo').style.display = 'none';
		document.getElementById('startVideoMobile').style.display = 'none';
		document.querySelector('.formVideo').style.display = 'flex';
		document.querySelector('.leftVideo .loadedVideo').style.opacity = '1';
		document.querySelector('.leftVideo .videobotContainer').style.opacity = '1';
		document.querySelector('.leftVideo .staticVideo').style.opacity = '0';
		loaderVideo.remove();
		setTimeout(function () {
			document.querySelector('.formVideo').style.opacity = '1';
			if (!(window.matchMedia('(max-width: 767px)').matches)) {
				messageInputVideo.focus();
			}
		}, 10);
	}, 500);
	let messagesVideo = [];
	messagesVideo.push({role: 'assistant', content: chatFormVideo.dataset.firstMessage});
	chatFormVideo.onsubmit = function () {
		event.preventDefault();
		videoTimer = 0;
		let userMessage = document.createElement('div');
		let aiMessage = document.createElement('div');
		if (!localStorage.getItem('totalMessagesVideo')) {
			localStorage.setItem('totalMessagesVideo', 0);
		}
		localStorage.setItem('totalMessagesVideo', Number(localStorage.getItem('totalMessagesVideo')) + 1);
		console.log(Number(localStorage.getItem('totalMessagesVideo')) + 1);
		if (localStorage.getItem('resetTimeVideo')) {
			if (Date.now() > Number(localStorage.getItem('resetTimeVideo'))) {
				localStorage.setItem('resetTimeVideo', (Number(chatFormVideo.dataset.time) * 1000) + Date.now());
				localStorage.setItem('totalMessagesVideo', 1);
			} else {
				if ((Number(localStorage.getItem('totalMessagesVideo'))) > Number(chatFormVideo.dataset.maximum)) {
					userMessage.classList.add('humanMessageVideo');
					const message = messageInputVideo.value.trim()
					userMessage.innerText = message;
					currentChatVideo.append(userMessage);
					aiMessage.classList.add('aiMessageVideo');
					aiMessage.innerHTML = '<i></i><span>' + chatFormVideo.dataset.finalMessage + '</span>';
					currentChatVideo.append(aiMessage);
					messageInputVideo.value = '';
					scrollChatVideo.scrollTo({
						top: scrollChatVideo.scrollHeight,
						behavior: 'smooth'
					});
					return 0;
				}
			}
		} else {
			localStorage.setItem('resetTimeVideo', (Number(chatFormVideo.dataset.time) * 1000) + Date.now());
		}
		userMessage.classList.add('humanMessageVideo');
		const message = messageInputVideo.value.trim()
		userMessage.innerText = message;
		currentChatVideo.append(userMessage);
		messagesVideo.push({role: 'user', content: message});
		if (messagesVideo.length > Number(chatFormVideo.dataset.messagesVideo)) {
			messagesVideo.shift();
		}
		messageInputVideo.value = '';
		messageInputVideo.disabled = true;
		sendMessageVideo.disabled = true;
		scrollChatVideo.scrollTo({
			top: scrollChatVideo.scrollHeight,
			behavior: 'smooth'
		});
		fetch('', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({messagesVideo: messagesVideo, chat_id: localStorage.getItem('chatIDVideo')}),
		})
		.then((response) => response.json())
		.then((data) => {
			sendMessageVideo.disabled = false;
			messageInputVideo.disabled = false;
			if (!(window.matchMedia('(max-width: 767px)').matches)) {
				messageInputVideo.focus();
			}
			const messageElement = document.createElement('div');
			const p = document.createElement('p');
			if (data.hasOwnProperty('error')) {
				alert('Something went wrong. Please, try again later');
			} else if (data.hasOwnProperty('message')) {
				document.getElementById('taskInput').value = data.message;
				messagesVideo.push({role: 'assistant', content: data.message});
				if (messagesVideo.length > Number(chatFormVideo.dataset.messagesVideo)) {
					messagesVideo.shift();
				}
				aiMessage.classList.add('aiMessageVideo');
				aiMessage.classList.add('displayNone');
				aiMessage.innerHTML = '<i></i><span>' + data.message + '</span>';
				currentChatVideo.append(aiMessage);
				scrollChatVideo.scrollTo({
					top: scrollChatVideo.scrollHeight,
					behavior: 'smooth'
				});
				document.getElementById('repeatBtn').click();
				videoTimer = 0;
			}
		})
		.catch(error => {
			console.error(error);
			sendMessageVideo.disabled = false;
			messageInputVideo.disabled = false;
			if (!(window.matchMedia('(max-width: 767px)').matches)) {
				messageInputVideo.focus();
			}
		});
	}
}
function createIdVideo(length) {
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
document.getElementById('startVideo').addEventListener('click', startVideoChat);
document.getElementById('startVideoMobile').addEventListener('click', startVideoChat);











const heygen_API = {
	apiKey: chatFormVideo.dataset.heygen,
	serverUrl: 'https://api.heygen.com',
	};
	
	const statusElement = document.querySelector('#status');
	const apiKey = heygen_API.apiKey;
	const SERVER_URL = heygen_API.serverUrl;
	
	if (apiKey === 'YourApiKey' || SERVER_URL === '') {
	alert('Please enter your API key and server URL in the api.json file');
	}
	
	let sessionInfo = null;
	let peerConnection = null;
	
	function updateStatus(statusElement, message) {
	statusElement.innerHTML += message + '<br>';
	statusElement.scrollTop = statusElement.scrollHeight;
	}
	
	updateStatus(statusElement, 'Please click the new button to create the stream first.');
	
	function onMessage(event) {
	const message = event.data;
	console.log('Received message:', message);
	}
	
	// Create a new WebRTC session when clicking the "New" button
	async function createNewSession() {
	updateStatus(statusElement, 'Creating new session... please wait');
	//const avatar = avatarID.value;
	
	const avatar = chatFormVideo.dataset.avatar;
	const voice = chatFormVideo.dataset.voice;
	
	// call the new interface to get the server's offer SDP and ICE server to create a new RTCPeerConnection
	sessionInfo = await newSession(chatFormVideo.dataset.quality, avatar, voice);
	const { sdp: serverSdp, ice_servers2: iceServers } = sessionInfo;
	
	// Create a new RTCPeerConnection
	peerConnection = new RTCPeerConnection({ iceServers: iceServers });
	
	// When audio and video streams are received, display them in the video element
	peerConnection.ontrack = (event) => {
		console.log('Received the track');
		if (event.track.kind === 'audio' || event.track.kind === 'video') {
		mediaElement.srcObject = event.streams[0];
		}
	};
	
	// When receiving a message, display it in the status element
	peerConnection.ondatachannel = (event) => {
		const dataChannel = event.channel;
		dataChannel.onmessage = onMessage;
	};
	
	// Set server's SDP as remote description
	const remoteDescription = new RTCSessionDescription(serverSdp);
	await peerConnection.setRemoteDescription(remoteDescription);
	
	updateStatus(statusElement, 'Session creation completed');
	updateStatus(statusElement, 'Now.You can click the start button to start the stream');
	startAndDisplaySession();
	}
	
	// Start session and display audio and video when clicking the "Start" button
	async function startAndDisplaySession() {
		if (!sessionInfo) {
			updateStatus(statusElement, 'Please create a connection first');
			return;
		}
		
		updateStatus(statusElement, 'Starting session... please wait');
		
		// Create and set local SDP description
		const localDescription = await peerConnection.createAnswer();
		await peerConnection.setLocalDescription(localDescription);
		
		// When ICE candidate is available, send to the server
		peerConnection.onicecandidate = ({ candidate }) => {
			console.log('Received ICE candidate:', candidate);
			if (candidate) {
			handleICE(sessionInfo.session_id, candidate.toJSON());
			}
		};
		
		// When ICE connection state changes, display the new state
		peerConnection.oniceconnectionstatechange = (event) => {
			updateStatus(
			statusElement,
			`ICE connection state changed to: ${peerConnection.iceConnectionState}`,
			);
		};
		
		
		
		// Start session
		await startSession(sessionInfo.session_id, localDescription);
		
		var receivers = peerConnection.getReceivers();
		
		receivers.forEach((receiver) => {
			receiver.jitterBufferTarget = 500
		});
		
		updateStatus(statusElement, 'Session started successfully');
		videoChat();
	}
	const taskInput = document.querySelector('#taskInput');
	async function repeatHandler() {
		if (!sessionInfo) {
			updateStatus(statusElement, 'Please create a connection first');
		
			return;
		}
		updateStatus(statusElement, 'Sending task... please wait');
		const text = taskInput.value;
		if (text.trim() === '') {
			alert('Please enter a task');
			return;
		}
		
		const resp = await repeat(sessionInfo.session_id, text);
		
		updateStatus(statusElement, 'Task sent successfully');
		document.querySelector('.aiMessageVideo.displayNone').classList.remove('displayNone');
	}
	
	
	
	
	// when clicking the "Close" button, close the connection
	async function closeConnectionHandler() {
	if (!sessionInfo) {
		updateStatus(statusElement, 'Please create a connection first');
		return;
	}
	
	renderID++;
	hideElement(canvasElement);
	hideElement(bgCheckboxWrap);
	mediaCanPlay = false;
	
	updateStatus(statusElement, 'Closing connection... please wait');
	try {
		// Close local connection
		peerConnection.close();
		// Call the close interface
		const resp = await stopSession(sessionInfo.session_id);
	
		console.log(resp);
	} catch (err) {
		console.error('Failed to close the connection:', err);
	}
	updateStatus(statusElement, 'Connection closed successfully');
	}
	
	document.querySelector('#newBtn').addEventListener('click', createNewSession);
	document.querySelector('#startBtn').addEventListener('click', startAndDisplaySession);
	document.querySelector('#repeatBtn').addEventListener('click', repeatHandler);
	document.querySelector('#closeBtn').addEventListener('click', closeConnectionHandler);
	
	
	// new session
	async function newSession(quality, avatar_id, voice_id) {
	const response = await fetch(`${SERVER_URL}/v1/streaming.new`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		'X-Api-Key': apiKey,
		},
		body: JSON.stringify({
			"avatar_id": avatar_id,
			"quality": quality,
			"voice": {
			  "voice_id": voice_id
			},
		}),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(
		statusElement,
		'Server Error. Please ask the staff if the service has been turned on',
		);
	
		throw new Error('Server error');
	} else {
		const data = await response.json();
		console.log(data.data);
		return data.data;
	}
	}
	
	// start the session
	async function startSession(session_id, sdp) {
	const response = await fetch(`${SERVER_URL}/v1/streaming.start`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		'X-Api-Key': apiKey,
		},
		body: JSON.stringify({ session_id, sdp }),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(
		statusElement,
		'Server Error. Please ask the staff if the service has been turned on',
		);
		throw new Error('Server error');
	} else {
		const data = await response.json();
		return data.data;
	}
	}
	
	// submit the ICE candidate
	async function handleICE(session_id, candidate) {
	const response = await fetch(`${SERVER_URL}/v1/streaming.ice`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		'X-Api-Key': apiKey,
		},
		body: JSON.stringify({ session_id, candidate }),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(
		statusElement,
		'Server Error. Please ask the staff if the service has been turned on',
		);
		throw new Error('Server error');
	} else {
		const data = await response.json();
		return data;
	}
	}
	
	async function talkToOpenAI(prompt) {
	const response = await fetch(`http://localhost:3000/openai/complete`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({ prompt }),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(
		statusElement,
		'Server Error. Please make sure to set the openai api key',
		);
		throw new Error('Server error');
	} else {
		const data = await response.json();
		return data.text;
	}
	}
	
	// repeat the text
	async function repeat(session_id, text) {
	const response = await fetch(`${SERVER_URL}/v1/streaming.task`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		'X-Api-Key': apiKey,
		},
		body: JSON.stringify({ session_id, text }),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(
		statusElement,
		'Server Error. Please ask the staff if the service has been turned on',
		);
		throw new Error('Server error');
	} else {
		const data = await response.json();
		return data.data;
	}
	}
	
	// stop session
	async function stopSession(session_id) {
	const response = await fetch(`${SERVER_URL}/v1/streaming.stop`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		'X-Api-Key': apiKey,
		},
		body: JSON.stringify({ session_id }),
	});
	if (response.status === 500) {
		console.error('Server error');
		updateStatus(statusElement, 'Server Error. Please ask the staff for help');
		throw new Error('Server error');
	} else {
		const data = await response.json();
		return data.data;
	}
	}
	
	const removeBGCheckbox = document.querySelector('#removeBGCheckbox');
	removeBGCheckbox.addEventListener('click', () => {
	const isChecked = removeBGCheckbox.checked; // status after click
	
	if (isChecked && !sessionInfo) {
		updateStatus(statusElement, 'Please create a connection first');
		removeBGCheckbox.checked = false;
		return;
	}
	
	if (isChecked && !mediaCanPlay) {
		updateStatus(statusElement, 'Please wait for the video to load');
		removeBGCheckbox.checked = false;
		return;
	}
	
	if (isChecked) {
		hideElement(mediaElement);
		showElement(canvasElement);
	
		renderCanvas();
	} else {
		hideElement(canvasElement);
		showElement(mediaElement);
	
		renderID++;
	}
	});
	
	let renderID = 0;
	function renderCanvas() {
	if (!removeBGCheckbox.checked) return;
	hideElement(mediaElement);
	showElement(canvasElement);
	
	canvasElement.classList.add('show');
	
	const curRenderID = Math.trunc(Math.random() * 1000000000);
	renderID = curRenderID;
	
	const ctx = canvasElement.getContext('2d', { willReadFrequently: true });
	
	if (bgInput.value) {
		canvasElement.parentElement.style.background = bgInput.value?.trim();
	}
	
	function processFrame() {
		if (!removeBGCheckbox.checked) return;
		if (curRenderID !== renderID) return;
	
		canvasElement.width = mediaElement.videoWidth;
		canvasElement.height = mediaElement.videoHeight;
	
		ctx.drawImage(mediaElement, 0, 0, canvasElement.width, canvasElement.height);
		ctx.getContextAttributes().willReadFrequently = true;
		const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
		const data = imageData.data;
	
		for (let i = 0; i < data.length; i += 4) {
		const red = data[i];
		const green = data[i + 1];
		const blue = data[i + 2];
	
		// You can implement your own logic here
		if (isCloseToGreen([red, green, blue])) {
			// if (isCloseToGray([red, green, blue])) {
			data[i + 3] = 0;
		}
		}
	
		ctx.putImageData(imageData, 0, 0);
	
		requestAnimationFrame(processFrame);
	}
	
	processFrame();
	}
	
	function isCloseToGreen(color) {
	const [red, green, blue] = color;
	return green > 90 && red < 90 && blue < 90;
	}
	
	function hideElement(element) {
	element.classList.add('hide');
	element.classList.remove('show');
	}
	function showElement(element) {
	element.classList.add('show');
	element.classList.remove('hide');
	}
	
	const mediaElement = document.querySelector('#mediaElement');
	let mediaCanPlay = false;
	mediaElement.onloadedmetadata = () => {
	mediaCanPlay = true;
	mediaElement.play();
	
	showElement(bgCheckboxWrap);
	};
	const canvasElement = document.querySelector('#canvasElement');
	
	const bgCheckboxWrap = document.querySelector('#bgCheckboxWrap');
	const bgInput = document.querySelector('#bgInput');
	bgInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		renderCanvas();
	}
	});
	