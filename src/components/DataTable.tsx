import React from "react";
import {
    UserIcon,
    ChevronRightIcon,
    CheckIcon,
    LinkIcon,
    ChevronRight,
    UserCompanyIcon,
    CalenderIcon,
    EmailIcon,
    PauseIcon
} from "./Icons";
import { mockData, companyRows, TableRow } from "@/data/mockData";
import { GetCompanyLogo } from "./GetCompanyLogo";
import FunctionIcon from '@/assets/functionIcon.png'
import Image from "next/image";

const DataTable: React.FC = () => {
    const getStatusBadge = (status: TableRow["emailStatus"]) => {
        switch (status) {
            case "found":
                return (
                    <div className="flex items-center justify-between px-2 gap-1.5 h-6 w-auto bg-[#F3F4F6] font-[400px] rounded-full">
                        <div className="">
                            ✅
                            <span className="text-gray-700 text-sm px-2">Email Found</span>
                        </div>
                        <div>
                            <ChevronRight />
                        </div>
                    </div>
                );
            case "not_met":
                return (
                    <span className="text-yellow-500 text-sm italic">Run condition not met</span>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex-1 overflow-auto bg-white">
            <table className="data-table">
                <thead className="sticky top-0 z-10">
                    <tr>
                        <th className="w-14 gap-1">
                            <div className="flex items-center gap-1">
                                <input type="checkbox" />
                                <PauseIcon />
                            </div>
                        </th>
                        <th className="min-w-[210px] w-[210px]">
                            <div className="flex items-center gap-2">
                                <UserCompanyIcon />
                                <span>Imported Data</span>
                            </div>
                        </th>
                        <th className="min-w-[180px]">
                            <div className="flex items-center gap-2">
                                <CalenderIcon />
                                <span>Last Updated At</span>
                            </div>
                        </th>
                        <th className="min-w-[140px]">
                            <div className="flex items-center gap-2">
                                <Image src={FunctionIcon} alt="Function Icon" className="w-4 h-4" />
                                <span>Company Name</span>
                            </div>
                        </th>
                        <th className="min-w-[180px]">
                            <div className="flex items-center gap-2">
                                <Image src={FunctionIcon} alt="Function Icon" className="w-4 h-4" />
                                <span>Company Website</span>
                            </div>
                        </th>
                        <th className="min-w-[180px]">
                            <div className="flex items-center gap-2">
                                <Image src={FunctionIcon} alt="Function Icon" className="w-4 h-4" />
                                <span>LinkedIn Job URL</span>
                            </div>
                        </th>
                        <th className="min-w-[180px] w-[200px]">
                            <div className="flex items-center gap-2">
                                <EmailIcon />
                                <span>Email Waterfall</span>
                            </div>
                        </th>
                        <th className="min-w-[150px]">
                            <div className="flex items-center gap-2">
                                <LinkIcon />
                                <span>Industry</span>
                            </div>
                        </th>
                        <th className="min-w-[150px]">
                            <div className="flex items-center gap-2">
                                <LinkIcon />
                                <span>Role</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((row) => (
                        <tr key={row.id} className="group hover:bg-gray-50">
                            <td className="text-gray-400 text-sm">{row.id}</td>
                            <td>
                                <div className="flex items-center justify-between px-2 gap-2 h-6 w-auto bg-[#E7F3F8] rounded-full">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center w-6 h-6">
                                            <UserIcon />
                                        </div>
                                        <span className="text-[#374151] hover:underline cursor-pointer">
                                            {row.name}
                                        </span>
                                    </div>
                                    <div>
                                        <ChevronRight />
                                    </div>
                                </div>
                            </td>
                            <td className="text-gray-600">{row.lastUpdatedAt}</td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <GetCompanyLogo companyName={row.companyName} />
                                    <span className="text-gray-800">{row.companyName}</span>
                                </div>
                            </td>
                            <td className="min-w-[140px]">
                                <span className="flex items-center gap-2 text-[#4B5563] hover:underline cursor-pointer min-w-0">
                                    <div className="flex-shrink-0">
                                        <LinkIcon />
                                    </div>
                                    <div className="truncate">
                                        {row.companyWebsite}
                                    </div>
                                </span>
                            </td>
                            <td className="min-w-[140px]">
                                <span className="flex items-center gap-2 text-[#4B5563] hover:underline cursor-pointer min-w-0">
                                    <div className="flex-shrink-0">
                                        <LinkIcon />
                                    </div>
                                    <div className="truncate">
                                        {row.linkedinJobUrl}
                                    </div>
                                </span>
                            </td>
                            <td>{getStatusBadge(row.emailStatus)}</td>
                            <td className="text-gray-600">Technology</td>
                            <td className="text-gray-600">Growth</td>
                        </tr>
                    ))}

                    {companyRows.map((row) => (
                        <tr key={`company-${row.id}`} className="group hover:bg-gray-50">
                            <td className="text-gray-400 text-sm">{row.id}</td>
                            <td>
                                <div className="flex items-center justify-between px-2 gap-2 h-6 w-auto bg-[#EDF3EC] rounded-full">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center w-6 h-6">
                                            <GetCompanyLogo companyName={row.name} />
                                        </div>
                                        <span className="text-[#374151] hover:underline cursor-pointer">
                                            {row.name}
                                        </span>
                                    </div>
                                    <div>
                                        <ChevronRight />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                            <td>
                                <div className="h-6 w-auto skeleton rounded-full" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
