// destructuring method of array
const [l, m] = [20, 60, 56, 96, 85, 650];
console.log(l,m);
// object of destructuring
const { x, c, r } = { x: 5, y: 10, z: 3, a: 9, b: 4, c: 6, p: 2, q: 8, r: 1 };
console.log(x, c, r);
const school = {
    name: 'BCIC',
    id: 2586902,
    class:{
        group: 'science',
        room: 205,
        student:{
            name: 'Zamil Ahmed',
            roll: 205,
            reg: 69589,
            address: {
                preAddress: "Dhaka",
                phone: '015823568558',
            }
        }
    }
}
// const { name, reg, phone } = school;
console.log(school.class.student?.address?.phone);