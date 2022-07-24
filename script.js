

       // ESERCIZI JAVASCRIPT

       /*// 21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"

       x = "John";
       y = "Doe"
       let a = "<>" ;
       console.log(x + " " + a + " " + y);*/
       /* 22) Crea un oggetto con le seguenti proprietà: name, surname, email*/

       let persona = {
        nome:"fabio",
        cognome: "bacci",
        email: "fabiobacci@gmail.com"
       };

       console.log( "salve mi chiamo" + persona.nome +" "+ persona .cognome+" " + "questa è la mia email " + "" +persona.email)
       
       /*The properties of an object can be collected in a loop:
       let txt = "";
        for (let x in persona) {
        txt += persona[x] + ",";
        };
        console.log(txt)
       
    Object.keys(persona).forEach(key => console.log(key, ':', persona[key]));*/

      /* // 23) Cancella la proprietà email dall'oggetto appena creato
       delete persona.email;
       console.log(persona)*/
       /* 24) Crea un array contenente 10 stringhe

       
      let arr= ["ciao","comeStai","ciao","jhon","doe","diego","1,3","5,6","9","8,9",];*/
       
       /*// 25) Mostra in console ogni stringa del precedente array
       for (var i in arr) {
        console.log(arr[i]);
    }*/
    
       
       /* 26) Crea un array contenente 100 numeri random
       let arrNw= [];

       for (i=0; i<101;i++){
        
        arrNw.push(i)
       }
       console.log(arrNw)*/
       /* 27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
       let min1= Math.min(...arrNw)

       console.log(min1);*/
       /*
    /*l’ultimo elemento dell’array dato nella variabile minimum 
    e lo abbiamo confrontato con l’elemento precedente. 
    Se l’elemento è minore della variabile minimo, memorizzeremo
    questo elemento nella variabile minimo.
     E in caso contrario, passeremo all’elemento successivo.
       function myMin(myarr){
        let arrLenght = myarr.length;
        minimum = myarr[arrLenght -1];
        while (arrLenght --){
            if(myarr[arrLenght ] < minimum){
                minimum = myarr[arrLenght ]
            }
        }
        return minimum;
    };

    let minArr = myMin(arrNw);
    console.log(minArr)
    
    function myMax(arrM){
        let maxLength = arrM.length
        let maximum = arrM[maxLength-1]
        if (arr[maxLength]>maximum){
            maximum = arr[maxLength]
        }
        return maximum;
    }

    max= myMax(arrNw);
    console.log(max)*/


       /* 28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
       let arrParent=[["arr1"], ["arr2"], ["arr3"]];
       
       for(let i=0; i<arrParent.length;i++){
        for(let j=0; j<10;j++){
            arrParent[i][j]= Math.floor(Math.random()*10)
        }
       }
       console.log(arrParent)*/
       /* 29) Crea una funzione che riceve 2 array come parametri e 
       ritorni quello con più elementi
       function twoArray(num1, num2){
        if (num1<num2){
            return num2;
        }else{
            return num1
        }
       }

       let x1=[1,2,3,5];
       let x2=[1,2,3];
       let par =twoArray(x1,x2);
       console.log(par)*/
       /* 30) Crea una funzione che riceve 2 array numerici come parametri 
       e ritorna quello con la somma totale degli elementi maggiore*/

        /*
       function arrParameter (){
        var arr1 =[2,4,5,6];
        var arr2= [5,6,6,7,4,3,];

        
          let sum = arr1.reduce((total, value)=>
             total + value);
            

             let sum1 = arr2.reduce((total, value)=>
             total + value);
             

            if( sum > sum1){
                return sum
            }else{
                return sum1
            }
       }
            */
    
       
        
       

        /*ESERCIZI SUL DOM*/

        /*31) Seleziona l'elemento con id "container" nella pagina*/
            let container = document.getElementById("div1")
       /* 32) Seleziona tutti gli elementi di tipo <td> nella pagina*/
        let elemTd = document.querySelectorAll("td")
       /* 33) Usa un ciclo per stampare in console il testo contenuto 
       in ogni elemento <td> nella pagina

       for (const td of elemTd){
        let text = td.innerHTML
        console.log(text)
       }*/
        
       /*34) Scrivi una funzione per cambiare il titolo della pagina che
       mi esegue la funzione cambiaTitolo una volta che clicco con il muose sula window */

       const  cambiaTitolo = function(){
        document.getElementById("h1").innerHTML= "Nuovo titolo"
       }

       window.addEventListener("load", function(){
        alert("benvento")
       
       })
       /*
        35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina*/

    
        function tableFunction() {
            let parentElm = document.getElementById("table")
            let nuovaRiga = document.createElement("tr");
            nuovaRiga.classList.add("tr")
            //Creo i "td" da associare alla riga come:
            let nuovaCella = document.createElement("th");
            let nuovaCella1= document.createElement("th");
            let nuovaCella2= document.createElement("th")
            let nuovaRiga2 = document.createElement("tr");
            let nuovaCell = document.createElement("td");
            let nuovaCell1= document.createElement("td");
            let nuovaCell2= document.createElement("td");
            nuovaCella.colSpan = 2
            nuovaCella1.colSpan = 2
            nuovaCella2.colSpan = 2
            nuovaCell.colSpan = 2
            nuovaCell1.colSpan = 2
            nuovaCell2.colSpan = 2
            //var contenutoCella = document.createTextNode("nuova riga aggiunta con javascript");
           // inserisco il contenuto nella riga/cella
            //nuovaRiga.appendChild(contenutoCella);  
            //Inserisco la cella nella riga
            //nuovaRiga.appendChild(nuovaCella);  
            nuovaCella.innerHTML = "nuova cella aggiunta con javascript";
            nuovaCella1.innerHTML = "nuova cella aggiunta con javascript";
            nuovaCella2.innerHTML = "nuova cella aggiunta con javascript";
            nuovaRiga.appendChild(nuovaCella);
            nuovaRiga.appendChild(nuovaCella1);
            nuovaRiga.appendChild(nuovaCella2);
            nuovaCell.innerHTML = "nuova cella aggiunta con javascript";
            nuovaCell1.innerHTML = "nuova cella aggiunta con javascript";
            nuovaCell2.innerHTML = "nuova cella aggiunta con javascript";
            nuovaRiga2.appendChild(nuovaCell);
            nuovaRiga2.appendChild(nuovaCell1);
            nuovaRiga2.appendChild(nuovaCell2);
            
            
            //Inserisco la riga nella tabella
            parentElm.appendChild(nuovaRiga);
            parentElm.appendChild(nuovaRiga2);
}
/*
        /*36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
        */  
        const changeClassTr= function (){
           let x= document.querySelectorAll("tr")
            for ( i=0; i<x.length; i++){
             x[i].className="test1";
            }
        }
        table1.addEventListener('click', ()=>{
            changeClassTr()
        });
        /*
        37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni
         link presente nella pagina
         function changeBackgroundColor(){
            let a2 = document.getElementsByClassName("a")
            for(i=0; i<a2.length; i++){
                a2[i].style.backgroundColor = "red";     
             }
            
         }
         document.addEventListener('DOMContentLoaded', changeBackgroundColor);*/
        /*
       /* 38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi*/
        document.addEventListener('DOMContentLoaded', ()=>{
            console.log("Page loaded")
        });
        /*
        39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata 
        nella pagina*/
       
        document.addEventListener('DOMContentLoaded', ()=>{
            let ul = document.getElementsByTagName("ul");
            
            for(i=0; i<ul.length;i++){
                newUl = document.createElement("li");
                newUl1 = document.createElement("li");
                 newUl.innerHTML= "nuovi elementi";
                 newUl.style.color="blue"
                 newUl1.innerHTML= "nuovi elementi";
                 newUl1.style.color="blue"
                 ul[i].appendChild(newUl);
                 ul[i].appendChild(newUl1)

            }            
        })

        /* 40) Scrivi una funzione per svuotare una lista nella pagina*/

       /* document.addEventListener('DOMContentLoaded', ()=>{
            let nwUl= document.getElementsByClassName("ulList");
            for (i=0; i<nwUl.length;i++){
             nwUl[i].innerHTML="";
 
            }
        })
           
           /*uso questo codice per rimuovere
           let nwUl= document.getElementById("ulList");
           if (nwUl.hasChildNodes()) {
            nwUl.removeChild(nwUl.children[0]);
          }*/
            
        

      

 /* ESERCIZI EXTRA
/*
  41) Aggiungi un event listener in modo che compaia un alert quando il cursore 
  passa sopra un link;  l'alert deve mostrare la sua proprietà href*/

 /* document.getElementsByTagName("a")[0].addEventListener("mouseover", ()=>{
    alert(document.getElementsByTagName("a")[0].href)// esempio fatto dal prof
    
  })
  document.getElementsByTagName("a")[1].addEventListener("mouseover", ()=>{
    alert(document.getElementsByTagName("a")[1].href)
  })*/// esempio fatto dal prof
  /*let mouseOv = document.getElementsByTagName("a");
  
  for(let k=0; k<mouseOv.length; k++){
    document.getElementsByTagName("a")[k].addEventListener("mouseover", ()=>{
        alert(document.getElementsByTagName("a")[k].href)
        
      })
  }   */

 /* 46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, 
 questo cambi colore di sfondo

 document.addEventListener("click", ()=>{
    let td = document.getElementsByTagName("td");
    for (i=0; i<td.length; i++){
        td[i].style.backgroundColor ="yellow";
    }

  })*/
  /*
 
  42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
  nascondiImmagine.addEventListener("click", ()=>{
    let image = document.getElementsByTagName("img")

    for (i=0; i<image.length; i++){
        image[i].style.display= "none";
    }

  })*/
  /*
  43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina
  
  nascondiTabella.addEventListener("click",()=>{
    let tableD = document.getElementsByTagName("table")

    for (i=0; i<tableD.length; i++){
        tableD[i].style.display= "none";
    }

  }) 
  /*
  44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle
   della tabella (se il contenuto è un numero)*/


  /*45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra
 
  var titolo = document.getElementById("tit").innerHTML
       window.addEventListener("click", () =>{
        document.getElementById("tit").innerHTML = titolo.slice(0, -1)
       })
  
  
  */

  /*46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, 
  questo cambi colore di sfondo

  window.addEventListener("click", ()=>{
    document.getElementById("ChangeBackgroundColor").style.backgroundColor = "blue"
  })*/
  /*
  47) Aggiungi un bottone che una volta cliccato elimini un <td> a caso nella tabella*/

 
  
  /*48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il 
  cursore ci passa sopra

  pink.addEventListener("mouseover", ()=>{
    document.getElementById("pink").style.borderColor = "pink"
  })*/
  /*
  49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne
   e aggiungerla alla fine della pagina

   function {
    let parentElm = document.getElementById("table")

    for (i=0; i<4; i++){
        
        let nuovaRiga = document.createElement("tr");
        //Creo i "td" da associare alla riga come:
        
    for (i=0;i<3;i++){
        let nuovaCella1 = document.createElement("td");
    }
    
    nuovaRiga.appendChild(nuovaCella[i]);
   }
   
   parentElm.appendChild(nuovaRiga[i]);
}
   */
   /*  50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina*/

   