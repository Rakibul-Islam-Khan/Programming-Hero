const worker: { name: string, salary: number, work: string, address: { home: string, district: string, road: number }, workDay: string[] } = {
    name: "Cherry",
    salary: 8000,
    work: 'Rider',
    address: {
        home: "North-City",
        district: "Dhaka",
        road: 8
    },
    workDay: ['Sunday', 'Monday', 'Friday'],
};

type info = {name: string, salary: number, work: string, address: { home: string, district: string, road: number }, workDay: string[] };
const worker2:info = {
    name: "Cherry",
    salary: 8000,
    work: 'Rider',
    address: {
        home: "North-City",
        district: "Dhaka",
        road:8
    },
    workDay: ['Sunday', 'Monday', 'Friday'],
}