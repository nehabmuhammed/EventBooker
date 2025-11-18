import { Axios } from "axios";
import AxiosConfig from "./AxiosConfig";
import { baseUrl } from "./baseUrl";

export const addEvent = async(reqbody) => {
    return await AxiosConfig('post',`${baseUrl}/events`,reqbody)
}

export const getEvent = async() => {
    return await AxiosConfig('get',`${baseUrl}/events`,'')
}

export const deleteEvent = async(id) => {
    return await AxiosConfig('delete',`${baseUrl}/events/${id}`,{})
}

export const editEvent = async(id,reqBody) => {
    return await AxiosConfig('put',`${baseUrl}/events/${id}`,reqBody)
}