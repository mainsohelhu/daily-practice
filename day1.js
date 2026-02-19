const { log } = require("console");

async function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(554)
        }, 3500);
    })
}

async function exq() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("my shoose are to heavy")
        }, 1000);
    })
}

async function count() {

    for (let i = 0; i <= 100; i++) {
        console.log(i);
       await new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, 50);
       });
    }
    return ("ho gya bhai sahab")

}
async function main() {

    console.log("loading module")
    console.log("doing something else")
    console.log("load data")
    let data = await getData()
    console.log(data);

    console.log("prosess data")
    let excuse = await exq();
    console.log(excuse);
    let count10 = await count()
    console.log(count10);


}

main()

