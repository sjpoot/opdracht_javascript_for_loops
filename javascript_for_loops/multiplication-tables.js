for (nummer1=1; nummer1 <= 10; nummer1++) {
    let result = 0;
    console.log("Dit is de tafel van " + nummer1)
    console.log("=======================");

    for (nummer2=1; nummer2 <= 10; nummer2++) {

        result = nummer2 * nummer1;
        console.log(nummer2 + " x " + nummer1 + " = " + result);
    }

    console.log(" ")
}