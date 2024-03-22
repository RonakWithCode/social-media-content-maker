import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
import { Alert } from "@material-tailwind/react";
import LoadingDialogBox from '../components/LoadingDialogBox';

import { DatabaseService } from "./ConfingDatabase";
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
        const navigate = useNavigate()

        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState(null)

        useEffect(() => {
            //setLoading(false)
            checkUserStatus()
         }, [])

         const loginUser = async (userInfo) => {
            setLoading(true)

            console.log('userInfo',userInfo)

            try{
                let response = await account.createEmailSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                console.error(error)
            }
            setLoading(false)
            
         }

         const logoutUser = async () => {
            await account.deleteSession('current');
            setUser(null)
         }

         const registerUser = async (userInfo) => {
            setLoading(true)
            try{  
                delete userInfo.confirm-password;
                // delete userInfo.password2;
                console.log(userInfo)
                const userdata = {
                    "firstName": userInfo.firstName,
                    "lastName": userInfo.lastName,
                    "email": userInfo.email,
                    "password": userInfo.password,
                }
                const Fullname = userInfo.firstName +" "+ userInfo.lastName;
                let response = await account.create(ID.unique(), userInfo.email, userInfo.password, Fullname);
                if (response) {
                  await account.createEmailSession(userInfo.email, userInfo.password)
                  let accountDetails = await account.get();
                  setUser(accountDetails);
                  console.log("User id ",accountDetails.$id);
                  userdata.Fullname = Fullname;
                  userdata.userId = accountDetails.$id;
                  console.log( "userdata  : ",userdata);

                  const databaseService = new DatabaseService();
                  databaseService.createUserInfo(userdata);
                  console.log(userdata);

          
            }
        }catch(error){
                console.log("Error of registerUser",error);
                
                throw error;
            }
        
            setLoading(false)
         }

         const checkUserStatus = async () => {
            try{
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                
            }
            setLoading(false)
         }

        const contextData = {
            user,
            loginUser,
            logoutUser,
            registerUser
        }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <LoadingDialogBox title={"Loading"}/> : children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;