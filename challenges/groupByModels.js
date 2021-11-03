const cars = [
    {
        make: "ford",
        model: "fusion",
        year: "2015"
    }, {
        make: "audi",
        model: "r8",
        year: "2012"
    },
    {
        make: "ford",
        model: "mustang",
        year: "2012"
    },
    {
        make: "kia",
        model: "optima",
        year: "2012"
    },
    {
        make: "audi",
        model: "rs5",
        year: "2013"
    }];



let grouped = cars.reduce( (group, currentValue) =>{
    // group[currentValue.make] = group[currentValue.make] ? [...group[currentValue.make], currentValue ]: [currentValue]
    group[currentValue.make] = [...group[currentValue.make] || [], currentValue]
    return group
},{})

console.log('grouped', grouped)

