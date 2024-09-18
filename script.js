// const section7 = {
// 	currentIndex: 0,
// 	section2: document.getElementById('section-7'),
// 	buttonLeft: document.querySelector('#section-7 .wrapper-button span.left'),
// 	buttonRight: document.querySelector('#section-7 .wrapper-button span.right'),
// 	items: document.querySelectorAll('#section-7 .section-7-slideshow .decent .item').length,
// 	interval:null,
// 	handle() {
// 		const _this = this;
// 		const slideshow = _this.section2.querySelector('.section-7-slideshow');
// 		const locationMove = slideshow.querySelector('.decent .item').offsetWidth + 7;// 393
// 		const decents = slideshow.querySelectorAll('.decent');
// 		decents.forEach(decent => {
// 			decent.style.transform = `translateX(-${_this.currentIndex * locationMove}px)`;
// 		});
// 	},
// 	handleLeft() {
// 		const _this = this;
// 		this.buttonLeft.addEventListener('click', e => {
// 			clearInterval(_this.interval);
// 			_this.resetAutoLoop();
// 			if(_this.currentIndex <= 0){
// 				_this.currentIndex = this.items - 1;
// 				_this.handle();
// 				return;
// 			}
// 			_this.currentIndex--;
// 			console.log(_this.currentIndex)
// 			_this.handle();
// 		})
// 	},
// 	handleRight() {
// 		const _this = this;
// 		this.buttonRight.addEventListener('click', e => {
// 			clearInterval(_this.interval);
// 			_this.resetAutoLoop();
// 			// handle above lenght
// 			if (_this.currentIndex === _this.items - 1) {
// 				_this.currentIndex = 0;
// 				_this.handle();
// 				return;
// 			}
// 			_this.currentIndex++;
// 			_this.handle();
// 		})
// 	},
// 	autoLoop(){
// 		const _this = this;
// 		_this.interval = setInterval(()=>{
// 			if(_this.currentIndex === _this.items - 1){
// 				_this.currentIndex = 0;
// 				_this.handle();
// 			}else{
// 				this.currentIndex++;
// 				_this.handle();
// 			}
// 		},4000)
// 	},
// 	resetAutoLoop(){
// 		this.autoLoop();
// 	},
// 	main() {
// 		this.handle();
// 		this.handleLeft();
// 		this.handleRight();
// 		this.autoLoop();
// 	}
// }
// section7.main();
// const section3 = {
// 	currentIndex:0,
// 	lists:document.querySelectorAll('#section-3 .slideshow img')[0].offsetWidth + 40,
// 	listsLength:document.querySelectorAll('#section-3 .slideshow img').length - 1,
// 	items:document.querySelectorAll('#section-3 .section-3--col:nth-child(2) ul li'),
// 	slideShow:document.querySelector('#section-3 .slideshow'),
// 	interval:null,
// 	handle(){
// 			this.slideShow.style.transform = `translateX(-${this.currentIndex * this.lists}px)`;
// 	},
// 	handleCatchEvent(){
// 		const _this = this;
// 		this.items.forEach((item,index)=>{
// 			item.addEventListener('click',e=>{
// 				clearInterval(_this.interval);
// 				_this.autoLoop();
// 				this.items.forEach(item=> item.classList.remove('active'));
// 				item.classList.add('active');
// 				_this.currentIndex = index;
// 				_this.handle();
// 			});
// 		})
// 	},
// 	autoLoop(){
// 		const _this = this;
// 		_this.interval = setInterval(()=>{
// 			if(_this.currentIndex === this.listsLength){
// 				_this.currentIndex = 0;
// 				_this.items.forEach(item=> item.classList.remove('active'));
// 				this.items[_this.currentIndex].classList.add('active');
// 				_this.handle();
// 			}else{
// 				_this.currentIndex++;
// 				_this.items.forEach(item=> item.classList.remove('active'));
// 				this.items[_this.currentIndex].classList.add('active');
// 				_this.handle();
// 			}
			
// 		},5000)
// 	},
// 	main(){
// 		this.handle();
// 		this.handleCatchEvent();
// 		this.autoLoop();
// 	}
// }
// section3.main();