const moment = require("moment");
class Account {
    // state
    #amount
    #account_id
    // constructor
    constructor (account_id, amount, name, currency = "$" ) {
        this.#account_id = account_id;
        this.#amount = amount;
        this.name = name;
        this.currency = currency;
    };

    tellMemyBallance() {
        console.log(`Sizning hisobingizda: ${this.#amount}` + this.currency +` mavjud`);
        return this.#amount;
    };

    withdrawMoney(amount) {
        if (this.#amount > amount ) {
            this.#amount -= amount; 
            console.log(`Sizning hisobingizdan: ${amount}${this.currency} yechildi,   ${this.#amount}${this.currency} qoldi`);
        }else {
            console.log(`Sizning hisobingizda mablag etarli emas: ${this.#amount}${this.currency} bor`);
        }
    };

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Sizning xisobingiz ${amount}${this.currency} ga toldirildi `);
        console.log(`Sizning xisobingiz jami ${this.#amount}${this.currency}`);
    };

    giveMeDetails() {
        console.log(`Salom ${this.name} sizning Id raqamingiz ${this.#account_id},va sizning xisobingizda ${this.#amount}${this.currency} mavjud `);
        console.log(`Sizning xisob raqamingiz:`,this.#account_id);
    };
    static tellMeAboutClass() {
        console.log('Bu class Accountlarni yasaydi');
    }
    static tellMeTime() { 
        console.log(`Hozirgi vaqt`,moment().format('HH:mm:ss'));
    }
}
const time = Account.tellMeTime() 

module.exports = Account;