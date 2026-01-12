import React from "react";
import {
    PlusIcon,
    MoreHorizontalIcon,
    StopIcon,
    PlayIcon,
    HeadphonesIcon,
    AutoDedupe,
} from "./Icons";

const BottomTabBar: React.FC = () => {
    const tabs = [
        { id: "bitscale-grid", label: "Bitscale grid only", active: true, hasMenu: true },
        { id: "user-engagement", label: "User Engagement" },
        { id: "customer-insights", label: "Customer Insights" },
        { id: "audience-interact", label: "Audience Interact" },
        { id: "lead-generation", label: "Lead Generation" },
    ];

    return (
        <div className="flex items-center justify-between px-2 py-1 bg-white border-t border-gray-200">
            <div className="flex items-center gap-1">

                <button className="px-3 py-1 flex items-center gap-1 cursor-pointer justify-center border-1 mr-1 border-gray-200 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    <PlusIcon /> <div>Grid</div>
                </button>

                {tabs.map((tab) => (
                    <div key={tab.id} className="flex items-center">
                        <button
                            className={`tab ${tab.active ? "active" : ""}`}
                        >
                            <span>{tab.label}</span>
                            {tab.hasMenu && (
                                <MoreHorizontalIcon />
                            )}
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2">
                <button className="btn text-red-700 hover:text-red-600 hover:bg-red-100">
                    <StopIcon />
                    <span>Kill Run</span>
                </button>
                <span className="w-px h-6 bg-gray-200 mx-1"></span>
                <button className="btn btn-secondary relative">
                    <PlayIcon />
                    <span>Auto Run</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-700 rounded-full"/>
                </button>

                <button className="btn btn-secondary relative">
                    <AutoDedupe />
                    <span>Auto Dedupe</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-700 rounded-full"/>
                </button>

                <button className="btn btn-secondary">
                    <HeadphonesIcon />
                    <span>Support</span>
                </button>
            </div>
        </div>
    );
};

export default BottomTabBar;
