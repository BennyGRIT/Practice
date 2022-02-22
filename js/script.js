// //övning 1 - Klass
// function Person (characterTrait, hariColor, name) {
//     this.characterTrait = characterTrait;
//     this.hariColor = hariColor;
//     this.name = name;
// }

// Person.prototype.intro = function(){
//     console.log(`This is ${this.name}`)
// }

// Person.prototype.datingIntro = function(){
//     console.log(`I am ${this.name}, my hair is ${this.hariColor}, and I am extremly ${this.characterTrait}. Please date me!`)
// }

// const shayaan = new Person('unknowing', 'svart', 'Shayaan');
// shayaan.datingIntro();

// //Övning 2 - Klass
// class Flowers{
//     water = 'little';
//     constructor(type, color, blooms){
//         this.type = type;
//         this.color = color;
//         this.blooms = blooms;
//     }

//     presentation(){
//         console.log(`${this.type} är en mycket fin blomma, och jag behöver sol`);
//         if(this.blooms){
//             console.log('Jag behöver VATTEN FFS')
//         }
//         else{
//             console.log('Ge mig sol för fan')
//         }
//         console.log(this.water)
//     }
// }

// const zenia = new Flowers('flower', 'lila', true);
// const ivy = new Flowers('ivy', 'green', false);

// zenia.presentation();
// ivy.presentation();


//Övning1

// class pets {
//     constructor(race, name, color, stupid) {
//         this.race = race;
//         this.name = name;
//         this.color = color;
//         this.stupid = stupid;
//     }

//     presentation() {
//         console.log(`${this.name} är en ${this.stupid} ${this.color} ${this.race} som heter ${this.name}, så det så!`);
//     }

// }

// const katt = new pets ('katt', 'Bengt', 'gul', 'korkad')
// const hund = new pets ('hund', 'Britta', 'svart', 'rolig')
// const birdie = new pets ('fågel', 'Piip', 'grön', 'tokig')

// katt.presentation();
// hund.presentation();
// birdie.presentation();



// Övning 2

class account {
    constructor(name, age, amountOnAccount){
        this.name=name;
        this.age=age;
        this.amountOnAccount=amountOnAccount;
    }

    depositAccount(deposit){
        return this.amountOnAccount+deposit
        console.log('Så här mycket pengar har du tjänat din jävel!!!')

    }


    withdrawAccount(withdraw){
        this.amountOnAccount-withdraw
    }
    showSaldoAccount(showSaldo){

    }
     
}

const bennyAccount = new account ('Benny', 25, 5000);
const claraAccount = new account ('Clara', 26, 2000)

bennyAccount.depositAccount(5000, 2000);