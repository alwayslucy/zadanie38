function kalkulator(par1,par2) {
    let suma = par1+par2;
    let roznica = par1-par2
    let iloczyn = par1*par2;
if(roznica>=0) {
    let result = '1.Wynik dodawania wynosi '+suma+'\n'+'2.Wynik odejmowania wynosi '+roznica+'\n'+
                 '3.Wynik mnozenia wynosi '+iloczyn;
    return result;
} else{
    let result = '1.Wynik dodawania wynosi '+suma+'\n'+
                 '2.Nieprawidlowy wynik'+'\n'+
                 '3.Wynik mnozenia wynosi '+iloczyn;
    return result;
}
}

console.log(kalkulator(5,7));