function orderToCall() {
    const order = document.querySelector('.order_to_call'),
          popUp = document.querySelector('.modal'),
          popUpCloser = document.querySelector('.modal_closer');
    
    order.addEventListener('click', () =>
    popUp.classList.toggle('modal_active'));
    popUpCloser.addEventListener('click', () =>
    popUp.classList.remove('modal_active'));
}
orderToCall();