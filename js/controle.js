// Register scrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// Get all .js-pinned-images
// const pinnedImageWrappers = document.querySelectorAll('.js-wrap');

// // Check if pinned image containers exist
// if (pinnedImageWrappers) {
//   pinnedImageWrappers.forEach((wrapper) => {

//     const inner = wrapper.querySelector('.js-inner');
//     const arbustos = document.querySelector('.arbustos > span');
//     const araucaria = document.querySelector('.araucaria > span');
//     const logoSmall = document.querySelectorAll('.logoSmall');
//     const passeio = document.querySelector('.passeio');
//     const parqueNautico = document.querySelector('.parqueNautico');
//     // const contentWrapper = document.querySelector('section');
//     const parqueTangua = document.querySelector('.parqueTangua');
//     const federal = document.querySelector('.federal');
//     const escola = document.querySelector('.escola');

//     gsap.to(inner, {
//       x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',
//       ease: 'none',
//       scrollTrigger: {
//         start: 'top top',
//         trigger: wrapper,
//         pin: '.allContent',
//         scrub: true,
//         markers: true,
//         invalidateOnRefresh: true,
//         delay: 1,
//         end: () => `+=${inner.offsetWidth}`
//       }
//     });

//     gsap.to(araucaria, {
//       x: -380,
//       position: 'absolute',
//       ease: 'none',
//       scrollTrigger: {
//         start: 'top top',
//         trigger: wrapper,
//         pin: '.allContent',
//         scrub: true,
//         markers: true,
//         invalidateOnRefresh: true,
//         end: () => `+=${inner.offsetWidth}`
//       }
//     })


//     gsap.to(arbustos, {
//       x: -200,
//       position: 'absolute',
//       ease: 'none',
//       scrollTrigger: {
//         start: 'top top',
//         trigger: wrapper,
//         pin: '.allContent',
//         scrub: true,
//         markers: true,
//         invalidateOnRefresh: true,
//         end: () => `+=${inner.offsetWidth}`
//       }
//     })

//     gsap.to(logoSmall, {
//       position: 'absolute',
//       start: 'bottom'
//     });

//     gsap.to(passeio, {
//       position: 'absolute',
//     });

//     gsap.to(parqueNautico, {
//       position: 'absolute',
//     });

//     gsap.to(parqueTangua, {
//       position: 'absolute',
//     });

//     gsap.to(federal, {
//       position: 'absolute',
//     });

//     gsap.to(escola, {
//       position: 'absolute',
//     });

//     gsap.to(contentWrapper, {
//       position: 'absolute',
//     });
//   });
// }


gsap.registerPlugin(ScrollTrigger);

const pinnedImageWrappers = document.querySelectorAll('.js-wrap');

// funcao Array wrapper
if (pinnedImageWrappers) {
  pinnedImageWrappers.forEach((wrapper) => {
    const inner = wrapper.querySelector('.js-inner');
    const arbustos = document.querySelector('.arbustos > span');
    const araucaria = document.querySelector('.araucaria > span');
    // const logoSmall = document.querySelectorAll('.logoSmall');
    const passeio = document.querySelector('.passeio');
    const parqueNautico = document.querySelector('.parqueNautico');
    const parqueTangua = document.querySelector('.parqueTangua');
    const federal = document.querySelector('.federal');
    const escola = document.querySelector('.escola');
    const carrosselPasseio = document.querySelector('.carrosselPasseio');
    const memorialParanista = document.querySelector('.memorialParanista');
    const musica = document.querySelector('.musica');
    const palacioAvenida = document.querySelector('.palacioAvenida');
    const arvoreNatal = document.querySelector('.arvoreNatal');
    const rodaGigante = document.querySelector('.rodaGigante');
    const cavaloCarrossel = document.querySelector('.cavaloCarrossel');

    let duration = 10,
      sections = gsap.utils.toArray(".scene"),
      // sectionIncrement = duration / (sections.length - 1),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => `+=${inner.offsetWidth}`
        }
      });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: duration,
      ease: "none"
    });

    gsap.to(araucaria, {
      x: -280,
      position: 'absolute',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })


    gsap.to(arbustos, {
      x: -980,
      position: 'absolute',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })


    // gsap.to(logoSmall, {
    //   position: 'absolute',
    //   start: 'bottom'
    // });

    gsap.to(passeio, {
      position: 'absolute',
    });

    gsap.to(parqueNautico, {
      position: 'absolute',
    });

    gsap.to(parqueTangua, {
      position: 'absolute',
    });

    gsap.to(federal, {
      position: 'absolute',
    });

    gsap.to(escola, {
      position: 'absolute',
    });

    gsap.to(carrosselPasseio, {
      position: 'absolute',
    });

    gsap.to(memorialParanista, {
      position: 'absolute',
    });

    gsap.to(musica, {
      position: 'absolute',
    });

    gsap.to(palacioAvenida, {
      position: 'absolute',
    });

    gsap.to(arvoreNatal, {
      position: 'absolute',
    });

    gsap.to(rodaGigante, {
      position: 'absolute',
    });

    gsap.to(cavaloCarrossel, {
      position: 'absolute',
    });

  });
}