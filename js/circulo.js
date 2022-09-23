// const circle = document.querySelector('#circleAnimation');


// window.addEventListener("scroll", () => {
//     let scroll = parseFloat(scrollY);

//     const progress = Math.round((scroll * 440) / 1710);


//     circle.style.strokeDashoffset = 440 - (440 * progress) / 100;


//     console.log('scroll: ', scroll, 'porcentagem: ', progress);

// });


// função circulo
gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('#circleAnimation');
const tela = window.screen.width;

if (pinnedImageWrappers) {
    pinnedImageWrappers.forEach((wrapper) => {
        const inner = wrapper.querySelector('.js-inner');

        const totalScenas = gsap.utils.toArray(".scene").length - 1;

        const proporcao = tela / totalScenas;

        const total = ((440 * proporcao) / 10) + 440;

        // console.log(totalScenas);

        // window.addEventListener("scroll", () => {

        //     let scroll = parseFloat(scrollY);
        //     // let progress = Math.round((totalScenas * proporcao));
        //     let progress = Math.round(((totalScenas * 0.066) + scroll) / 4.8);
        //     circle.style.strokeDashoffset = 440 - (440 * progress) / 100;

        //     console.log(progress)

        // })

        window.addEventListener("scroll", () => {
            // let scroll = parseFloat(scrollY);
            let scroll = Math.round(scrollY);

            const progress = Math.round((scroll * 440) / total);
            const msg = document.querySelector('.logoCTBA > span');

            if (progress >= 100) {

                circle.style.strokeDashoffset = (440 - (440 * 100) / 100);
                msg.textContent = "Feliz Natal";

            } else {

                circle.style.strokeDashoffset = (440 - (440 * progress) / 100);
                msg.innerHTML = "Arraste <i class='ph-arrow-up'></i>";

            }

            console.log(progress);

        });

    })
}

// window.addEventListener("scroll", () => {
//     let scroll = parseFloat(scrollY);

//     if (tela <= 391) {

//         document.querySelector('.box-circle').classList.remove('d-none')

//         let progress = Math.round(((totalScene * 0.066) + scroll) / 4.8);
//         circle.style.strokeDashoffset = 440 - (440 * progress) / 100;

//     } else {
//         // box-circle

//         document.querySelector('.box-circle').classList.add('d-none')
//     }

//     // console.log(totalScene, scroll);

// });
// função circulo
// tela <= 390 : document.querySelector('.box-circle').classList.remove('d-none') ? document.querySelector('.box-circle').classList.add('d-none');