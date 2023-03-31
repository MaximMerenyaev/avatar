document
    .querySelector(`#username`)
    .addEventListener(`input`, (ev)=>{
        console.log(ev.target.value)
        document
            .querySelector(`.username-container`)
            .innerHTML = ev.target.value
    })

document
    .querySelector(`#frame-picker`)
    .addEventListener(`input`, (ev)=>{
        console.log(ev.target.value)
        document
            .querySelector(`.frame`)
            .style.backgroundColor = ev.target.value
    })

document
    .querySelector(`#tshirt-picker`)
    .addEventListener(`input`, (ev)=>{
        console.log(ev.target.value)
        document
            .querySelector(`.tshirt-color`)
            .style.fill = ev.target.value
    })

document
    .querySelector(`#frame-select`)
    .addEventListener(`input`, (ev)=>{
        console.log(ev.target.value)
        document
        .querySelector(`.frame`)
        .classList = `frame frame-${ev.target.value}`
    })

document
    .querySelector(`#hair-range`)
    .addEventListener(`input`, (ev)=>{
        console.log(ev.target.value)
        document
            .querySelector(`.hair`)
            .src = `assets/hair-${ev.target.value}.svg`
    })

///////////////////////////////////////////////////////////////////
//////////////////////////////////// ДЗ ///////////////////////////
///////////////////////////////////////////////////////////////////

function func(name){
    document
    .querySelector(`#${name}-check`)
    .addEventListener(`input`, (ev)=>{
        if (ev.target.checked){
            document
                .querySelector(`#${name}-range`)
                .disabled = false
            document
                .querySelector(`.${name}`)
                .classList.remove(`hidden`)

            document
            .querySelector(`#${name}-range`)
            .addEventListener(`input`, (ev)=>{
                document
                    .querySelector(`.${name}`)
                    .src = `assets/${name}-${ev.target.value}.svg`
            })
        } else {
            document
                .querySelector(`#${name}-range`)
                .disabled = true

            document
                .querySelector(`.${name}`)
                .classList.add(`hidden`)
        }
    })
}

func(`hat`)

func(`glasses`)

func (`earings`)


// document
//     .querySelector(`#hat-check`)
//     .addEventListener(`input`, (ev)=>{
//         if (ev.target.checked){
//             document
//                 .querySelector(`#hat-range`)
//                 .disabled = false
//             document
//                 .querySelector(`.hat`)
//                 .classList.remove(`hidden`)

//             document
//             .querySelector(`#hat-range`)
//             .addEventListener(`input`, (ev)=>{
//                 document
//                     .querySelector(`.hat`)
//                     .src = `assets/hat-${ev.target.value}.svg`
//             })
//         } else {
//             document
//                 .querySelector(`#hat-range`)
//                 .disabled = true

//             document
//                 .querySelector(`.hat`)
//                 .classList.add(`hidden`)
//         }
//     })