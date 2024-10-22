import { createContext, useState } from "react";

export const KapcsolContext = createContext("");

export const KapcsolProvider = (({ children }) => {
    const [boolList, lampaValt] = useState(randomList(9));

    function katt(adat) {
        const ujBoolList = [...boolList] // a ... által ÚJ másolatot készít a memóriában!

        if (ujBoolList[adat] === true) {
            ujBoolList[adat] = false
        } else {
            ujBoolList[adat] = true
        }
        console.log(ujBoolList[adat])
        lampaValt(ujBoolList)
    }

    function randomList(mennyiseg) {
        let lista = []
        for (let index = 0; index < mennyiseg; index++) {
            const randomSzam = Math.floor(Math.random() * 2 - 1) + 2;
            if (randomSzam % 2 === 0) {
                lista[index] = true
            } else {
                lista[index] = false
            }
        }

        return lista
    }

    return (<KapcsolContext.Provider value={{boolList, katt}}> {children} </KapcsolContext.Provider>)
})