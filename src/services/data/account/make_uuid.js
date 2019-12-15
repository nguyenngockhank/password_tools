var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

var uuid = function(t, e) {
    var o, c, i = r, n = [];
    if (e = e || i.length,  t)
        for (o = 0; o < t; o++)
            n[o] = i[0 | Math.random() * e];
    else
        for (n[8] = n[13] = n[18] = n[23] = "-",
        n[14] = "4",
        o = 0; o < 36; o++)
            n[o] || (c = 0 | 16 * Math.random(),
            n[o] = i[19 == o ? 3 & c | 8 : c]);
    return n.join("")
}


export default uuid;