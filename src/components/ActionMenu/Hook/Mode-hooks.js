import react,{useState,createContext,useContext} from "react"

const modeContext = createContext()
export const useMode =()=> useContext(modeContext)

export default function ModeProvider({children}){
    const [mode, setModeType] = useState(0)
    const changeModeType = mode => setModeType(mode)

    return(
        <modeContext.Provider value={{mode,changeModeType}}>
            {children}
        </modeContext.Provider>
    )
}