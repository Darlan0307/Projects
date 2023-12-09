import { useEffect, useState } from "react"
import { PostsContext } from "./PostsContext";
import axios from "axios";

export const PostsProvider = ({children}) => {

    const [posts,setPosts] = useState([]);

    const fetchData = async () => {
        try{
        
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            setPosts(response.data)

        }catch(err){
            console.log("ERROR:",err);
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <PostsContext.Provider value={{posts,setPosts}}>
            {children}
        </PostsContext.Provider>
    )

}