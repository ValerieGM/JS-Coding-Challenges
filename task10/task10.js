const sameLetter = (string1, string2) => {
    let str = "",
        longest, shortest,
        temp1 = string1.split(""),
        temp2 = string2.split("");

    if (temp1.length > temp2.length) {
        longest = temp1;
        shortest = temp2;
    } else {
        shortest = temp1;
        longest = temp2;
    }

    for (let v = 0; v < shortest.length; v ++) {
        for (let t = 0; t < longest.length; t++) {
            if (shortest[t] === longest[v]) {
                str += shortest[t] + ", ";
            }
        }
    }

    return "Common letters: " + str;
}