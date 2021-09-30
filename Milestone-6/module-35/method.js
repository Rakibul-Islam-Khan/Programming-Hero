const universityStudent = {
    id: 50268,
    name: 'Korim',
    money: 5500,
    age: 56,
    major: 'Tech',
    subject: ['English', 'Math', 'Chemistry', 'Physics'],
    bestFriend: {
        id: 98327,
        name: 'Murat',
        subject: ['Architecture', 'Math', 'English'],
        isGood: true,
    },
    exam: function () {
        console.log(this.name, 'taking exam');
    },
    tourPlan: function (budget) {
        if (budget <= 2000) {
            console.log(this.bestFriend.name,'I want to go with you');
        } else {
             console.log(this.bestFriend.name,"sorry, I don't go any there");
        }
    },
};
universityStudent.exam();
const tourBudget = universityStudent.tourPlan(2500);
