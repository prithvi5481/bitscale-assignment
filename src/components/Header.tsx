import React from "react";
import { HomeIcon, StarIcon, ChevronDownIcon, CloudIcon, CoinsIcon } from "./Icons";

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3">
                <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600 transition-colors">
                    <HomeIcon />
                </button>

                <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                    <StarIcon filled={true} />
                </button>

                <nav className="flex items-center text-sm">
                    <span className="text-gray-600 font-medium">Workbook - Bitscale UX /UI testing flow</span>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-800 cursor-pointer">Bitscale grid only</span>
                </nav>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
                    <span className="text-sm text-gray-600">Grid running</span>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: "10%" }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">10%</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <CloudIcon />

                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EDF3EC] rounded-lg">
                    <CoinsIcon />
                    <span className="text-sm font-medium text-[#438361]">500/500</span>
                    <span className="px-3 py-1 bg-[#438361] text-white text-xs font-semibold rounded-md">
                        Free
                    </span>
                </div>

            </div>
        </header>
    );
};

export default Header;
