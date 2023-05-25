const data = [
    {
        id: 0,
        title: "VBU - Zúčtovanie s orgánmi zdravotnej a sociálnej poisťovne",
        info: "MD 336 | D 221",
        },
    {
        id: 1,
        title: "ID - Aktivácia dlhodobého nehmotného majetku vytvoreného vo vlastnej réžii",
        info: "MD 041 | D 623",
    },
    {
        id: 2,
        title: "ZAZ - Zaradenie aktivovaných nákladov na vývoj do používania",
        info: "MD 012 | D 041",
    },
    {
        id: 3,
        title: "ID - Rozdiel medzi reálnou obstarávacou cenou a vlastnými nákladmi pri aktivácii dlhodobého nehmotného majetku",
        info: "MD 548 | D 041",
    },
    {
        id: 4,
        title: "PFA - Obstaranie dlhodobého nehmotného majetku od dodávateľa",
        info: "MD 041 | D 321",
    },
    {
        id: 5,
        title: "PFA - Obstaranie dlhodobého hmotného majetku od dodávateľa",
        info: "MD 042 | D 321",
    },
    {
        id: 6,
        title: "VPD - Obstaranie dlhodobého hmotného majetku v hotovosti",
        info: "MD 042 | D 211",
    },
    {
        id: 7,
        title: "VFA - Predaj dlhodobého nehmotného majetku alebo dlhodobého hmotného majetku",
        info: "MD 315 | D 641",
    },
    {
        id: 8,
        title: "VPD - Obstaranie dlhodobého nehmotného majetku v hotovosti",
        info: "MD 041 | D 211",
    },
    {
        id: 9,
        title: "ZAZ - Zaradenie obstaraného softvéru do používania",
        info: "MD 013 | D 041",
    },
    {
        id: 10,
        title: "ID - Účtovný odpis k aktivovaným nákladom na vývoj",
        info: "MD 551 | D 072",
    },
    {
        id: 11,
        title: "ID - Účtovný odpis k softvéru",
        info: "MD 551 | D 073",
    },
    {
        id: 12,
        title: "ID - Účtovný odpis k oceniteľným právam",
        info: "MD 551 | D 074",
    },
    {
        id: 13,
        title: "ID - Účtovný odpis ku goodwillu",
        info: "MD 551 | D 075",
    },
    {
        id: 14,
        title: "ID - Účtovný odpis k ostatnému dlhodobému nehmotnému majetku",
        info: "MD 551 | D 079",
    },
    {
        id: 15,
        title: "ID - Účtovný odpis k stavbám",
        info: "MD 551 | D 081",
    },
    {
        id: 16,
        title: "ID - Účtovný odpis k samostaným hnuteľným veciam a súborom hnuteľných vecí",
        info: "MD 551 | D 082",
    },
    {
        id: 17,
        title: "ID - Účtovný odpis k ostatnému dlhodobému hmotnému majetku",
        info: "MD 551 | D 089",
    },
    {
        id: 18,
        title: "VBU - Inkaso faktúry od odberateľa",
        info: "MD 221 | D 311",
    },
    {
        id: 19,
        title: "VBU - Prevod peňazí z pokladnice na bankový účet",
        info: "MD 221 | D 261",
    },
    {
        id: 20,
        title: "VBU - Úrok kreditný (výnos)",
        info: "MD 221 | D 662",
    },
    {
        id: 21,
        title: "PPD - Príjem peňazí z bankového účtu do pokladnice",
        info: "MD 211 | D 261",
    },
    {
        id: 22,
        title: "VBU - Prevod peňazí z bankového účtu do pokladnice",
        info: "MD 261 | D 221",
    },
    {
        id: 23,
        title: "VPD - Výplata miezd spoločníkom / členom družstva",
        info: "MD 366 | D 211",
    },
    {
        id: 24,
        title: "ZVL - Priznané hrubé mzdy spoločníkom / členom družstva",
        info: "MD 522 | D 366",
    },
    {
        id: 25,
        title: "ZVL - Zrážka preddavku na daň z príjmov spoločníkov / členov družstva",
        info: "MD 366 | D 342",
    },
    {
        id: 26,
        title: "ZVL - Daňový bonus na deti spoločníkov / členov družstva",
        info: "MD 342 | D 366",
    },
    {
        id: 27,
        title: "ZVL - Dobrovoľné zrážky (sporenie, hypotéka...) spoločníkov / členov družstva",
        info: "MD 366 | D 379",
    },
    {
        id: 28,
        title: "ZVL - Dávky dočasnej práceneschopnosti pre spoločníkov / členov družstva",
        info: "MD 527 | D 366",
    },
    {
        id: 29,
        title: "VBU - Úrok debetný (náklad)",
        info: "MD 562 | D 221",
    },
    {
        id: 30,
        title: "VPD - Prevod peňazí z pokladnice na bankový účet",
        info: "MD 261 | D 211",
    },
    {
        id: 31,
        title: "ID - Kurzový rozdiel na devízovom účte k 31.12. - zisk",
        info: "MD 221/2 | D 663",
    },
    {
        id: 32,
        title: "VBU - Výplata miezd zamestnancom",
        info: "MD 331 | D 221",
    },
    {
        id: 33,
        title: "VBU - Úhrada daní z príjmov zamestnancov / spoločníkov / členov družstva",
        info: "MD 342 | D 221",
    },
    {
        id: 34,
        title: "VBU - Úhrada dobrovoľných zrážok",
        info: "MD 379 | D 221",
        },    
    {
        id: 35,
        title: "ZAZ - Zaradenie stroja do používania",
        info: "MD 022 | D 042",
    },
    {
        id: 36,
        title: "VYD - Spotreba materiálu (spôsob A)",
        info: "MD 501 | D 112",
    },
    {
        id: 37,
        title: "VPFA - Preprava obstaraného tovaru zabezpečená vo vlastnej réžii",
        info: "MD 131 | D 622",
    },
    {
        id: 38,
        title: "PRI - Príjem obstaraného tovaru na sklad",
        info: "MD 132 | D 131",
    },
    {
        id: 39,
        title: "VBU - Poskytnutý preddavok na nákup dlhodobého hmotného majetku",
        info: "MD 052 | D 221",
    },
    {
        id: 40,
        title: "VPFA - Preprava výrobnej linky vo vlastnej réžii",
        info: "MD 042 | D 622",
    },
    {
        id: 41,
        title: "VBU - Poskytnutý preddavok na nákup dlhodobého nehmotného majetku",
        info: "MD 051 | D 221",
    },
    {
        id: 42,
        title: "VPD - Provízia na dlhodobý nehmotný majetok",
        info: "MD 041 | D 211",
    },
    {
        id: 43,
        title: "ID - Aktivácia dlhodobého hmotného majetku zhotoveného vo vlastnej réžii",
        info: "MD 042 | D 624",
    },
    {
        id: 44,
        title: "ZAZ - Zaradenie stavby do užívania",
        info: "MD 021 | D 042",
    },
    {
        id: 45,
        title: "ID - Zúčtovanie preddavku za dlhodobý nehmotný majetok",
        info: "MD 321 | D 051",
    },
    {
        id: 46,
        title: "VKdBUv - Uhráda prijatej faktúry z krátkodobého bankového úveru",
        info: "MD 321 | D 231",
    },
    {
        id: 47,
        title: "PFA - Preprava stroja poskytnutá neplatiteľom DPH",
        info: "MD 042 | D 321",
    },
    {
        id: 48,
        title: "ZAZ - Zaradenie stroja do užívania v obstarávacej cene",
        info: "MD 022 | D 042",
    },
    {
        id: 49,
        title: "ID - Zúčtovanie prijatého preddavku od odberateľa",
        info: "MD 324 | D 311",
    },
    {
        id: 50,
        title: "VBU - Prijatý preddavok od odberateľa",
        info: "MD 221 | D 324",
    },
    {
        id: 51,
        title: "PPD - Nedoručené mzdy zamestnancov vrátené poštou alebo bankou",
        info: "MD 211 | D 331",
    },
    {
        id: 52,
        title: "VPD - Zákonne povinné sociálne náklady platené v hotovosti",
        info: "MD 527 | D 211",
    },
    {
        id: 53,
        title: "VPD - Dobrovoľné sociálne náklady platené v hotovosti",
        info: "MD 528 | D 211",
    },
    {
        id: 54,
        title: "VBU - Inkaso pohľadávok od orgánov zdravotného a sociálneho poistenia",
        info: "MD 221 | D 336",
    },
    {
        id: 55,
        title: "ID - Zúčtovanie dávky nemocenského poistenia/sociálnej dávky",
        info: "MD 336 | D 331",
    },
    {
        id: 56,
        title: "ID - Tvorba nároku na vrátenie mzdy spoločníkom/členom družstva",
        info: "MD 366 | D 522",
    },
    {
        id: 57,
        title: "ID - Príspevok do (štátneho) garančného fondu",
        info: "MD 524 | D 379",
    },
    {
        id: 59,
        title: "ID - Predpis na doplnkové dôchodkové sporenie",
        info: "MD 525 | D 336",
    },
    {
        id: 60,
        title: "ID - Stravné lístky zrazené zamestnancovi zo mzdy",
        info: "MD 521 | D 213",
    },
    {
        id: 61,
        title: "VBU - Poskytnutý preddavok na nákup cenných papierov",
        info: "MD 053 | D 221",
    },
    {
        id: 62,
        title: "ID - Chyba účtovania - Prebytky materiálu na sklade zistené pri inventarizácii",
        info: "MD 112 | D 501",
    },
    {
        id: 63,
        title: "ID - Spotreba materiálu vo výrobe",
        info: "MD 501 | D 112",
    },
    {
        id: 64,
        title: "ID - Tovar použitý na zhotovenie reklamy vo vlastnej réžii",
        info: "MD 501 | D 132",
    },
    {
        id: 65,
        title: "ID - DPH vyrubená colným orgánom pri dovoze tovaru",
        info: "MD 343 | D 379",
    },
    {
        id: 66,
        title: "ID - Dodatočné vyrubenie daní za minulé obdobia, ak nemožno zvýšiť hodnotu dlhodobého majetku",
        info: "MD 538 | D 343",
    },
    {
        id: 67,
        title: "VFA - Predaj aktivovaných nákladov na vývoj",
        info: "MD 311 | D 641",
    },
    {
        id: 68,
        title: "VFA - Predaj vlastneného softvéru (zaradeného do DM)",
        info: "MD 311 | D 641",
    },
    {
        id: 69,
        title: "ID - Otvorenie nového roka - zaúčtovanie začiatočného stavu (311 Odberatelia)",
        info: "MD 311 | D 701",
    },
    {
        id: 70,
        title: "VFA - Tržby z predaja tovaru",
        info: "MD 311 | D 604",
    },
    {
        id: 71,
        title: "VFA - Tržby z poskytnutých služieb",
        info: "MD 311 | D 602",
    },
    {
        id: 72,
        title: "VFA - Vyúčtovanie paušálov na záručné opravy",
        info: "MD 311 | D 384",
    },
    {
        id: 73,
        title: "VFA -Tržby z pradaja materiálu",
        info: "MD 311 | D 642",
    },
    {
        id: 74,
        title: "VFA - Výnosy z predaja cenných papierov a podielov",
        info: "MD 311 | D 661",
    },
    {
        id: 75,
        title: "VFA - Predplatné fakturované odberateľovi",
        info: "MD 311 | D 384",
    },
    {
        id: 76,
        title: "PFA - Nákup dlhodobého nehmotného materiálu",
        info: "MD 041 | D 321",
    },
    {
        id: 77,
        title: "DO - Zaúčtovanie dobropisu v prípade, že faktúra nebola uhradená",
        info: "MD 321 | D 041",
    },
    {
        id: 78,
        title: "DO - Zaúčtovanie dobropisu v prípade, že faktúra bola uhradená",
        info: "MD 315 | D 041",
    },
    {
        id: 79,
        title: "PPD - Inkaso pohľadávky voči zamestnancovi za zavinenú škodu na majetku",
        info: "MD 211 | D 335",
    },
    {
        id: 80,
        title: "PPD - Dodatočné inkaso náhrady za zavinenú škodu na majetku",
        info: "MD 211 | D 648",
    },
   /*  {
        id: 81,
        title: "PPD - Inkaso náhrady - značná suma (??? [pozn. hotelovka])",
        info: "MD 211 | D 428",
    },
    {
        id: 82,
        title: "PPD - Inkaso náhrady - malá suma (??? [pozn. hotelovka])",
        info: "MD 211 | D 538",
    }, */
    {
        id: 83,
        title: "VPD - Poplatky platené v hotovosti",
        info: "MD 538 | D 211",
    },
    {
        id: 84,
        title: "ID - Predpis pokút a penále od zdravotných poisťovní",
        info: "MD 545 | D 336",
    },
    {
        id: 85,
        title: "ID - Predpis pokút a penále za znečistenie ovzdušia",
        info: "MD 545 | D 345",
    },
    {
        id: 86,
        title: "ID - Predpis sankcie pri nesprávnom použití dotácie",
        info: "MD 545 | D 345",
    },
    {
        id: 87,
        title: "ID - Manko na materiáli nad normu prirodzených úbytkov (zavinené)",
        info: "MD 549 | D 112",
    },
    {
        id: 88,
        title: "ID - Manko na polotovaroch vlastnej výroby nad normu prirodzených úbytkov (zavinené)",
        info: "MD 549 | D 122",
    },
    {
        id: 89,
        title: "ID - Manko na výrobkoch vlastnej výroby nad normu prirodzených úbytkov (zavinené)",
        info: "MD 549 | D 123",
    },
    {
        id: 90,
        title: "ID - Manko na tovare nad normu prirodzených úbytkov (zavinené)",
        info: "MD 549 | D 132",
    },
    {
        id: 91,
        title: "ID - Prevod konečného zostatku pri účtovnej uzávierke (549 - Manká a škody)",
        info: "MD 710 | D 549",
    }, 
    {
        id: 92,
        title: "ID - Bezodplatný prevod pozemku, na ktorý účtovná jednotka nie je povinná (považuje sa za darovanie)",
        info: "MD 543 | D 031",
    }, 
    {
        id: 93,
        title: "ID - Bezodplatný prevod obstarávaného dlhodobého finančného majetku (považuje sa za darovanie)",
        info: "MD 543 | D 031",
    }, 
    {
        id: 94,
        title: "ID - Darovanie materiálu",
        info: "MD 543 | D 112",
    },
    {
        id: 95,
        title: "ID - Darovanie tovaru",
        info: "MD 543 | D 132",
    },
    {
        id: 96,
        title: "VPD - Poskytnutý peňažný dar v hotovosti",
        info: "MD 543 | D 211",
    },
    {
        id: 97,
        title: "VBU - Poskytnuté peňažné dary",
        info: "MD 543 | D 221",
    },
    {
        id: 98,
        title: "PFA - Faktúra za prijaté dary",
        info: "MD 543 | D 321",
    },
    {
        id: 98,
        title: "ID - Zriadenie strážneho psa vo vlastnej réžii",
        info: "MD 624 | D 124",
    },
    {
        id: 99,
        title: "VPFA - Výroba DHM vlastnou činnosťou",
        info: "MD 042 | D 624",
    },
    {
        id: 100,
        title: "ID - Zvýšenie ceny DHM na základe znaleckého posudku",
        info: "MD 042 | D 624",
    },
]
export default data
