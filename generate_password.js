// define sample function to randomly return an item in an array
function sample (collection){
    return collection[Math.floor(Math.random() * collection.length)]
}

// define generatePassword function
function generatePassword(options){
    // define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // create a collection to store things user picked up
    let collection = []
    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // remove things user do not need
    if (options.excludeCharacters){
        collection = collection.filter(character => {
            return !options.excludeCharacters.includes(character)
        })        
    }
    
    if (collection.length === 0)
        return 'There is no valid character from your selection.'

    let password = ''
    for (i = 0; i < options.length; i++) {
        password += sample(collection)
    }
    // return the generated password
    return password
}

module.exports = generatePassword