
window.addEventListener("keydown", graj); //Nasłuchiwanie naciśniętych przycisków i przypiętych do nich dźwięków

let czasRozpoczecia;  // zmienna potrzebna do przypisania czasu rozpoczęcia zapisu dźwięków
let sciezka = []      // tablica potrzebna do zapisu ścieżki dźwiękowej
let sciezka1 = []     // tablica potrzebna do odegrania zapisu ścieżki dźwiękowej
let sciezka2 = []
let sciezka3 = []
let sciezka4 = []



 function graj(e) {               // odegranie dźwięku oraz zapisanie go na stosie wraz z czasem odgrywania
       
      
        let selektor = `audio[data-key="${e.keyCode}"]`
        let sound = document.querySelector(selektor)
        sound.play()
        let czasPoOdegraniuDzwieku = Date.now();
         sciezka.push({
            keyCode: e.keyCode,
            time: czasPoOdegraniuDzwieku - czasRozpoczecia,
        })

     czasRozpoczecia = czasPoOdegraniuDzwieku; 
       
      
    }
 
  

    document.querySelector('#nagraj1').onclick = () => {        //Rozpoczęcie nagrywania ścieżki dźwiękowej
        
     czasRozpoczecia = Date.now();
     console.log(czasRozpoczecia);
     sciezka = [];
     
        
    }
   document.querySelector('#zapisz1').onclick = () => {        // Zapisywanie ścieżki dźwiękowej
        
        sciezka1 = sciezka; 
        console.log(sciezka1);
        sciezka = [];
        
        
        
    }


       document.querySelector('#play1').onclick = () => {  // Odgrywanie ścieżki dźwiękowej
           
           console.log(sciezka1);
           odtworzSciezke()
           
              
    }

    document.querySelector('#zapisz2').onclick = () => {
        
        sciezka2 = sciezka; 
        console.log(sciezka2);
        sciezka = [];
        
        
        
    }


       document.querySelector('#play2').onclick = () => {
           
           console.log(sciezka2);
           odtworzSciezke2()
           
              
    }

    document.querySelector('#zapisz3').onclick = () => {
        
        sciezka3 = sciezka; 
        console.log(sciezka3);
        sciezka = [];
        
        
        
    }


       document.querySelector('#play3').onclick = () => {
           
           console.log(sciezka3);
           odtworzSciezke3()
           
              
    }

    document.querySelector('#zapisz4').onclick = () => {
        
        sciezka4 = sciezka; 
        console.log(sciezka4);
        sciezka = [];
        
        
        
    }


       document.querySelector('#play4').onclick = () => {
           
           console.log(sciezka4);
           odtworzSciezke4()
           
              
    }



    function odtworzSciezke() {           // funkcja potrzebna do odegrania ścieżki dźwiękowej 
        let el = sciezka1.shift()
        if (el) {
            console.log(el)
            let sound = document.querySelector(`audio[data-key="${el.keyCode}"]`)
            sound.currentTime = 0
            sound.play()
            setTimeout(
                odtworzSciezke,
                el.time
            )  
            
        }
  
     
    }

    function odtworzSciezke2() {
        let el = sciezka2.shift()
        if (el) {
            console.log(el)
            let sound = document.querySelector(`audio[data-key="${el.keyCode}"]`)
            sound.currentTime = 0
            sound.play()
            setTimeout(
                odtworzSciezke2,
                el.time
            )

            
            
        }
  
     
    }

    function odtworzSciezke3() {
        let el = sciezka3.shift()
        if (el) {
            console.log(el)
            let sound = document.querySelector(`audio[data-key="${el.keyCode}"]`)
            sound.currentTime = 0
            sound.play()
            setTimeout(
                odtworzSciezke3,
                el.time
            )

            
            
        }
  
     
    }

    function odtworzSciezke4() {
        let el = sciezka4.shift()
        if (el) {
            console.log(el)
            let sound = document.querySelector(`audio[data-key="${el.keyCode}"]`)
            sound.currentTime = 0
            sound.play()
            setTimeout(
                odtworzSciezke4,
                el.time
            )

            
            
        }
  
     
    }

   
    
     
    


    

