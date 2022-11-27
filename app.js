

//sample1

console.log("***vidu1")

let animals = ["Cho","Meo","Ech"]




// create
animals.push("Tho")
console.log("Create:", animals)

//read
console.log("READ:",animals)

//update
animals[0] = "chuot"
console.log("UPDATE:", animals)

// chuot , meo , ech, tho

//delete
animals.splice(1,2)
console.log("delete:",animals)

// Sample 2

console.log("****SAMPLE2*****")

let colors = ["red","blue", "yellow"]

//Create
colors.push("purpule")
console.log("CREATE:", colors)

//READ
console.log("UPDATE:",colors)

//UPDATE
colors[2] = "white"
console.log("UPDATE:", colors)

//DELETE

colors.splice(2,3)
console.log("UPDATE:" ,colors)

///SAMPLE 3(OBJECT)
console.log("*****SAMPLE3*****")

let people2 = {
    name: "Thuy Tram",
    age: "13",
    sex: "Female",
    address: " Viet nam",
    hobbies: "Ve~",
}
people2.music = "house of memories"// them so thich am nhac
console.log("COMMAND CREATE PEOPLE2", people2);


let people = {
    name: "Thay Tan",
    age: 25,
    sex: "Male",
    cccd:"12311213",
    address: "ho chi minh city",
    job: "Developer",
    hobbies: "Coding"
}

//CREATE
people.sport = "football" // them sport
console.log("COMMAND CREATE:",people)
// 25 tuoi

//READ
console.log("COMMAND READ:", people)

// Update 🚀
people.age = "22"
console.log("COMMAND UPDATE", people)
// 22 tuoi -> 25 tuoi no se mat

// Delete ❌
delete people.address
console.log("COMMAND DELETE", people)

//// Sample 4 (Array)
console.log("*** SAMPLE 4 ***")

let OS = ["Windowns", "Android", "Linux"]

// Create ✅
OS.push("MacOS")
console.log("COMMAND CREATE:", OS)

// Read 📖
console.log("COMMAND READ: ", OS)

//DELETE
OS.splice (1,2)
console.log("COMMAND DELETE:", OS)
//OS.pop() // xoa phan tu cuoi cung
//OS.pop()
//console.log("xoa phan tu cuoi", OS)
OS.shift()
console.log("xoa phan tu dau mang", OS)




