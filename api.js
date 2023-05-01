export const database = [
    { name: 'CAPTAIN AMERICA', imgUrl: 'https://wallpapercave.com/dwp1x/wp4329171.jpg' },
    { name: 'THOR: THE DARK WORLD', imgUrl: 'https://wallpaperaccess.com/full/645154.jpg' },
    { name: 'PIRATES OF THE CARIBBEAN', imgUrl: 'https://wallpapercave.com/dwp1x/ROtWhfD.jpg' },
    { name: 'URI: THE SURGICAL STRIKE', imgUrl: 'https://wallpapercave.com/dwp1x/wp4569910.jpg' },
    { name: 'KGF: CHAPTER 1', imgUrl: 'https://wallpapercave.com/dwp1x/wp8029195.jpg' }

]
export const availability = {
    'CAPTAIN AMERICA': [1, 2, 3, 5, 8, 9, 10, 12, 15, 19, 22, 20, 11],
    'THOR: THE DARK WORLD': [1, 2, 3, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 24],
    'PIRATES OF THE CARIBBEAN': [1, 2, 5, 6, 15, 18, 19, 20, 23, 24],
    'URI: THE SURGICAL STRIKE': [4, 6, 8, 10, 11, 12, 13, 14, 15, 16],
    'KGF: CHAPTER 1': [3, 5, 7, 9, 20, 21, 12, 13, 19, 24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availability) {
                if (m === movieName) resolve(availability[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }

