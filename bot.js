const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return ["Halo dengan siapa ini?",
        `Hai ${data?.nama}, umur berapa?`,
        `Ouuh ${data?.umur}, lagi apa?`,
        `Mau nanya boleh gak?`,
        `Kamu sayang aku gak?`,
        `Hehe,aku juga kok`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (init === 1){
        botDelay({ nama: jawaban.value })
    } else if (init === 2){
        botDelay({ umur: jawaban.value })
    } else if (init === 3){
        botDelay({ kondisi: jawaban.value })
    } else if (init === 4) {
        botDelay({ nanya: jawaban.value })
    } else if (init === 5) {
        botDelay({ sayang: jawaban.value })
    } else if (init === 6) {
        finish()
    }else {
        end()
    }
}


function botDelay(jawabanUser) {
    console.log({userData: userData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finish() {
    pertanyaan.innerHTML = `Terima kasih sudah sayang `
    jawaban.value = "LOVE U"
}

function end() {
    alert("terima kasih")
    window.location.reload()
}