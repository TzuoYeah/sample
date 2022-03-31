import react,{useState,createContext,useContext} from "react"

const toggleContext = createContext()
export const useToggle =()=> useContext(toggleContext)

export default function ToggleProvider({children}){
    const [toggle, setToggle] = useState(true)

    return(
        <toggleContext.Provider value={{toggle,setToggle}}>
            {children}
        </toggleContext.Provider>
    )
}