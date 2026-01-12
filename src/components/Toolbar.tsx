import React from "react";
import {
    DownloadIcon,
    RowsIcon,
    ColumnsIcon,
    SortIcon,
    FilterIcon,
    ChevronDownIcon,
    SparklesIcon,
    DoubleStarIcon,
    UserCompanyIcon,
} from "./Icons";

const Toolbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
            <div className="flex items-center gap-2">
                <button className="btn bg-gray-100 relative">
                    <UserCompanyIcon />
                    <span>Load Data</span>
                    <ChevronDownIcon />
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-purple-600 text-white text-[10px] font-bold rounded-full">
                        1
                    </span>
                </button>

                <div className="w-px h-6 bg-gray-200 mx-1"></div>

                <button className="btn btn-secondary relative">
                    <RowsIcon />
                    <span>2000 Rows</span>
                    <span className="absolute -top-1 -right-1 bg-blue-700 w-2 h-2 rounded-full"/>
                </button>

                <button className="btn btn-secondary relative">
                    <ColumnsIcon />
                    <span>16/20 Columns</span>
                    <span className="absolute -top-1 -right-1 bg-blue-700 w-2 h-2 rounded-full"/>
                </button>

                <button className="btn btn-secondary relative">
                    <SortIcon />
                    <span>Sort by</span>
                    <span className="absolute -top-1 -right-1 bg-blue-700 w-2 h-2 rounded-full"/>
                </button>

                <button className="btn btn-secondary relative">
                    <FilterIcon />
                    <span>Filter</span>
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-blue-500 text-white text-[10px] font-bold rounded-full">
                        1
                    </span>
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="btn bg-gray-100 w-auto">
                    <span>Action</span>
                    <ChevronDownIcon />
                </button>

                <button className="btn bg-gray-800 text-white">
                    <SparklesIcon />
                    <span>Enrichment</span>
                    <ChevronDownIcon className="text-white/70" />
                </button>

                <button className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-red-600 to-purple-600 rounded-full text-white hover:from-red-500 hover:to-purple-500 cursor-pointer transition-all shadow-sm">
                    <DoubleStarIcon />
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
