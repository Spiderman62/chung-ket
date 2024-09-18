const navigation = {
	open:document.querySelector('header .open'),
	close:document.querySelector('.modal-navigation .close'),
	modal:document.querySelector('.modal-navigation'),
	main(){
		const _this = this;
		this.open.addEventListener('click',e=>{
			_this.modal.classList.add('active');
		});
		this.close.addEventListener('click',e=>{
			_this.modal.classList.remove('active');
		});
	}
}
navigation.main();