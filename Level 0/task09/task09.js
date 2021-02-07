const vowels = (string) => {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'],
        temp = string.split(""),
        str ="";

    for (let v = 0; v < temp.length; v++) {
        if (vowels.indexOf(temp[v]) > -1) {
            str += temp[v];
        }
    }
    return str;
}