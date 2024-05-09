import { commonApi } from "./commonApi"
import { baseUrl } from "./serverUrl"

export const addJobCardApi=async (data)=>{
    
   return await commonApi("POST",`${baseUrl}/jobcard/`,data)
}


export const jobListApi=async()=>{

    return await commonApi("GET",`${baseUrl}/jobcard/`,"")

}

export const jobCardDetailApi= async(id)=>{

    return await commonApi("GET",`${baseUrl}/jobcard/${id}/`,"")
}

export const addWorkApi=async (id,data)=>{

    return await commonApi("POST",`${baseUrl}/jobcard/${id}/add_job/`,data)
}


export const updateWorkStatusApi=async (id)=>{

    return await commonApi("POST",`${baseUrl}/jobcard/${id}/mark_as_done/`)
}

