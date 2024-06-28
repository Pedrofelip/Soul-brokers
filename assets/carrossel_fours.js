const controls_fours = document.querySelectorAll('.control_fours');
let currentItem_fours = 0
const itens_fours = document.querySelectorAll('.item_fours');
const maxItens_fours = itens_fours.length;

controls_fours.forEach(control => {
    control.addEventListener('click',() => {
        const isLeft = control.classList.contains('arrow_left_fours');
        
        if (isLeft) {
            currentItem_fours -= 1;
        }else{
            currentItem_fours += 1;
        }

        if (currentItem_fours >= maxItens_fours) {
            currentItem_fours = 0;
        }

        if (currentItem_fours < 0 ) {
            currentItem_fours = maxItens_fours - 1;
        }

        itens_fours.forEach(item => item.classList.remove('current_item_fours'));

        itens_fours[currentItem_fours].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itens_fours[currentItem_fours].classList.add("current_item_fours");
    });
});