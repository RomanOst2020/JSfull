const select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    let выборПользователя = select.value;

    switch (выборПользователя) {
        case 'солнечно':
            para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
        break;
        case 'rainy':
            para.textContent = 'Сегодня дождливо. Наденьте курточку и возьмите зонт';
        break;
        case 'снежно':
            para.textContent = 'Сегодня снежно и морозно. Оденьтесь потеплее и шапку одевайте.';
            break;
        case 'overcast':
            para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту поэтому на всякий случай возьмите дождевик.';
            break;
        
        default:
            para.textContent = '';


    }
}
