import Api from '../../api/Api.jsx'
import {useParams} from "react-router";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

const Profile = () => {
    const {http} = Api()
    const {id} = useParams()
    const [loading, setLoading] = useState(false);
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const updateProfile = async (id) => {
        const form = new FormData()
        form.append('name' , name)
        form.append('email' , email)
        form.append('password' , password)

        const response = await http.post(`/profile/${id}`, form)
        return response.data
    }
    const validateForm = () => {
        if (!name || !email || !password){
            toast.error('Please fill in fields');
            return false;
        }
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()){
            setLoading(true)
            await updateProfile(id)
            toast.success('Profile updated successfully')
        }
    }

    return(
        <>
            <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">
                <div className="space-y-6 sm:space-y-8"><h2 className="text-3xl font-semibold">Account infomation</h2>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-shrink-0 flex items-start">
                            <div className="relative rounded-full overflow-hidden flex">
                                <div
                                    className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-32 h-32 ring-1 ring-white dark:ring-neutral-900">
                                    <img className="absolute inset-0 w-full h-full object-cover rounded-full"
                                         src="./static/media/Image-1.90baa8cc883db8970fda.png" alt="John Doe"/><span
                                    className="wil-avatar__name">J</span></div>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                    <span className="mt-1 text-xs">Change Image</span></div>
                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer"/></div>
                        </div>
                        <form onSubmit={handleSubmit} method='POST'>
                        <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
                            <div><label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                        data-nc-id="Label">Name</label><input type="text" className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" onChange={(e) => setName(e.target.value)}/></div>
                            <div><label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                        data-nc-id="Label">Username</label><input type="text" className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" onChange={(e)=>setEmail(e.target.value)}
                            /></div>
                            <div>
                                <label className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                        data-nc-id="Label">Email</label>
                                <input type="text" className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                    onChange={(e)=> setPassword(e.target.value)}
                            /></div>

                            <div className="pt-2">
                                <button
                                    type='submit'
                                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" disabled={loading}>{loading ?
                                    <svg aria-hidden="true" role="status"
                                         className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"></path>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"></path>
                                    </svg> : 'Update Info'}
                                </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )

}

export default Profile;