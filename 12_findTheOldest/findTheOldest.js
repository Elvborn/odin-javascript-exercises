function getAge(birth, death){
    if(!death)
        death = new Date().getFullYear();

    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((prev, current) => {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath);

        return currentAge > prevAge ? current : prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
