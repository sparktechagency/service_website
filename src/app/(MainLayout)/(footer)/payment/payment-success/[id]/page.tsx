"use client"

import PaymentSuccessLoading from "@/components/loader/PaymentSuccessLoading";
import { useSaveToPaymentsQuery } from "@/redux/features/payment/paymentApi";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const PaymentSuccessPage = () => {
    const params = useParams<{ id: string }>();
    useSaveToPaymentsQuery(params.id);

     const PaymentSuccess = dynamic(() => import('@/components/payment/PaymentSuccess'), {
          ssr: false,
          loading: () => <PaymentSuccessLoading/>
        });

    return <PaymentSuccess/>

}


export default PaymentSuccessPage;