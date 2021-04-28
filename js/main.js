const board1 = document.querySelector(".board");
var clicked = []
var IDs = []
const takkenOut = []
const score = document.querySelector('#score')


//array of objects thst holds all the values and the photos[like a dictionary]
const cards = [
    { disc: 'boat', src: './img/boat.jpg' }
    ,
    { disc: 'Jeddah', src: './img/Jeddah.jpg' }
    ,
    { disc: 'lake', src: './img/lake.jpg' }
    ,
    { disc: 'mountain', src: './img/mountain.jpg' }
    ,
    { disc: 'pose', src: './img/pose.jpg' }
    ,
    { disc: 'tiny-house', src: './img/tiny-house.jpg' }
    ,
    { disc: 'boat', src: './img/boat.jpg' }
    ,
    { disc: 'Jeddah', src: './img/Jeddah.jpg' }
    ,
    { disc: 'lake', src: './img/lake.jpg' }
    ,
    { disc: 'mountain', src: './img/mountain.jpg' }
    ,
    { disc: 'pose', src: './img/pose.jpg' }
    ,
    { disc: 'tiny-house', src: './img/tiny-house.jpg' }

]



// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// we shuffle the cards rondomly so we don't have the same board over and over again each time we refresh the game
cards.sort(() => .5 - Math.random())

// it will go throght the array of object and creat a card(img) for each one with an id and append it to the board.
function board() {
    for (i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './img/q.png')
        card.setAttribute('id', i)
        board1.append(card)
        // creat an event lestener on click that call the function click.
        card.addEventListener('click', click)
        //     cardId = this.getAttribute('id')
        //     clicked.push(cards[cardId].disc)
        //     IDs.push(cardId)
        //     this.setAttribute('src', cards[cardId].src)
        //     if (clicked.length == 2) {
        //         setTimeout(match, 1000)

        //     }
        // })


    }
}

// it will take the card id for each item we click on and push the name of the item in clicked and push the id in ID's
// then change the image source to the image original image . 
function click() {
    cardId = this.getAttribute('id')
    clicked.push(cards[cardId].disc)
    IDs.push(cardId)
    this.setAttribute('src', cards[cardId].src)
    if (clicked.length == 2) {
        setTimeout(match, 1000)

    }
}


// clicked use cases, and if it's a match or not.
function match() {
    const images = document.querySelectorAll('img')

    // it will ompare with the ID's first to check if it's the same image was clicked twice or not
    if (IDs[0] == IDs[1]) {
        alert('you chosed the same image twice 🤦')
        images[IDs[0]].setAttribute('src', './img/q.png')
        images[IDs[1]].setAttribute('src', './img/q.png')
    }

    //  if it wasn't the same images clicked twice then it compare with the name dicribtion of the image if it's the same then it's a match and remove the event listener from it 
    else if (clicked[0] == clicked[1]) {
        console.log("it's a match !🤸")
        images[IDs[0]].setAttribute('src', './img/check.png')
        images[IDs[1]].setAttribute('src', './img/check.png')
        images[IDs[0]].removeEventListener("click", click)
        images[IDs[1]].removeEventListener("click", click)

        takkenOut.push(clicked)


    }
    //  , if not then reset to the defult image source

    else {
        images[IDs[0]].setAttribute('src', './img/q.png')
        images[IDs[1]].setAttribute('src', './img/q.png')
    }
    //  we refresh the score by adding 1 if it was a match , then reset the ID's and clicked so it contain two items ONLY again.
    score.innerHTML = takkenOut.length
    IDs = []
    clicked = []
    // if takkenout was equal to the cards/2 (Number of items) then print the congrats msg.
    if (takkenOut.length === (cards.length / 2)) {
        const heading = document.querySelector("h1")
        heading.innerHTML = "Congrats 🎉"
        alert("Congrats 🎉")


    }

}


board()
