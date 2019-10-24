function foobar(i) {
    var flag3 = false;
    var flag5 = false;
    var j;
    for (j = 1; j <= i; j++) {
        if (j % 3 === 0) {
            flag3 = true;
        }
        if (j % 5 === 0) {
            flag5 = true;
        }
        if (flag3 && flag5) {
            console.log("FooBar");
        }
        else if (flag3) {
            console.log("Foo");
        }
        else if (flag5) {
            console.log("Bar");
        }
        else {
            console.log(j);
        }
        flag3 = false;
        flag5 = false;
    }
}

foobar(20);