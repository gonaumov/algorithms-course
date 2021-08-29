test('constructor functions and this keyword', () => {
    function User(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    var user1 = new User('John', 'Smith', 26, 'male');
    console.log(user1);
    var user200 = new User('Jill', 'Robison', 25, 'female');
    console.log(user200);
    User.prototype.emailDomain = '@facebook.com';
    console.log(user200.emailDomain);
    console.log(user1.emailDomain);
    User.prototype.getEmailAddress = function() {
        return this.firstName + this.lastName + this.emailDomain;
    }
    console.log(user200.getEmailAddress());
    console.log(user1.getEmailAddress());
});