function kor_kalkulal() {
    var sugar = parseFloat(document.getElementById("r").value);
    if (sugar <= 0) {
        window.alert('A sugár értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }
    var kkerulet = sugar * 2 * 3.14;
    var kterulet = Math.pow(sugar, 2) * 3.14;
    document.getElementById('kkeredmeny').value = kkerulet.toLocaleString() + " cm";
    document.getElementById('kteredmeny').value = kterulet.toLocaleString() + " cm^2";
}

function negyzet_kalkulal() {
    var oldalhossz = parseFloat(document.getElementById("a").value);
    if (oldalhossz <= 0) {
        window.alert('Az oldal értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }
    var nkerulet = oldalhossz * 4;
    var nterulet = Math.pow(oldalhossz, 2);
    document.getElementById('nkeredmeny').value = nkerulet.toLocaleString() + " cm";
    document.getElementById('nteredmeny').value = nterulet.toLocaleString() + " cm^2";
}

function gomb_kalkulal() {
    var sugar2 = parseFloat(document.getElementById("g").value);
    if (sugar2 <= 0) {
        window.alert('A sugár értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }
    var gferedmeny = 4 * Math.pow(sugar2,2) * 3.14;
    var gteredmeny = (4 * Math.pow(sugar2,3) * 3.14) / 3;
    document.getElementById('gferedmeny').value = gferedmeny.toLocaleString() + " cm2";
    document.getElementById('gteredmeny').value = gteredmeny.toLocaleString() + " cm3";
}

function tegla_kalkulal(){
    var a = parseFloat(document.getElementById("a2").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    if (a <= 0) {
        window.alert('Az oldal értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }if (b <= 0) {
        window.alert('Az oldal értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }if (c <= 0) {
        window.alert('Az oldal értéke nem lehet 0 vagy negatív szám!');
        return NaN;
    }
    var tferedmeny = 2 * (a * b + a * c + b * c);
    var tteredmeny = a * b * c;
    document.getElementById('tferedmeny').value = tferedmeny.toLocaleString() + " cm2";
    document.getElementById('tteredmeny').value = tteredmeny.toLocaleString() + " cm3";

}