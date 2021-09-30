class Support {
    name;
    role = 'Support Web DeV';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}
const smith = new Support('smith', 'USA');
const harry = new Support('harry', 'Russia');
harry.startSession();
smith.startSession();
console.log(smith, harry);


class Session {
    name;
    roll;
    address;
    constructor(name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }
}
const sakib = new Session('sakib', 58684, 'Chandpur');
console.log(sakib);