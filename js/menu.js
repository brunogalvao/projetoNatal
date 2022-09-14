const cenario = [
    { name: 01, id: 01 },
    { name: 02, id: 02 },
    { name: 03, id: 03 },
    { name: 04, id: 04 },
]

const menu = document.querySelector('.menu > ol');
const click = document.querySelector('.menu');
const iconeMenu = document.querySelector('.menu > .iconeMenu');

cenario.map(item => {

    // elementos
    const liMenu = document.createElement('li');
    const btnMenu = document.createElement('button');

    menu.appendChild(liMenu);
    liMenu.appendChild(btnMenu);

    // class
    liMenu.classList.add('p-2', 'd-flex', 'align-items-center', 'justify-content-center')
    btnMenu.classList.add('rounded-pill', 'border-0', 'bg-gradient')

    // inserindo o texto
    btnMenu.textContent = item.name;

})

// elementos
const liMenu = document.createElement('li');
const btnMenu = document.createElement('button');


iconeMenu.innerHTML = '<i class="fa-solid fa-chevron-right fa-lg text-white icoMenu"></i>';
iconeMenu.classList.add('d-flex', 'align-items-center', 'justify-content-center');

menu.classList.add('d-none');

iconeMenu.addEventListener('click', () => {

    menu.classList.toggle('open');

    if ( menu.classList.contains('open')) {

        menu.classList.remove('d-none');

        iconeMenu.innerHTML = '<i class="fa-solid fa-chevron-left fa-lg text-white icoMenu"></i>';
        click.classList.add('hAuto');

    } else {
        click.classList.remove('hAuto');
        // menu.appendChild(liMenu).classList.add('d-flex', 'justify-content-center');
        iconeMenu.innerHTML = '<i class="fa-solid fa-chevron-right fa-lg text-white icoMenu"></i>';
        menu.classList.add('d-none');
    }

});




// ==> Expressão com forEach

// cenario.forEach(function(item) {

//     const liMenu = document.createElement('li');
//     const btnMenu = document.createElement('button');

//     menu.appendChild(liMenu);
//     liMenu.appendChild(btnMenu);

//     // class
//     liMenu.classList.add('p-2', 'd-flex', 'align-items-center', 'justify-content-center')
//     btnMenu.classList.add('rounded-pill', 'border-0', 'bg-gradient') 

//     // inserindo o texto 
//     btnMenu.textContent = item.name;

// })
