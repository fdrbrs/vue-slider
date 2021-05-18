const app = new Vue({
    el: "#app",
    data: {
        counter: 0,
        images: [
            "./img/1.jpg",
            "./img/2.jpg",
            "./img/3.jpg",
            "./img/4.jpg"
        ],
        
    },
    methods: {
        prev(){
            if(this.counter === 0){
                return this.counter = this.images.length -1;
            }
            return this.counter -= 1;
            console.log('click su prev');
        },
        next(){
            if(this.counter === this.images.length - 1){
                return this.counter = 0;
            }
            return this.counter += 1;
            
        }
    }

}

)


/* 
ASSIGNMENT:
Descrizione:
Creare uno slider di immagini: potete usare le immagini che desiderate.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!).
Consiglio del giorno:
Come sempre è importante usare la documentazione di Vuejs per scoprire/rinfrescare memoria sul cosa potrebbe esserci utile.
*/