let arrowRight = document.querySelector("#arrowRight"),
    arrowLeft = document.querySelector("#arrowLeft"),
   productName = document.querySelector("#name-product"),
   paragraphProduct = document.querySelector("#paragraphe-product"),
   imageProduct = document.querySelector("#imageProduct"),
   productTag = document.querySelector("#productTag"),
   sousProduitName = document.querySelector("#sous-produit-name");

// barre de chargement
let button = document.querySelector("button#next"),
  barreChargement = document.querySelector("#contenu1");

button.addEventListener("click", next);
   
let pArganAlimentaire = "L'huile d'argan ou l'huile d'argane1,2 est une huile végétale produite à partir des fruits de l'arganier et riche en vitamine A, vitamine E (Tocophérol), en antioxydants et en acides gras essentiels3 Ses propriétés lui confèrent de nombreux usages dans l’alimentation, la médecine et la cosmétique."
let pArganCosmetique = "L'huile d'argan ou l'huile d'argane1,2 est une huile végétale produite à partir des fruits de l'arganier et riche en vitamine A, vitamine E (Tocophérol), en antioxydants et en acides gras essentiels3 Ses propriétés lui confèrent de nombreux usages dans l’alimentation, la médecine et la cosmétique."
let pAmlou = "L'amlou est une préparation culinaire berbère de la région du Souss (Maroc) que les Chleuhs ont l'habitude de consommer. Elle se compose d'huile d'argan, d'amandes ou de cacahuètes et peut contenir du miel. C'est un fortifiant qui est servi au petit déjeuner ou au goûter en pâte à tartiner sur du pain d’orge, de maïs ou de blé. Il accompagne aussi toutes sortes de pâtisseries."
let pMiel = "Le miel (prononcé en français : /mjɛl/1) est une substance sucrée élaborée par les abeilles à miel à partir de nectar2,3,4 ou de miellat5,6. Elles l'entreposent dans la ruche et s'en nourrissent tout au long de l'année, en particulier lors de périodes climatiques défavorables. Il est aussi consommé par d'autres espèces animales dont l'espèce humaine qui organise sa production par l'élevage des abeilles à miel."
let j = 0,
    i = 0;
let listeSousProduitArgan  = [["argan cosmétique", "argan alimentaire"],[pArganCosmetique, pArganAlimentaire], ["arganCosmetique.jpg", "arganPic.jpg"]],
    listeSousProduitAmlou  = [["amlou amande", "amlou noisette"],[pAmlou, pAmlou], ["amlou2.jpg", "amlou1.jpg"]],
    listeSousProduitMiel   = [["miel orange", "miel daghmouss"],[pMiel, pMiel], ["miel.jpg", "miel1.jpg"]];
let list = [["argan", pArganCosmetique, "arganCosmetique.jpg", "A", "amlou alimentaire", listeSousProduitArgan, 2], ["amlou", pAmlou, "amlou2.jpg", "B", "amlou amande", listeSousProduitAmlou, 2], ["miel", pMiel, "miel.jpg", "C", "miel orange", listeSousProduitMiel, 2]];

function avance(){
    if (i>=-1 && i<=1){
        i++;
        productName.innerHTML = list[i][0];
        paragraphProduct.innerHTML = list[i][1];
        imageProduct.setAttribute("src", list[i][2]);
        productTag.innerHTML = list[i][3];
        sousProduitName.innerHTML = list[i][4];
        j = 0;
        barreChargement.style.width = `${((j+1)*100/(list[i][6]))}%`;
    }
}
function retour(){
    if (i>=1 && i<=2){
        i--;
        productName.innerHTML = list[i][0];
        paragraphProduct.innerHTML = list[i][1];
        imageProduct.setAttribute("src", list[i][2]);
        productTag.innerHTML = list[i][3];
        sousProduitName.innerHTML = list[i][4];
        j = 0;
        barreChargement.style.width = `${((j+1)*100/(list[i][6]))}%`;

    }
}

function next(){
    if (j>=0 && j<list[i][6]-1){
        j++;
        sousProduitName.innerHTML = list[i][5][0][j];
        imageProduct.setAttribute("src", list[i][5][2][j]);
        paragraphProduct.innerHTML = list[i][5][1][j];
        barreChargement.style.width = `${((j+1)*100/(list[i][6]))}%`;

    }
}



function animation(){
    
    if (i==2){
        i = -1;
    }
    avance();
}



//setInterval(animation, 3000);
arrowRight.addEventListener("click", avance);
arrowLeft.addEventListener("click", retour);


