import react,{useState,createContext,useContext} from "react"

const modeContext = createContext()
export const useMode =()=> useContext(modeContext)

export default function ModeProvider({children}){
    const [workMode, setWorkMode] = useState(0)
    const [viewMode, setViewMode] = useState(0)

    return(
        <modeContext.Provider value={{workMode,setWorkMode,viewMode,setViewMode}}>
            {children}
        </modeContext.Provider>
    )
}