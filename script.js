const url = 'https://api.openweathermap.org/data/2.5/'
const key = '9889b51bca09ad1f3e747bff77805bf2'

const setQuerry = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = url + 'weather?q=' + cityName + '&appid=' + key + '&units=metric&lang=tr'
    console.log(query)
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result) 
    let city = document.querySelector('.city')
    city.innerText = result.name + result.sys.country

    let temp = document.querySelector('.temp')
    temp.innerText = Math.round(result.main.temp) + '°c'

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = Math.round(result.main.temp_min) + '°c' +  Math.round(result.main.temp_max)

}
const searchBar = document.getElementById('searchBar')
console.log(searchBar)
searchBar.addEventListener('keypress', setQuerry)
