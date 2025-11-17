import { Axios } from "axios";
import AxiosConfig from "./AxiosConfig";

export const addEvent = async(reqbody) => {
    return await AxiosConfig('post','http://localhost:3000/events',reqbody)
}

export const getEvent = async() => {
    return await AxiosConfig('get','http://localhost:3000/events','')
}

export const deleteEvent = async(id) => {
    return await AxiosConfig('delete',`http://localhost:3000/events/${id}`,{})
}

export const editEvent = async(id,reqBody) => {
    return await AxiosConfig('put',`http://localhost:3000/events/${id}`,reqBody)
}