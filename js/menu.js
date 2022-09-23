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

    btnMenu.setAttribute('id', item.id)

    // inserindo o texto
    btnMenu.textContent = item.name;

    btnMenu.addEventListener('click', () => {
        
        const valor = btnMenu.textContent;

        document.querySelector('#scene' + valor).scrollIntoView({behavior: 'smooth'});

    })

})

// elementos
const liMenu = document.createElement('li');
const btnMenu = document.createElement('button');


iconeMenu.innerHTML = '<i class="ph-caret-right-bold text-white fs-1"></i>';
iconeMenu.classList.add('d-flex', 'align-items-center', 'justify-content-center');

menu.classList.add('d-none');

iconeMenu.addEventListener('click', () => {

    menu.classList.toggle('open');

    if ( menu.classList.contains('open')) {

        menu.classList.remove('d-none');

        iconeMenu.innerHTML = '<i class="ph-caret-left-bold text-white fs-1"></i>';
        click.classList.add('hAuto');

    } else {
        click.classList.remove('hAuto');
        iconeMenu.innerHTML = '<i class="ph-caret-right-bold text-white fs-1"></i>';
        menu.classList.add('d-none');
    }

});
