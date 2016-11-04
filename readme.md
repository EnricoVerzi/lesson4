


Studente: Verzì Enrico 
----------  
Matricola: O55000271
----------


<<<<<<< HEAD
Progetto
---------- 
=======
Progetto 
>>>>>>> c0eb480c5a808880d7dfef62e5a7a8f534051468

L'applicazione sviluppata in AngularJs permette la creazione e gestione di task, di seguito
sono riportate le features aggiunte.
  


Features
<<<<<<< HEAD
----------

La creazione dei task avviene tramite un form che permette di settare titolo, descrizione,
priorità, data, stato, tags e tempo stimato per completare il task. Una volta aggiunto il task, esso
aggiunto alla lista. Tale lista permette di filtrare tra task svolti, da svolgere e totali. 

Ogni task completato è visibile tra i task svolti il passaggio del task avviene attraverso un checkbox. 
=======

La creazione dei task avviene tramite un form che permette di settare titolo, descrizione,
priorità, data, stato, tags e tempo stimato per completare il task. Una volta aggiunto il task, esso viene
aggiunto alla lista. Tale lista permette di filtrare tra task svolti, da svolgere e totali. 

Ogni task completato è visionabile tra i task svolti il passaggio del task avviene attraverso un checkbox. 
>>>>>>> c0eb480c5a808880d7dfef62e5a7a8f534051468
La lista contenente i task è multi-selezionabile per permettere l'eliminazione multipla dei task,e inoltre possibile
modificare un task precedentemente inserito.
La navbar dei task permette di scegliere tra diverse viste della lista dei task (List, Card, Grid).
I task nella lista possono essere ordinati per titolo o data ed è presente un area testo 
per la ricerca di uno specifico task.

Application structure
<<<<<<< HEAD
----------
=======
>>>>>>> c0eb480c5a808880d7dfef62e5a7a8f534051468

app
    components
        customCard.directive.html
        customCard.directive.js
        customGrid.directive.html
        customGrid.directive.js
        customList.directive.html
        customList.directive.js
        templateForm.html
     storage.service.js
     todo.controller.js
     todoApp.module.js
    styles
        style.css
    index.html
    

 
