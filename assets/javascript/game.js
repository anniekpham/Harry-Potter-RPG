let allied,
    allieshealth,
    alliesattack,
    enemy,
    enemyshealth,
    enemysattack,
    attackbtn,
    isdoneSelect = false,
    attacklog
// let characters = {  //charcters[0].imgUrl
//     'Harry': {
//         name: 'Harry Potter',
//         health: 100,
//         attack: 15,
//         countattact: 8,
//         imgUrl: 'harry.jpg'
//     },
//     'Snape': {
//         name: 'Professor Snape',
//         health: 120,
//         attack: 13,
//         countattact: 9,
//         imgUrl: '../images/Snape.jpg'
//     },
//     'Voldemort': {
//         name: 'Lord Voldemort',
//         health: 150,
//         attack: 16,
//         countattact: 11,
//         imgUrl: '../images/Voldemort.jpeg'
//     },
//     'Bellatrix': {
//         name: 'Bellatrix Lestrange',
//         health: 130,
//         attack: 11,
//         countattact: 10,
//         imgUrl: '../images/Bellatrix.jpg'
//     }
// }

//example loop
// for(var i = 0; i<= characters.length; i++){
//     let html = 
    
//     <div>
//     <p>`${characters[i].name}`</p>
    
//     </div>
    
    //push this into the html each time
// }
let audio = new Audio('Hedwig.mp3')
audio.loop = true

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

const newenemy = () => {
    if (enemyshealth <= attackbtn) {
        enemyshealth = 0
        document.querySelector('#enemychar').innerHTML = enemyshealth
        if (enemyshealth === 0){
            document.querySelector('#enemychar').innerHTML = ''
            enemy = ''
            enemysattack = ''
            enemyshealth = ''
            !isdoneSelect
            document.querySelector('#attack').textContent = ''
        }
    }
}

const attackpower = () => {
    document.addEventListener('click', ({target}) => {
        if (target.className === 'attack') {
            attackbtn = alliesattack
            enemyshealth -= attackbtn
            allieshealth -= enemy.counter
            document.querySelector('#yourchar').innerHTML = allieshealth
            document.querySelector('#enemychar').innerHTML = enemyshealth
            alliesattack += parseInt(attackbtn)
            console.log(attackbtn)
        }
        // newenemy()
    })
}

document.addEventListener ('click', ({ target }) => {
    if (target.className === 'character' && !allied) {
        audio.play()

        document.querySelector('#actioncontainer').style.visibility = ''

        allied = target.dataset

        allieshealth = target.dataset.health

        alliesattack = target.dataset.attack

        document.querySelector('#yourchar').innerHTML = allieshealth

        document.querySelector('#character').disabled = true;

    } else {
        if (target.className === 'character' && !isdoneSelect){

        enemy = target.dataset

        enemyshealth = target.dataset.health

        enemysattack = target.dataset.attack

        document.querySelector('#enemychar').innerHTML = enemyshealth
        
        // document.querySelector('#character').disabled = true;

        isdoneSelect = true
        attack()
        attackpower()
        }
    }
})

reset()
