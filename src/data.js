const data = [
    {
        id: 0,
        title: "VBU - Zúčtovanie s orgánmi ZP a SP",
        info: "MD 336 | D 221",
        },
    {
        id: 1,
        title: "ID - Aktivácia nákladov v ocenení vo vynaložených vlastných nákladoch",
        info: "MD 041 | D 623",
    },
    {
        id: 2,
        title: "ID - Zaradenie do dlhodobého nehmotného majetku v ocenení VN alebo ROC",
        info: "MD 012 | D 041",
    },
    {
        id: 3,
        title: "ID - Ak je ROC nižšia ako VN, rozdiel sa zaúčtuje",
        info: "MD 548 | D 041",
    },
    {
        id: 4,
        title: "PFA - Zaúčtovanie faktúry",
        info: "MD 041 | D 321",
    },
    {
        id: 5,
        title: "PFA - Obstaranie DHM od dodávateľa",
        info: "MD 042 | D 321",
    },
    {
        id: 6,
        title: "VPD - Obstaranie DHM v hotovosti",
        info: "MD 042 | D 211",
    },
    {
        id: 7,
        title: "PFA - Obstaranie DNM od dodávateľa",
        info: "MD 041 | D 321",
    },
    {
        id: 8,
        title: "VPD - Obstaranie DNM za hotové",
        info: "MD 041 | D 211",
    },
    {
        id: 9,
        title: "ID - Aktivácia nehmotných výsledkov vývoja",
        info: "MD 012 | D 623",
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
        title: "ID - Účtovný odpis k ostatnému DNM",
        info: "MD 551 | D 079",
    },
    {
        id: 15,
        title: "ID - Účtovný odpis k stavbám",
        info: "MD 551 | D 081",
    },
    {
        id: 16,
        title: "ID - Účtovný odpis k samostaným hnuteľným veciam",
        info: "MD 551 | D 082",
    },
    {
        id: 17,
        title: "ID - Účtovný odpis k ostatnému DHM",
        info: "MD 551 | D 089",
    },
    {
        id: 18,
        title: "VBU - Inkaso faktúry od odberateľa",
        info: "MD 221 | D 311",
    },
    {
        id: 19,
        title: "VBU - Prevod z pokladne na účet",
        info: "MD 221 | D 261",
    },
    {
        id: 20,
        title: "VBU - Úrok z BÚ za bežné obdobie, výnosový, kreditný",
        info: "MD 221 | D 662",
    },
    {
        id: 21,
        title: "PPD - Príjem peňazí na výplatu predd. na mzdy",
        info: "MD 211 | D 261",
    },
    {
        id: 22,
        title: "VBU - Výber peňazí na výplatu predd na mzdy",
        info: "MD 261 | D 221",
    },
    {
        id: 23,
        title: "VPD - Výplata preddavkov na mzdy cl. družstva",
        info: "MD 366 | D 211",
    },
    {
        id: 24,
        title: "ZVL - Hrubé mzdy členov družstva",
        info: "MD 522 | D 366",
    },
    {
        id: 25,
        title: "ZVL - Zrážka predd. na daň z príjmov",
        info: "MD 366 | D 342",
    },
    {
        id: 26,
        title: "ZVL - Daňový bonus 10 detí",
        info: "MD 342 | D 366",
    },
    {
        id: 27,
        title: "ZVL - Zrážka na sporenie,pôžičky",
        info: "MD 366 | D 379",
    },
    {
        id: 28,
        title: "ZVL - Dávky dočasnej práceneschopnosti pre spoločníka",
        info: "MD 527 | D 366",
    },
    {
        id: 29,
        title: "VBU - Úrok z BÚ za bežné obdobie, výnosový, kreditný",
        info: "MD 221 | D 662",
    },
    {
        id: 30,
        title: "PPD - Príjem peňazí na výplatu vyúčtovania",
        info: "MD 211 | D 261",
    },
    {
        id: 31,
        title: "VBU - Výber peňazí na výplatu vyúčtovania",
        info: "MD 261 | D 221",
    },
    {
        id: 32,
        title: "VPD - Výplata vyúčtovania miezd",
        info: "MD 366 | D 211",
    },
    {
        id: 33,
        title: "VBU - Úhrada dane z príjmov",
        info: "MD 342 | D 221",
    },
    {
        id: 34,
        title: "VBU - Úhrada dobrovoľných zrážok",
        info: "MD 379 | D 221",
        },    
    {
        id: 35,
        title: "ZAZ - Zaradenie ekonomického softvéru do používania do OC",
        info: "MD 013 | D 041",
    },
    {
        id: 36,
        title: "VYD - Spotreba materiálu vy vývoji",
        info: "MD 501 | D 112",
    },
    {
        id: 37,
        title: "ID - Aktivovanie nákladov na vývoja",
        info: "MD 041 | D 623",
    },
    {
        id: 38,
        title: "ZAZ - Zaradenie výsledkov vývoja do užívania",
        info: "MD 012 | D 041",
    },
    {
        id: 39,
        title: "VBÚ - Poskytnutý preddavok na nákup DHM",
        info: "MD 052 | D 221",
    },
    {
        id: 40,
        title: "VPFA - Preprava výrobnej linky vo vlastnej réžii",
        info: "MD 042 | D 622",
    },
    {
        id: 41,
        title: "VBU - Zaplatený preddavok na nákup softvéru",
        info: "MD 051 | D 221",
    },
    {
        id: 42,
        title: "VPD - Provízia na softvér v hotovosti",
        info: "MD 041 | D 211",
    },
    {
        id: 43,
        title: "ID - Vo vlastnej réžii obstaraná budova skladu",
        info: "MD 042 | D 624",
    },
    {
        id: 44,
        title: "ZAZ - Zaradenie budovy do užívania",
        info: "MD 021 | D 042",
    },
    {
        id: 45,
        title: "ID - Zúčtovanie preddavku za softvér",
        info: "MD 321 | D 051",
    },
    {
        id: 46,
        title: "VKdBÚv - Uhráda fa za softvér z kd. úveru",
        info: "MD 321 | D 231",
    },
    {
        id: 47,
        title: "PFA - Preprava stroja od neplatiteľa DPH",
        info: "MD 042 | D 321",
    },
    {
        id: 48,
        title: "ZAZ - Zaradenie stroja do užívania v obst. cene",
        info: "MD 022 | D 042",
    },
    {
        id: 49,
        title: "ID - Zúčtovanie preddavku",
        info: "MD 324 | D 311",
    },
    {
        id: 50,
        title: "VBU - prijatý preddavok na výrobky",
        info: "MD 221 | D 324",
    },
]

export default data
