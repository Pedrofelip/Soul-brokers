const controls = document.querySelectorAll('.control');
let currentItem = 0
const itens = document.querySelectorAll('.item');
const maxItens = itens.length;

controls.forEach(control => {
    control.addEventListener('click',() => {
        const isLeft = control.classList.contains('arrow-left');
        
        if (isLeft) {
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if (currentItem >= maxItens) {
            currentItem = 0;
        }

        if (currentItem <0 ) {
            currentItem = maxItens - 1;
        }

        itens.forEach(item => item.classList.remove('current-item'));

        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        itens[currentItem].classList.add("current-item");
    });
});