let allied,
    enemy,
    basepwr = 0,
    attackbtn = 0,
    isdoneSelect = false;

let audio = new Audio('Hedwig.mp3')
audio.loop = true


const gamestart = () => {
    isdoneSelect = false
    document.querySelector('.container').style.visibility = 'hidden'
    let start = document.createElement('button')
    start.textContent = 'Revelio'
    start.className = 'startbtn'
    document.querySelector('body').append(start)
    document.addEventListener('click' , ({target}) =>{
        if (target.className === 'startbtn') {
            audio.play()
            target.style.visibility = 'hidden'
            document.querySelector('.container').style.visibility = ''
        }
    })
}

const newenemy = () => {
    if (enemy.health <= '0') {
        enemy.health = '0'
        enemy.counter = '0'
        document.querySelector('#enemychar').innerHTML = enemy.health
        if (enemy.health === '0'){
            document.addEventListener ('click', ({ target }) => {
                if (target.className === 'character') {
                    enemy = target.dataset
                    document.querySelector('#enemychar').innerHTML = enemy.health
                    target.style.border = '10px solid rgb(153, 0, 0)'
                    target.classList.remove('character');
                }
            })
            isclass = document.getElementsByClassName('character');
            if (isclass.length <= 0 && allied.health > '0') {
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
    if(allied.health <= '0') {
        allied.health = '0'
        document.querySelector('#yourchar').innerHTML = allied.health
        allied.attack = 0
        document.querySelector('#attack').innerHTML = ''
        let lost = document.createElement('p')
        lost.innerHTML =`You lost!`
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
            attackbtn = allied.attack
            actualpwr = basepwr += parseInt(attackbtn)
            enemy.health -= actualpwr
            allied.health -= enemy.counter
            document.querySelector('#yourchar').innerHTML = allied.health
            document.querySelector('#enemychar').innerHTML = enemy.health
        }
        newenemy()
        gameover()
    })
}

document.addEventListener ('click', ({ target }) => {
    if (target.className === 'character' && !allied) {
        document.querySelector('.intro').innerHTML = ''
        allied = target.dataset
        basepwr = parseInt(target.dataset.attack)
        document.querySelector('#yourchar').textContent = allied.health
        target.classList.remove('character')
        target.style.border = '10px solid rgb(42, 152, 255)';
    } else {
        if (target.className === 'character' && !isdoneSelect){
        enemy = target.dataset
        document.querySelector('#enemychar').innerHTML = enemy.health
        target.classList.remove('character');
        target.style.border = '10px solid rgb(153, 0, 0)'
        isdoneSelect = true
        attackpower()
        }
    }
})

gamestart()