// alpha = 10
// // can be access before initialization
// var alpha 
// console.log(alpha);

// // can not access before initialization
// beta  = 20;
// const beta =
// console.log(beta);

// // can not access before initialization
// gama = 30;
// let gama 
// console.log(gama);

let i = 0;
for ( i = 0; i <= 100; i++) {
    const element = i;
    console.log(element);
};

let user =[
    {
        name :"sohel",
        age : 24
    },
    {
        name: "jhon",
        age : 24
    },
    {
        name : "renee",
        age : 48
    },
    {
        name : "babu",
        age : 18
    }
]

for (let i = 0; i < user.length; i++) {
    const element = user[i];
    for (const key in element) {
        if (!Object.hasOwn(element, key)) continue;
        const delecent = element[key];
        console.log(key,":",delecent); 
    }
}




let j = ["toni","rupert","cody"]
for (let i = 0; i < j.length; i++) {
    const element = j[i];
    console.log(element);
}