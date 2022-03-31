import react,{useState,createContext,useContext} from "react"

const modeContext = createContext()
export const useMode =()=> useContext(modeContext)

export default function ModeProvider({children}){
    const [workMode, setWorkMode] = useState('commend')
    const [viewMode, setViewMode] = useState('posts')

    return(
        <modeContext.Provider value={{workMode,setWorkMode,viewMode,setViewMode}}>
            {children}
        </modeContext.Provider>
    )
}