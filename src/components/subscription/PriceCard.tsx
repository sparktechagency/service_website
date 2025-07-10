import { ErrorToast } from "@/helper/ValidationHelper";
import { useCreatePaymentIntentMutation } from "@/redux/features/payment/paymentApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { ISubscription } from "@/types/subscription.type";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CgSpinnerTwo } from "react-icons/cg";

type TProps = {
  subscription: ISubscription
}

const PriceCard = ({ subscription }: TProps ) => {
  const [createPaymentIntent, {isLoading}] = useCreatePaymentIntentMutation();
  const { subscription_status } = useAppSelector((state) => state.subscription);
  
  
  const handlePaymentIntent = () => {
    if (subscription_status?.subscription_status === "Active") {
      ErrorToast("You have already subscription")
    }
    else {
      createPaymentIntent({
        subscriptionId: subscription?._id
      })
    }
  }

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-sm duration-200`}
    >
      {subscription_status?.plan_id ===subscription?._id && subscription_status?.subscription_status==="Active" && ( 
        <div className="bg-primary text-white text-center py-1 text-sm">
          Active
        </div>
      )}

      {subscription_status?.plan_id ===subscription?._id && subscription_status?.subscription_status==="Expired" && ( 
        <div className="bg-red-500 text-white text-center py-1 text-sm">
          Expired
        </div>
      )}
      <div className="p-6">
        <h3 className="font-bold text-gray-800 uppercase">{subscription?.name}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{subscription?.notice}</p>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold">${subscription?.price}</span>
          <span className="text-gray-500 mb-1">/{subscription?.validation}</span>
        </div>
        <div className="space-y-3">
          {subscription?.conditions?.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handlePaymentIntent}
          // className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 cursor-pointer ${
          //   recommended
          //     ? "bg-primary hover:bg-[#2b4773] text-white"
          //     : "bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200"
          // }`}
          disabled={isLoading}
          className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200"
          `}
        >
          {
            isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Processing...
              </>
            ) : (
              <>
                Choose Plan
                <ArrowRight className="h-4 w-4" />
              </>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
