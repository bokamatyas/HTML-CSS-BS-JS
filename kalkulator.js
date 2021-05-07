// Kör terület-kerület számítása
function kor_kalkulal() {
  var sugar = parseFloat(document.getElementById("r").value);
  if (sugar <= 0) {
    window.alert("A sugár értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  var kkerulet = sugar * 2 * 3.14;
  var kterulet = Math.pow(sugar, 2) * 3.14;
  document.getElementById("kkeredmeny").value =
    kkerulet.toLocaleString() + " cm";
  document.getElementById("kteredmeny").value =
    kterulet.toLocaleString() + " cm^2";
}

// Paralelogramma magasság bevitelimező váltógombja 1 
function button1() {
  var tag_remove = document.getElementById("buttons");
  tag_remove.removeChild(tag_remove.childNodes[0]);

  var newElement = document.createElement("input");
  newElement.setAttribute("id", "mb");
  newElement.setAttribute("type", "number");
  newElement.setAttribute("placeholder", "b oldal magassága");
  newElement.setAttribute("onchange", "para_kalkulal_mb()");
  var label = document.getElementById("button");
  label.appendChild(newElement);

  var input_remove = document.getElementById("ma");
  input_remove.remove();

  var btn = document.createElement("BUTTON");
  btn.innerHTML = '"a" oldalmagasság használata';
  btn.setAttribute("id", "button2");
  btn.setAttribute("onclick", "button2()");
  var button_search = document.getElementById("buttons");
  button_search.appendChild(btn);
}

// Paralelogramma magasság bevitelimező váltógombja 2
function button2() {
  var btn_remove = document.getElementById("buttons");
  btn_remove.removeChild(btn_remove.childNodes[0]);

  var tag_remove = document.getElementById("mb");
  tag_remove.remove();

  var newElement2 = document.createElement("input");
  newElement2.setAttribute("id", "ma");
  newElement2.setAttribute("placeholder", "a oldal magassága");
  newElement2.setAttribute("onchange", "para_kalkulal_ma()");
  var label2 = document.getElementById("button");
  label2.appendChild(newElement2);

  var btn = document.createElement("BUTTON");
  btn.innerHTML = '"b" oldalmagasság használata';
  btn.setAttribute("id", "button1");
  btn.setAttribute("onclick", "button1()");
  var button_search = document.getElementById("buttons");
  button_search.appendChild(btn);
}

// Paralelogramma terület-kerület számítása "a" magasság használatával
function para_kalkulal_ma() {
  var a_oldal = parseFloat(document.getElementById("a").value);
  var b_oldal = parseFloat(document.getElementById("b").value);
  var ma = parseFloat(document.getElementById("ma").value);
  if (a_oldal <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (b_oldal <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (ma <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  var pkeredmeny = 2 * (a_oldal + b_oldal);
  var pteredmeny = a_oldal * ma;
  document.getElementById("pkeredmeny").value =
    pkeredmeny.toLocaleString() + " cm";
  document.getElementById("pteredmeny").value =
    pteredmeny.toLocaleString() + " cm^2";
}

// Paralelogramma terület-kerület számítása "b" magasság használatával
function para_kalkulal_mb() {
  var a_oldal = parseFloat(document.getElementById("a").value);
  var b_oldal = parseFloat(document.getElementById("b").value);
  var mb = parseFloat(document.getElementById("mb").value);
  if (a_oldal <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (b_oldal <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (mb <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  var pkeredmeny = 2 * (a_oldal + b_oldal);
  var pteredmeny = a_oldal * mb;
  document.getElementById("pkeredmeny").value =
    pkeredmeny.toLocaleString() + " cm";
  document.getElementById("pteredmeny").value =
    pteredmeny.toLocaleString() + " cm^2";
}

// Gömb felszín-térfogat számítása
function gomb_kalkulal() {
  var sugar2 = parseFloat(document.getElementById("g").value);
  if (sugar2 <= 0) {
    window.alert("A sugár értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  var gferedmeny = 4 * Math.pow(sugar2, 2) * 3.14;
  var gteredmeny = (4 * Math.pow(sugar2, 3) * 3.14) / 3;
  document.getElementById("gferedmeny").value =
    gferedmeny.toLocaleString() + " cm^2";
  document.getElementById("gteredmeny").value =
    gteredmeny.toLocaleString() + " cm^3";
}

// Téglatest felszín-térfogat számítása
function tegla_kalkulal() {
  var a = parseFloat(document.getElementById("a2").value);
  var b = parseFloat(document.getElementById("bt").value);
  var c = parseFloat(document.getElementById("c").value);
  if (a <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (b <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  if (c <= 0) {
    window.alert("Az oldal értéke nem lehet 0 vagy negatív szám!");
    return NaN;
  }
  var tferedmeny = 2 * (a * b + a * c + b * c);
  var tteredmeny = a * b * c;
  document.getElementById("tferedmeny").value =
    tferedmeny.toLocaleString() + " cm^2";
  document.getElementById("tteredmeny").value =
    tteredmeny.toLocaleString() + " cm^3";
}
