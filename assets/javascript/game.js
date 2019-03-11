let allied, 
    enemy,
    isdoneSelect = false,
    attacklog
let characters = {  //charcters[0].imgUrl
    'Harry': {
        name: 'Harry Potter',
        health: 100,
        attack: 15,
        countattact: 8,
        imgUrl: '../images/harry.jp'
    },
    'Snape': {
        name: 'Professor Snape',
        health: 120,
        attack: 13,
        countattact: 9,
        imgUrl: '../images/Snape.jp'
    },
    'Voldemort': {
        name: 'Lord Voldemort',
        health: 150,
        attack: 16,
        countattact: 11,
        imgUrl: '../images/Voldemort.jpeg'
    },
    'Bellatrix': {
        name: 'Bellatrix Lestrange',
        health: 130,
        attack: 11,
        countattact: 10,
        imgUrl: '../images/Bellatrix.jp'
    }
}

const reset = () => {
    allied = ''
    enemy = ''
    isdoneSelect = false
    document.querySelector('#attack').innerHTML = ''
    document.querySelector('#actioncontainer').style.visibility = 'hidden'
}

const attack = () => {
    let attack = document.createElement('button')
    attack.textContent = 'Attack!'
    attack.className ='attack'

    document.querySelector('#attack').append(attack)

}

const attackpower = () => {
    document.addEventListener('click', ({target}) => {
        if (target.className === 'attack') {
            console.log('yay')
        }
    })
}

document.addEventListener ('click', ({ target }) => {
    if (target.className === 'character' && !allied) {

        document.querySelector('#actioncontainer').style.visibility = ''

        allied = target.dataset.value

        document.querySelector('#yourchar').textContent = allied

        document.querySelector('#character').disabled = true;

    } else {
        if (target.className === 'character' && !isdoneSelect){

        enemy = target.dataset.value

        document.querySelector('#enemychar').textContent = enemy
        
        // document.querySelector('#character').disabled = true;

        isdoneSelect = true
        attack(attackpower())
        }
    }
})

reset()



// //example loop
// for(var i = 0; i<= characters.length; i++){
//     let html = 
    
//     <div>
//     <p>`${characters[i].name}`</p>
    
//     </div>
    
//     //push this into the html each time
// }