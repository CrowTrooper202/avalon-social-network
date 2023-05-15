// const username = [
//     'billyBob23',
//     'aAron42',
//     'willyNilly89',
//     'bermeseStud2000',
// ]

// const email = [
//     'billyBob23@gamil.com',
//     'aAron42@comcast.net',
//     'willyNilly89@yahoo.com',
//     'bermeseStud2000@army.gov',
// ]

// const text = [
//     'I was told to say something clever',
//     'Well here goes nothing',
//     'world peace is only a nuclear trigger away',
//     "the world's been burn'in, since the world's been turn'in",
// ]

// const reactText = [
//     'is that the best you can come up with',
//     'nice try buddy',
//     "well that's depressing",
//     'nice'
// ]

// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const getRandomName = () =>
//   `${getRandomArrItem(username)} ${getRandomArrItem(email)}`

// const getRandomText = (int) => {
//     const results =[]
//     for (let i = 0; i < int; i++) {
//         results.push({
//             thoughtText: getRandomArrItem(text),
//             username: getRandomArrItem(username)

//         })
        
//     }
//     return results
// }

// const getRandomReact = (int) => {
//     const results =[]
//     for (let i = 0; i < int; i++) {
//         results.push({
//             reactionBody: getRandomArrItem(reactText),
//             username: getRandomArrItem(username)
//         })
        
//     }
//     return results
// }

// module.export = {getRandomName, getRandomText, getRandomReact}