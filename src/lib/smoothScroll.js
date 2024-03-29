// https://stackoverflow.com/questions/47011055/smooth-vertical-scrolling-on-mouse-wheel-in-vanilla-javascript

export default class SmoothScroll {
	constructor(target, speed, smooth) {
	  this.target = target;
	  this.speed = speed;
	  this.smooth = smooth;
	  this.moving = false;
	  this.pos = this.target.scrollTop;
	  this.frame =
		 this.target === document.body && document.documentElement
			? document.documentElement
			: this.target; // safari is the new IE
 
	  this.scrolled = this.scrolled.bind(this);
	}
 
	init() {
	  this.target.addEventListener('mousewheel', this.scrolled, { passive: false });
	  this.target.addEventListener('DOMMouseScroll', this.scrolled, { passive: false });
	}
 
	scrolled(e) {
	  e.preventDefault(); // disable default scrolling
 
	  const delta = this.normalizeWheelDelta(e);
 
	  this.pos += -delta * this.speed;
	  this.pos = Math.max(0, Math.min(this.pos, this.target.scrollHeight - this.frame.clientHeight)); // limit scrolling
 
	  if (!this.moving) this.update();
	}
 
	normalizeWheelDelta(e) {
	  if (e.detail) {
		 if (e.wheelDelta) return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
		 else return -e.detail / 3; // Firefox
	  } else return e.wheelDelta / 120; // IE, Safari, Chrome
	}
 
	update() {
	  this.moving = true;
 
	  const delta = (this.pos - this.target.scrollTop) / this.smooth;
 
	  this.target.scrollTop += delta;
 
	  if (Math.abs(delta) > 0.5) requestAnimationFrame(this.update.bind(this));
	  else this.moving = false;
	}
 
	dispose() {
	  this.target.removeEventListener('mousewheel', this.scrolled);
	  this.target.removeEventListener('DOMMouseScroll', this.scrolled);
	}
 }
 