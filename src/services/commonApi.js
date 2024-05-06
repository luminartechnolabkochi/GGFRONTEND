
import axios from "axios"

export const commonApi=async(method,url,data,headers)=>{

    return await axios(
        {
            method,url,
            data,
            headers:headers?headers:{"Content-Type":"application/json"}
        }
    ).then(res=>res).catch(err=>err)

}


