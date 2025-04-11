import { createContext , useState  } from 'react'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false)

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const {getToken} = useAuth()

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      if (response.data.success) {
        setCredit(response.data.credits);
      } else {
        toast.error(response.data.message || "Failed to load credits");
      }
    } catch (error) {
      console.error("Error loading credits:", error);
      toast.error(error.response?.data?.message || "Unable to connect to server");
    }
  }

  const value = {
      credit,
      loadCreditsData, setCredit,backendUrl
    }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
  }
export default AppContextProvider;