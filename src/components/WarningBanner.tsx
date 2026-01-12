import React from "react";
import { WarningIcon } from "./Icons";

const WarningBanner: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-3 px-4 py-2.5 bg-red-700 border-b border-red-200">
            <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium">
                    Payment failed. 450,000 credits will permanently expire in 30 days
                </span>
                <WarningIcon />
            </div>
            <button className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-md hover:bg-white/90 cursor-pointer transition-colors">
                Pay Now
            </button>
        </div>
    );
};

export default WarningBanner;
