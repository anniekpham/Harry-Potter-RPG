let alliescounter,
    allieshealth,
    alliesattack,
    enemyscounter,
    enemyshealth,
    attackbtn = 0,
    isdoneSelect = false,
    attacklog

let audio = new Audio('Hedwig.mp3')
audio.loop = true

const gamestart = () => {
    alliescounter = ''
    enemy = ''
    isdoneSelect = false
    document.querySelector('#attack').innerHTML = ''
}

const newenemy = () => {
    if (enemyshealth <= attackbtn) {
        enemyshealth = 0
        enemyscounter = 0
        document.querySelector('#enemychar').innerHTML = enemyshealth
        if (enemyshealth === 0){
            !isdoneSelect
            document.addEventListener ('click', ({ target }) => {
                if (target.className === 'character') {
                    enemyscounter = target.dataset.counter
                    enemyshealth = target.dataset.health
                    document.querySelector('#enemychar').innerHTML = enemyshealth
                    target.style.border = '10px solid rgb(153, 0, 0)'
                    target.classList.remove('character');
                }
            })
            isclass = document.getElementsByClassName('character');
            if (isclass.length > 0) {
                
            } else {
                document.querySelector('#attack').innerHTML = ''
                let won = document.createElement('p')
                won.innerHTML ='YOU WON!'
                won.className = 'result'
                document.querySelector('#actioncontainer').append(won)
            }
        }
    }
}

const gameover = () => {
    if(allieshealth <= enemyscounter) {
        allieshealth = 0
        document.querySelector('#yourchar').innerHTML = allieshealth
        alliesattack = 0
        document.querySelector('#attack').innerHTML = ''
        let lost = document.createElement('p')
        lost.innerHTML =`You've been defeated!`
        lost.className = 'result'
        document.querySelector('#actioncontainer').append(lost)
        document.addEventListener("click",handler,true);
        function handler(e){
            e.stopPropagation();
            e.preventDefault();
        }
    }
}

const attackpower = () => {
    let attack = document.createElement('button')
    attack.textContent = 'Expelliarmus!'
    attack.className ='attack'

    document.querySelector('#attack').append(attack)

    document.addEventListener('click', ({target}) => {
        if (target.className === 'attack') {
            attackbtn = alliesattack
            alliesattack += parseInt(attackbtn)
            enemyshealth -= attackbtn
            allieshealth -= enemyscounter
            document.querySelector('#yourchar').innerHTML = allieshealth
            document.querySelector('#enemychar').innerHTML = enemyshealth
        }
        newenemy()
        gameover()
    })
}

document.addEventListener ('click', ({ target }) => {
    if (target.className === 'character' && !alliescounter) {
        audio.play()
        document.querySelector('.intro').innerHTML = ''
        alliescounter = target.dataset.counter
        allieshealth = target.dataset.health
        alliesattack = parseInt(target.dataset.attack)
        document.querySelector('#yourchar').textContent = allieshealth
        target.classList.remove('character')
        target.style.border = '10px solid rgb(42, 152, 255)';
    } else {
        if (target.className === 'character' && !isdoneSelect){
        enemyscounter = target.dataset.counter
        enemyshealth = target.dataset.health
        document.querySelector('#enemychar').innerHTML = enemyshealth
        target.classList.remove('character');
        target.style.border = '10px solid rgb(153, 0, 0)'
        isdoneSelect = true
        attackpower()
        }
    }
})

gamestart()