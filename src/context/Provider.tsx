import React, {useState,createContext, ReactNode} from "react";

export interface UserInfo {
      name: string;
      age: number;
      hobbies: string[];
}
const defaultUser: UserInfo = {
      name: 'yogev',
      age: 34,
      hobbies: ['reading', 'running', 'eating']
}

export const UserContext = createContext<[UserInfo, (hobby:string) => void]>([
      defaultUser,
      () => null
]);

interface UserInfoProps{
      children: ReactNode
}

 const Provider: React.FC<UserInfoProps> = ({children}) => {

      const [user,setUser] = useState<UserInfo>(defaultUser);

      const addHobby = (hobby:string) =>{
            setUser((prevUser) => {
              const updatedHobbies = [...prevUser.hobbies,hobby]
                 return {
                  ...prevUser,
                  hobbies: updatedHobbies
                 }
            })
      }

      return <UserContext.Provider value={[user,addHobby]}>
            {children}
      </UserContext.Provider>

}
export default Provider;