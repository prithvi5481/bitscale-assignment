'use client'
import React, { useState } from "react";
import {
    PlusIcon,
    MoreHorizontalIcon,
    StopIcon,
    PlayIcon,
    HeadphonesIcon,
    AutoDedupe,
} from "./Icons";

const BottomTabBar: React.FC = () => {
    const [activeTab, setActiveTab] = useState("bitscale-grid");
    const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

    const tabs = [
        { id: "bitscale-grid", label: "Bitscale grid only", hasMenu: true, available: true },
        { id: "user-engagement", label: "User Engagement", available: false },
        { id: "customer-insights", label: "Customer Insights", available: false },
        { id: "audience-interact", label: "Audience Interact", available: false },
        { id: "lead-generation", label: "Lead Generation", available: false },
    ];

    const handleTabClick = (tabId: string, available: boolean) => {
        if (available) {
            setActiveTab(tabId);
            setShowComingSoon(null);
        } else {
            setShowComingSoon(tabId);
            setTimeout(() => setShowComingSoon(null), 2000);
        }
    };

    return (
        <div className="flex items-center justify-between px-2 py-1 bg-white border-t border-gray-200">
            <div className="flex items-center gap-1">

                <button className="px-3 py-1 flex items-center gap-1 cursor-pointer justify-center border-1 mr-1 border-gray-200 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    <PlusIcon /> <div>Grid</div>
                </button>

                {tabs.map((tab) => (
                    <div key={tab.id} className="relative flex items-center">
                        <button
                            onClick={() => handleTabClick(tab.id, tab.available)}
                            className={`tab ${activeTab === tab.id ? "active" : ""} ${!tab.available ? "opacity-70" : ""}`}
                        >
                            <span>{tab.label}</span>
                            {tab.hasMenu && (
                                <MoreHorizontalIcon />
                            )}
                        </button>

                        {/* Coming Soon Tooltip */}
                        {showComingSoon === tab.id && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200 z-50">
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span>Coming Soon!</span>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                            </div>
                        )}
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
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-700 rounded-full" />
                </button>

                <button className="btn btn-secondary relative">
                    <AutoDedupe />
                    <span>Auto Dedupe</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-700 rounded-full" />
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
