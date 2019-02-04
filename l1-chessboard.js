var grote = 8;

var schaakbord = "";

for (var hoogte = 0; hoogte < grote; hoogte++) {
  for (var breedte = 0; breedte < grote; breedte++) {
    schaakbord += " ";
    if ((breedte + hoogte) % 2 == 0)
      schaakbord += " ";
    else
      schaakbord += "#";
  }
  schaakbord += "\n";
}

console.log(schaakbord);
