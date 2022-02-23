const search = function () {
    const input = document.querySelector('.search-block > input')
    const btnSearch = document.querySelector('.search-block > button')

    input.addEventListener('input', (event) => {
        /*console.log(event.target.value)*/
    })

    btnSearch.addEventListener('click', () => {
        console.log(input.value)
    })
}

search()