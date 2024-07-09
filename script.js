const flashcardsBiologie = [
    { termin: "fotosyntéza", definice: "Proces, kterým zelené rostliny využívají sluneční světlo k syntéze potravin z oxidu uhličitého a vody" },
    { termin: "mitochondrie", definice: "Organely známé jako energetická centra buňky, které generují většinu dodávky ATP buňky" },
    { termin: "ekosystém", definice: "Biologické společenství interagujících organismů a jejich fyzického prostředí" },
    { termin: "DNA", definice: "Deoxyribonukleová kyselina, nositelka genetické informace" },
    { termin: "osmóza", definice: "Pohyb molekul vody přes selektivně propustnou membránu" },
    { termin: "mutace", definice: "Změna v sekvenci DNA genu" },
    { termin: "homeostáza", definice: "Schopnost organismu udržovat stabilní vnitřní prostředí" },
    { termin: "enzym", definice: "Proteiny, které působí jako biologické katalyzátory k urychlení chemických reakcí" }
]

const flashcardsFyzika = [
    { termin: "kvantová mechanika", definice: "Odvětví fyziky, které se zabývá chováním částic na velmi malé škále" },
    { termin: "relativita", definice: "Einsteinova teorie popisující vzájemný vztah času a prostoru" },
    { termin: "entropie", definice: "Míra neuspořádanosti nebo náhodnosti v systému" },
    { termin: "supravodivost", definice: "Jev, při kterém materiál může vést elektřinu bez odporu" },
    { termin: "Higgsův boson", definice: "Částice, která dává hmotu jiným částicím, objevena v CERNu" },
    { termin: "vlnově-částicová dualita", definice: "Koncept, že každá částice nebo kvantová entita vykazuje vlastnosti jak vln, tak částic" },
    { termin: "černá díra", definice: "Oblast prostoru s gravitačním polem tak silným, že z něj nemůže uniknout žádná hmota ani záření" },
    { termin: "teorie strun", definice: "Teoretický rámec, ve kterém jsou bodové částice nahrazeny jednorozměrnými strunami" }
]

const flashcardsChemie = [
    { termin: "kovalentní vazba", definice: "Chemická vazba, která zahrnuje sdílení elektronových párů mezi atomy" },
    { termin: "mol", definice: "Množství látky obsahující stejný počet částic, jako je atomů ve 12 gramech uhlíku-12" },
    { termin: "acidobazická reakce", definice: "Chemická reakce, ke které dochází mezi kyselinou a zásadou, často produkující vodu a sůl" },
    { termin: "katalyzátor", definice: "Látka, která zvyšuje rychlost chemické reakce, aniž by byla během procesu spotřebována" },
    { termin: "periodická tabulka", definice: "Tabulkové uspořádání chemických prvků, uspořádané podle jejich atomového čísla, elektronové konfigurace a opakujících se vlastností" },
    { termin: "elektronegativita", definice: "Míra tendence atomu přitahovat vazebný pár elektronů" },
    { termin: "izotop", definice: "Varianty konkrétního chemického prvku, které se liší počtem neutronů" },
    { termin: "Avogadrovo číslo", definice: "Počet částic, obvykle atomů nebo molekul, které jsou obsaženy v jednom molu látky" }
]

const flashcardsMatematika = [
    { termin: "Pythagorova věta", definice: "V pravoúhlém trojúhelníku se obsah čtverce nad přeponou rovná součtu obsahů čtverců nad oběma odvěsnami" },
    { termin: "derivace", definice: "Míra, jak se funkce mění vzhledem ke změnám jejího vstupu" },
    { termin: "integrál", definice: "Matematický objekt, který představuje plochu pod křivkou" },
    { termin: "prvočíslo", definice: "Přirozené číslo větší než 1, které nemá jiné dělitele než 1 a samo sebe" },
    { termin: "matice", definice: "Obdélníkové uspořádání čísel nebo jiných matematických objektů, pro které jsou definovány operace, jako je sčítání a násobení" },
    { termin: "vektor", definice: "Velikost mající směr i velikost" },
    { termin: "komplexní číslo", definice: "Číslo, které lze vyjádřit ve tvaru a + bi, kde a a b jsou reálná čísla a i je imaginární jednotka" },
    { termin: "logaritmus", definice: "Exponenciál, kterým musí být základ umocněn, aby vzniklo dané číslo" }
]


