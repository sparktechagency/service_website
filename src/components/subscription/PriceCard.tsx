import { ISubscription } from "@/types/subscription.type";
import { ArrowRight, CheckCircle } from "lucide-react";

type TProps = {
  subscription: ISubscription
}

const PriceCard = ({ subscription }: TProps ) => {
  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-sm duration-200`}
    >
      {/* {recommended && (
        <div className="bg-primary text-white text-center py-1 text-sm">
          Recommendation
        </div>
      )} */}
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
          // className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 cursor-pointer ${
          //   recommended
          //     ? "bg-primary hover:bg-[#2b4773] text-white"
          //     : "bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200"
          // }`}
          className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200"
          `}
        >
          Choose Plan
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
