import axios from 'axios'


const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
   baseURL :  baseURL,
   headers : {
      'Content-Type' : 'application/json'
   }
    
})

//Request Interceptor
axiosInstance.interceptors.request.use(
   function(config){
      const accessToken = localStorage.getItem('accessToken')
      config.headers['Authorization'] = `Bearer ${accessToken}`
      return config
   },
   function(error){
      return Promise.reject(error)
   }
)

//Response Interceptor 
axiosInstance.interceptors.response.use(
   //if doesn't have error
   function(response){
      return response
   },
   //Handle failed response
  async function(error){
      const originalRequest = error.config; //error.config is the request that failed
      if(error.response.status === 401 && !originalRequest.retry){
         originalRequest.retry = true; //prevent infinite loop 
         const refreshToken = localStorage.getItem('refreshToken')
         try{
            const response = await axiosInstance.post('/token/refresh/', {refresh: refreshToken})//send refresh token to backend
            // console.log(('New access token'),response.data.access)//get new access token
            localStorage.setItem('accessToken', response.data.access)
            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
            return axiosInstance(originalRequest)
         }
         catch(error){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
         }
      }
      return Promise.reject(error)
   }
)

export default axiosInstance;