import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchRiadwhoReserved} from "../redux/actions/ReservationAction.jsx";

const Pay = ({setOpenModal , id}) => {
    const distpatch = useDispatch()
    const riad = useSelector((state) => state.reservations?.datalist?.riad)
    const reservation = useSelector((state) => state.reservations?.datalist)
//    console.log('tete' , reservation)
    useEffect(() => {
        distpatch(fetchRiadwhoReserved(id))
    }, [distpatch]);


    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    useEffect(() => {
        if (riad?.prix && reservation?.night) {
            const calculatedTotal = calculateTotalAmount();
            setTotalAmount(calculatedTotal);
        }
    }, [riad?.prix, reservation?.night]);

    const calculateTotalAmount = () => {
        return riad.prix * reservation.night;
    };

    const handlePaymentSuccess = (data) => {
        setPaymentCompleted(true);
        console.log("Payment successful:", data);
    };

    const handlePaymentError = (err) => {
        setPaymentError(err);
        console.error("Payment error:", err);
    };



    return(
        <>


            <div className='fixed inset-0 z-50 '>
                <div className="min-h-screen  px-4 text-center">
                    <div className="fixed inset-0  " id="headlessui-dialog-overlay-:ra:"
                         aria-hidden="true" data-headlessui-state="open"></div>
                    <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div
                            className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-full">
                            <div
                                className="relative  flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                                <h3 className="text-lg font-medium leading-6 text-white"
                                    id="headlessui-dialog-title-70">Paiement</h3><span
                                className="absolute left-3 top-3"><button
                                onClick={() => setOpenModal(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none"><span
                                className="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="currentColor" aria-hidden="true"
                                                                     className="w-5 h-5"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></button></span>
                            </div>
                            <div
                                className="overflow-y-auto ">
                                <main className='container px-3 mt-5 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row'>

                                    <div className='w-fit lg:w-3/5 xl:w-2/3 lg:pr-10 '>
                                        <div
                                            className='w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-gray-700 space-y-8 px-0 sm:p-6 xl:p-8'>
                                            <h1 className='text-3xl lg:text-4xl font-semibold'>Confirm and payment</h1>

                                            <PayPalScriptProvider
                                                options={{
                                                    clientId: "AQiUlaS-IPytAhKdhksQcXrweAepRONMt3huN8X5_dPxOfShTSzTM0D3OlwI7n2tJbmN4ewH3C69uR-d",
                                                }}
                                            >
                                                {paymentCompleted ? (
                                                    <div>
                                                        <h2>Payment Successful!</h2>
                                                        <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                                                            Finish
                                                        </button>
                                                    </div>
                                                ) : paymentError ? (
                                                    <div>
                                                        <h2>Error Processing Payment</h2>
                                                        <p>{paymentError.message}</p>
                                                    </div>
                                                ) : (
                                                    <PayPalButtons
                                                        style={{ layout: "horizontal" }}
                                                        createOrder={(data, actions) => {
                                                            return actions.order.create({
                                                                purchase_units: [
                                                                    {
                                                                        description: riad?.description,
                                                                        amount: {
                                                                            currency_code: "USD",
                                                                            value: totalAmount
                                                                        },
                                                                    },
                                                                ],
                                                            });
                                                        }}
                                                        onApprove={handlePaymentSuccess}
                                                        onError={handlePaymentError}
                                                    />
                                                )}
                                            </PayPalScriptProvider>
                                        </div>
                                    </div>


                                    <div className="hidden lg:block flex-grow">
                                        <div
                                            className="w-fit sticky flex flex-col sm:rounded-2xl lg:border border-neutral-200 dark:border-gray-700 space-y-6 sm:space-y-8 px-0 sm:p-6 ">
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                <div className="flex-shrink-0 w-full sm:w-40">
                                                    <div
                                                        className="  aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
                                                        <img alt=""
                                                             className=" bg-cover bg-center  inset-0 object-cover"
                                                             sizes="200px"
                                                             src={`http://localhost:8000/storage/images/${riad?.cover}`}/>
                                                    </div>
                                                </div>
                                                <div className="py-5 sm:px-5 space-y-3">
                                                    <div><span
                                                        className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">{riad?.localisation}</span><span
                                                        className="text-base w-full font-medium mt-1 block">{riad?.name}</span>
                                                    </div>
                                                    <span
                                                        className="block  text-sm text-neutral-500 dark:text-neutral-400">Rooms {riad?.rooms}</span>
                                                    <span
                                                        className="block  text-sm text-neutral-500 dark:text-neutral-400">Guests {reservation?.guests}</span>
                                                    <div
                                                        className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>

                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-4"><h3
                                                className="text-2xl font-semibold">Price detail</h3>
                                                <div
                                                    className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                                                    <span>{riad?.currency} {riad?.prix} x {reservation?.night} day</span><span>{riad?.currency} {riad?.prix * reservation?.night}</span></div>
                                                <div
                                                    className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                                                    <span>Repas charge</span><span>$0</span></div>
                                                <div
                                                    className="border-b border-neutral-200 dark:border-neutral-700"></div>
                                                <div className="flex justify-between font-semibold">
                                                    <span>Total</span><span>{riad?.currency} {riad?.prix * reservation?.night}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Pay