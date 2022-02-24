const getGoods = () => {

    const links = document.querySelectorAll('.navigation-link')

    getData = () => {
        fetch('db/db.json')
            .then((response) => response.json())

            .then((data) => {
                localStorage.setItem("result", JSON.stringify(data))
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

    /*localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5,]))
    let good = (JSON.parse(localStorage.getItem('goods')))
    console.log(good)*/
}

getGoods()