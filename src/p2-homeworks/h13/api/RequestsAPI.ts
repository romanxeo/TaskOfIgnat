import axios from "axios";

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'
})

export const requestsAPI = {
  sendSuccess(success: boolean) {
    //debugger
    const promise = instance.post('test', {success: success});
    return promise;
  }
}