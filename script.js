/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// video.addEventListener('DOMContentLoaded', () => {
	
// })
video.addEventListener('timeupdate', () => {
	const percent = (video.currentTime/video.duration)*100;
	progressBar.style.width = `${percent}%`;
});
toggle.addEventListener('click', () => {
	if(video.paused) {
		video.play();
		toggle.textContent=`❚❚`;
	} else {
		video.pause();
		toggle.textContent = `►`;
	}
});

ranges.forEach(range => {
	range.addEventListener('input', () => {
		video[range.name] = range.value;
	});
});

skipButtons.forEach(skipBtn => {
	skipBtn.addEventListener('click', () => {
		video.currentTime += parseFloat(skipBtn.dataset.skip);
	});
});
