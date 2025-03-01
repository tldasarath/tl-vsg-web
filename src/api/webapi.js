import axiosInstance from '../axios/AxiosInstance';

export const Enquery =async(data)=>{
    try {
        const response = await axiosInstance.post('/enquiries/create-enquiry',data)
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const Subscribe =async(data)=>{
    try {
        const response = await axiosInstance.post('/newsletter/subscribe',{email:data})
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const handleFaqs =async()=>{
    try {
        const response = await axiosInstance.get('/qna/get-faqs')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getPrivacyPolicy =async()=>{
    try {
        const response = await axiosInstance.get('/document/get-privacy')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getTerms =async()=>{
    try {
        const response = await axiosInstance.get('/document/get-terms')
        console.log(response,"terms");
        return response
    } catch (error) {
        console.error(error);
        
    }
}