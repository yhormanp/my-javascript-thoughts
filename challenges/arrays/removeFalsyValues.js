function bouncer( arr){
    const elements = arr.filter((val) =>{
        return Boolean (val) !== false
    })

    return elements;
}

console.log( bouncer([7, "ate", "", false, 9]));