let index = 0;
let right = 0;
let revise = 0;
let wrong = 0;
let maxLength = 0;
let currentCard = "";

const card = document.querySelector(".card-main");
const btnEl = document.querySelector(".btn-stats");
const statsEl = document.querySelector(".statistika");
const buttonMenu = document.querySelector(".btn-menu");

const menuPage = document.querySelector("#menuPage");
const cardPage = document.querySelector("#cardPage");
const cardItems = document.querySelectorAll("#item");

const rightBtn = document.querySelector("#vim");
const reviseBtn = document.querySelector("#nejistota");
const wrongBtn = document.querySelector("#nevim");

const cardTerm = document.querySelector("#termin");
const cardDef = document.querySelector("#definice");

const buttonNext = document.querySelector("#dalsi");
const buttonPrevious = document.querySelector("#zpet");

const header = document.querySelector(".cardHeader");


function pageChange(item) {
    menuPage.classList.toggle("hidden");
    cardPage.classList.toggle("hidden");
    index = 0;
    currentCard = item.srcElement.innerHTML;
    header.innerHTML = currentCard;
    cardTerm.classList.remove("eko", "ang", "ivt", "ces");
    cardDef.classList.remove("eko", "ang", "ivt", "ces")
    checkCard()
    cardPrimal()
}


function checkCard() {
    if (currentCard === "Biologie") {
        setCardProperties(flashcardsBiologie, "eko")
    } else if (currentCard === "Fyzika") {
        setCardProperties(flashcardsFyzika, "ivt")
    } else if (currentCard === "Chemie") {
        setCardProperties(flashcardsChemie, "ang")
    } else if (currentCard === "Matematika") {
        setCardProperties(flashcardsMatematika, "ces")
    }
}

function setCardProperties(cards, className) {
    setCard(cards);
    maxLength = cards.length;
    cardTerm.classList.add(className);
    cardDef.classList.add(className);
}

function setCard(currentFlashcard) {
    cardTerm.innerHTML = currentFlashcard[index].termin;
    cardDef.innerHTML = currentFlashcard[index].definice;
}

function cardClick() {
    cardTerm.classList.toggle("hidden");
    cardDef.classList.toggle("hidden");
    btnEl.classList.toggle("hidden");
    statsEl.classList.toggle("hidden");
}

function cardPrimal() {
    cardTerm.classList.remove("hidden");
    cardDef.classList.add("hidden");
    btnEl.classList.add("hidden");
    statsEl.classList.add("hidden");
}

function next() {
    index += 1;
    
    if (index === maxLength) {
        index = 0;
    }
    cardPrimal()
    checkCard()
}

function previous() {
    index -= 1;

    if (index < 0) {
        index = maxLength - 1;
    }
    cardPrimal()
    checkCard()

}

function animate(animation) {
    cardDef.classList.add("animate__animated", `animate__${animation}`)
    
    setTimeout(() => {
        cardDef.classList.remove("animate__animated", `animate__${animation}`)
        cardClick();
        next();
    }, 1000)
    return animation;
}



card.addEventListener("click", cardClick);
buttonNext.addEventListener("click", next);
buttonPrevious.addEventListener("click", previous);

cardItems.forEach((item) => {
    item.addEventListener("click", pageChange);
});

buttonMenu.addEventListener("click", pageChange)


rightBtn.addEventListener("click", function () {
    const spanRight = document.querySelector(".rightNumber");
    right += 1;
    spanRight.innerHTML = right;
    animate("shakeY");
})

reviseBtn.addEventListener("click", function () {
    const spanRevise = document.querySelector(".reviseNumber");
    revise += 1;
    spanRevise.innerHTML = revise;
    animate("pulse")
})

wrongBtn.addEventListener("click", function () {
    const spanWrong = document.querySelector(".wrongNumber");
    wrong += 1;
    spanWrong.innerHTML = wrong;
    animate("shakeX");
})

