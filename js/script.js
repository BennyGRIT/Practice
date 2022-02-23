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



// // Övning 2

// class account {
//     constructor(name, age, amountOnAccount) {
//         this.name = name;
//         this.age = age;
//         this.amountOnAccount = amountOnAccount;
//     }

//     depositAccount(deposit) {
//         console.log(`Tjena ${this.name}, summan du hade från början är ${this.amountOnAccount} kronor. Nu satte du in ${deposit}, så nu har du ${this.amountOnAccount+deposit}, fett va?`
//         )
//     }


//     withdrawAccount(withdraw){
//         console.log (`Tjaaaaa ${this.name}, Nu har du tagit ut ${withdraw} kronor från ditt konto som från början hade ${this.amountOnAccount}. Så nu har du ${this.amountOnAccount-withdraw} kvar... Ändå rätt OK väl??`)
//         this.amountOnAccount-withdraw
//     }

//     showSaldoAccount(showSaldo){
//         console.log(`Yo yo mannen ${this.name}!! På ditt konto så har du ${this.amountOnAccount} kronor. Jeflar vad med pengar!!!`)
//     }

// }

// const bennyAccount = new account('Benny', 25, 5000);
// const claraAccount = new account('Clara', 26, 2000);




// bennyAccount.depositAccount(2000);
// claraAccount.depositAccount(1000);
// bennyAccount.withdrawAccount(2000);
// bennyAccount.showSaldoAccount();


//Övning 3

// class card {
//     constructor(number, suit){
//         this.number = number
//         this.suit = suit
//     }
//     logCard(){
//         console.log(`Tjena mannen, du skapade precis ${this.suit} ${this.number}, coolt väl?`)
//     }
// }
// const newCard = new card('Ess', 'Klöver')


// newCard.logCard();