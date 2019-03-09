let allied, 
    enemy,
    isdoneSelect,
    attacklog

const reset = () => {
    allied = ''
    enemy = ''
    isdoneSelect = false
    document.querySelector('#attack').innerHTML = ''
    document.querySelector('#actioncontainer').style.visibility = 'hidden'
}

const attack = () => {
    let attack = document.createElement('button')
    attack.textcontent = 'Attack!'
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
