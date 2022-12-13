const returnFirstTwoDrivers = (drivers) => {return[drivers[0], drivers[1]];};
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
const returnLastTwoDrivers = (drivers) => {return[drivers[2], drivers[3]];};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
    return (selectingDrivers(arrayOfDrivers));
}