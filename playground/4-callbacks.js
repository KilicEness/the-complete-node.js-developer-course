/* setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Enes', 'Ahmet', 'Ayşe']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        }

        callback(data)
    }, 2000)

}

geocode('Ankara', (data) => {
    console.log(data)
})
 */

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})