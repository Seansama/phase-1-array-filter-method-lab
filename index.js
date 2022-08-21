const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name){
    const foundPeople = drivers.filter(n => n.toLowerCase() === name.toLowerCase());
    if(foundPeople){
        return foundPeople;
    }
    return [];
}
function fuzzyMatch(drivers, string){
    const filteredDrivers = drivers.filter(each => each.startsWith(string));
    if (filteredDrivers){
        return filteredDrivers;
    }
return [];
}
function matchName(drivers,string){
    const filteredDrivers = drivers.filter(each  => each.name === string);
    if (filteredDrivers){
        return filteredDrivers;
    }
    return [];
}