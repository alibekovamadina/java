// выводит окошко на экран
// alert('madina')

document.querySelector('info__link').addEventListener(\click , function () {
    this.remove();
    document.querySelector('info__text').classList.add('info__text--active');
}); 