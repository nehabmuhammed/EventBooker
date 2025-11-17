import axios, { Axios } from "axios"

const AxiosConfig = async(method,url,reqbody) =>{
    let configObj = {
        method:method,
        url:url,
        data:reqbody
    }

    return await axios(configObj).then((res) => {
        return res
    }).catch((err) => {
        return err
    })

}
export default AxiosConfig