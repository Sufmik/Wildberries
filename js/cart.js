const cart = function () {
    const btnCart = document.querySelector('.button-cart')

    const cart = document.getElementById('modal-cart')

    //const closeBtn = document.querySelector('.modal-close')

    const closeBtn = cart.querySelector('.modal-close')


    btnCart.addEventListener('click', () => { cart.style.display = 'flex' })

    closeBtn.addEventListener('click', () => { cart.style.display = '' })
}

cart()