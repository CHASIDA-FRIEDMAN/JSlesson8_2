//ex 1

//1
const frutis = [
    //2
    {
        name: 'banana',
        numCal: 20,
        price: 7,
        print() {
            console.log('------')
            for (const key in this) {
                if (typeof this[key] !== 'function')
                    console.log(key, this[key])
            }
        }
    },
    {
        name: 'apple',
        numCal: 10,
        price: 5,
        print() {
            console.log('------')
            for (const key in this) {
                if (typeof this[key] !== 'function')
                    console.log(key, this[key])
            }
        }
    },
    new Object()
]

//3
frutis[2].name = "peach"
frutis[2].numCal = 50
frutis[2].price = 20
frutis[2].print = function () {
    console.log('------')
    for (const key in this) {
        if (typeof this[key] !== 'function')
            console.log(key, this[key])
    }
}

//4
for (const fruit of frutis) {
    fruit.print()
}

//5
frutis[0].color = 'yellow'

//6
for (const i of frutis) {
    if ('color' in i) {
        i.print()
    }
}

//7
frutis[0].print = function () {
    console.log('------')
    for (const key in this) {
        if (typeof this[key] !== 'function')
            console.log(key, this[key])
    }
}

//8
delete frutis[1].price
let x = ""
for (const key in frutis[1]) {
    if (typeof frutis[1][key] !== 'function')
        x += key + ": " + frutis[1][key] + "<br>"
}
const p = document.createElement('p')
p.innerHTML = x
document.body.append(p)

//9
function f9() {
    let newp = document.getElementById("pri").value
    frutis[1].price = newp
    frutis[1].print()
}

//10
function f10() {
    let newcal = document.getElementById("cal").value
    const newfrutis = frutis.filter((item) => item.numCal <= newcal)
}

//11
for (const i of frutis) {
    Object.defineProperty(i, "Price",
        {
            get() { return i.price },
            set(p) {
                if (p > 10 && p < 10000)
                    i.price = p
            }
        }
    )
}

frutis[0].Price = 10000000000
frutis[0].print()

frutis[0].Price = 2
frutis[0].print()

//ex2

//1
function MessageBox(colortext, colorbackground, imgicon, message = { title: "", body: "" }) {
    this.colortext = colortext
    this.colorbackground = colorbackground
    this.imgicon = imgicon
    this.message = message
    this.render = () => {
        const d = document.createElement('div')
        const h = document.createElement('h1')
        h.innerHTML = this.message.title
        d.append(h)
        const h2 = document.createElement('h2')
        h2.innerHTML = this.message.body
        d.append(h2)
        d.style.color = this.colortext
        d.style.backgroundColor = this.colorbackground
        const img = document.createElement('img')
        img.src = this.imgicon
        d.append(img)
        return d
    }

}

//2
const info1 = new MessageBox('black', 'green', "./info.jpg", { title: "info", body: "about books" })
document.body.append(info1.render())

const warning1 = new MessageBox('black', 'yellow', "./warning.jpg", { title: "warning", body: "be careful" })
document.body.append(warning1.render())

const error1 = new MessageBox('white', 'red', "./error.jpg", { title: "error", body: "404 not found" })
document.body.append(error1.render())

//3
const message = { info: info1, warning: warning1, error: error1 }

//5
document.getElementById("ok").addEventListener("click", function () {
    const typemes = document.getElementById("typ").value
    const titlemes = document.getElementById("tit").value
    const bodyemes = document.getElementById("bod").value



    const s = message[typemes];
    s.message.title = titlemes;
    s.message.body = bodyemes;

    const m = document.getElementById("dismes");
    const newMessage = s.render();
    m.replaceWith(newMessage);
    newMessage.id = "dismes";

})



