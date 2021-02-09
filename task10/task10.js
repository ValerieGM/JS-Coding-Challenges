const sameLetter = (string1, string2) => {
    let str = "",
        longest, shortest,
        temp1 = new Set(string1.split("")),
        temp2 = new Set(string2.split(""))

    if (temp1.length > temp2.length) {
        longest = [...temp1];
        shortest = [...temp2];
    } else {
        shortest = [...temp1];
        longest = [...temp2];
    }

    for (let v = 0; v < longest.length; v ++) {
        for (let t = 0; t < shortest.length; t++) {
            if (shortest[t] === longest[v]) {
                str += shortest[t] + ", ";
            }
        }
    }

    return "Common letters: " + str;
}