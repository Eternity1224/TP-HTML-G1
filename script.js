// Informations pour chaque année
const infoAn = {
    2014: {
        nom: "Établissement 1",
        ville: "Ville1, Pays1",
        description: "Début de mon parcours scolaire dans une école renommée.",
        image: "ll.webp"
    },
    2015: {
        nom: "Établissement 2",
        ville: "Ville2, Pays2",
        description: "Poursuite des études avec un nouveau programme.",
        image: "Img2.jpg"
    },
    2019: {
        nom: "Établissement 3",
        ville: "Ville3, Pays3",
        description: "Développement de compétences avancées.",
        image: "Img1.jpg"
    },
    2023: {
        nom: "Établissement 4",
        ville: "Ville4, Pays4",
        description: "Dernière étape avant un nouveau chapitre.",
        image: "Img.jpg"
    }
};


function Info(an) 
{
 
    if (!infoAn[an]) {
        console.error("Année non trouvée :", an);
        return;
    }


    document.getElementById("nom").innerText = infoAn[an].nom;
    document.getElementById("ville").innerText = infoAn[an].ville;
    document.getElementById("detaille").innerText = infoAn[an].description;


    const imgElement = document.getElementById("image");
    imgElement.src = infoAn[an].image;
    imgElement.style.display = "block";

  
    let cercles = document.querySelectorAll(".cercle");
    cercles.forEach(cercle => {
        if (parseInt(cercle.getAttribute("data-line")) === an) {
            cercle.style.backgroundColor = "black"; // Actif
        } else {
            cercle.style.backgroundColor = "gray"; // Désactivé
        }
    });


    let ligne1 = document.querySelector('[data-line="2014"]');
    let ligne2 = document.querySelector('[data-line="2015"]');
    let ligne3 = document.querySelector('[data-line="2019"]');
    let ligne4 = document.querySelector('[data-line="2023"]');
    let ligne5 = document.querySelector('[data-line="0000"]');
    ligne1.style.backgroundColor = "gray";
    ligne2.style.backgroundColor = "gray";
    ligne3.style.backgroundColor = "gray";
    ligne4.style.backgroundColor = "gray";
    ligne5.style.backgroundColor = "gray";
 
    if (an === 2014) {
        ligne1.style.backgroundColor = "black"; 
     
    }
    if (an === 2015) {
       
        ligne2.style.backgroundColor = "black";
    }
    if (an === 2019) {
       
        ligne3.style.backgroundColor = "black"; 
    }
    if (an === 2023) {
        ligne4.style.backgroundColor = "black";
}
 }













const infoVil = {
  
    1: {
        nom: "Lieu 1",
        ville: "Date1",
        description: "Début de mon parcours scolaire dans une école renommée.",
        image: "Img2.jpg"
    },
    2: {
        nom: "Lieu 2",
        ville: "Date2",
        description: "Début de mon parcours scolaire dans une école renommée.",
        image: "Img1.jpg"
    },
   3: {
        nom: "Lieu 3",
        ville: "Date3",
        description: "Début de mon parcours scolaire dans une école renommée.",
        image: "Img2.jpg"
    },
    4: {
        nom: "Lieu 4",
        ville: "Date4",
        description: "Début de mon parcours scolaire dans une école renommée.",
        image: "Img.jpg"
    }
};

function InfoV(vil) {
    document.getElementById("lieu").innerText = infoVil[vil].nom;
    document.getElementById("date").innerText = infoVil[vil].ville;
    document.getElementById("description").innerText = infoVil[vil].description;
   
    const imgElement = document.getElementById("imag");
    imgElement.src = infoVil[vil].image;


}

function InfoV(vil) {
    document.getElementById("lieu").innerText = infoVil[vil].nom;
    document.getElementById("date").innerText = infoVil[vil].ville;
    document.getElementById("description").innerText = infoVil[vil].description;
   
    const imgElement = document.getElementById("imag");
    imgElement.src = infoVil[vil].image;


  
    let cercles = document.querySelectorAll(".cercle3");
    cercles.forEach(cercle => {
        if (parseInt(cercle.getAttribute("data-line")) === vil) {
            cercle.style.backgroundColor = "black"; // Actif
        } else {
            cercle.style.backgroundColor = "gray"; // Désactivé
        }
    });


    let ligne1 = document.querySelector('[data-line="1"]');
    let ligne2 = document.querySelector('[data-line="2"]');
    let ligne3 = document.querySelector('[data-line="3"]');
    let ligne4 = document.querySelector('[data-line="4"]');
    let ligne5 = document.querySelector('[data-line="5"]');
    ligne1.style.backgroundColor = "gray";
    ligne2.style.backgroundColor = "gray";
    ligne3.style.backgroundColor = "gray";
    ligne4.style.backgroundColor = "gray";
    ligne5.style.backgroundColor = "gray";
 
    if (an === 1) {
        ligne1.style.backgroundColor = "black"; 
        ligne2.style.backgroundColor = "black";
    }
    if (an === 2) {
       
        ligne2.style.backgroundColor = "black";
    }
    if (an === 3) {
       
        ligne3.style.backgroundColor = "black"; 
    }
    if (an === 4) {
        ligne4.style.backgroundColor = "black";
}
 }



















        const images = ["Img1.jpg", "Img2.jpg", "Img.jpg"];
       
     
        function fonctionActivite(index) {
           
            document.getElementById("activiteImages").src = images[index];

       
            let titres = document.querySelectorAll(".activite");
            titres.forEach((titre, i) => {
                if (i === index) {
                    titre.classList.add("active");
                } else {
                    titre.classList.remove("active");
                }
            });
        }