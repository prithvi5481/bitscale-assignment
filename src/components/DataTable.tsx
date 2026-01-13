'use client'
import React, { useState, useMemo } from "react";
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
import { useSearch } from "@/context/SearchContext";
import { useToast } from "./Toast";

const DataTable: React.FC = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [expandedRows, setExpandedRows] = useState<number[]>([]);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const { searchQuery } = useSearch();
    const { showToast } = useToast();

    // Filter data based on search query
    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) return mockData;
        const query = searchQuery.toLowerCase();
        return mockData.filter(row =>
            row.name.toLowerCase().includes(query) ||
            row.companyName.toLowerCase().includes(query) ||
            row.companyWebsite.toLowerCase().includes(query) ||
            row.linkedinJobUrl.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const handleDelete = (id: number, name: string) => {
        showToast(`Deleted "${name}" from leads`, 'error');
    };

    const handleEdit = (id: number, name: string) => {
        showToast(`Editing "${name}"...`, 'info');
    };


    const toggleRowSelection = (id: number) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedRows.length === mockData.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(mockData.map(row => row.id));
        }
    };

    const toggleRowExpansion = (id: number) => {
        setExpandedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };

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
                                <input
                                    type="checkbox"
                                    checked={selectedRows.length === mockData.length && mockData.length > 0}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4 rounded border-gray-300 accent-purple-600 cursor-pointer"
                                />
                                <PauseIcon />
                            </div>
                        </th>
                        <th className="w-10 text-xs font-medium text-gray-500">
                            #
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
                    {filteredData.map((row) => (
                        <React.Fragment key={row.id}>
                            <tr
                                className={`group hover:bg-gray-50 border-b border-gray-100 ${selectedRows.includes(row.id) ? 'bg-purple-50 hover:bg-purple-50' : ''}`}
                                onMouseEnter={() => setHoveredRow(row.id)}
                                onMouseLeave={() => setHoveredRow(null)}
                            >
                                <td className="pl-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={() => toggleRowSelection(row.id)}
                                            className="w-4 h-4 rounded border-gray-300 accent-purple-600 cursor-pointer"
                                        />
                                        {/* Quick Actions on Hover */}
                                        <div className={`flex items-center gap-1 transition-opacity duration-150 ${hoveredRow === row.id ? 'opacity-100' : 'opacity-0'}`}>
                                            <button
                                                onClick={() => handleEdit(row.id, row.name)}
                                                className="p-1 hover:bg-blue-100 rounded text-gray-400 hover:text-blue-600 transition-colors"
                                                title="Edit"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(row.id, row.name)}
                                                className="p-1 hover:bg-red-100 rounded text-gray-400 hover:text-red-600 transition-colors"
                                                title="Delete"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
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
                                        <div onClick={() => toggleRowExpansion(row.id)} className={`cursor-pointer transition-transform duration-200 ${expandedRows.includes(row.id) ? 'rotate-90' : ''}`}>
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
                            {expandedRows.includes(row.id) && (
                                <tr className="bg-gray-50/50">
                                    <td colSpan={10} className="p-4">
                                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 ml-12">
                                            <div className="flex items-center gap-6 border-b border-gray-100 pb-3 mb-3">
                                                <div className="pb-1 border-b-2 border-purple-600 font-medium text-gray-900">Overview</div>
                                                <div className="pb-1 text-gray-500 hover:text-gray-800 cursor-pointer">Activity</div>
                                                <div className="pb-1 text-gray-500 hover:text-gray-800 cursor-pointer">Notes</div>
                                                <div className="pb-1 text-gray-500 hover:text-gray-800 cursor-pointer">Emails</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Current Role</p>
                                                    <p className="font-medium">Senior Software Engineer</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
                                                    <p className="font-medium">San Francisco, CA</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Experience</p>
                                                    <p className="font-medium">5+ Years</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}

                    {companyRows.map((row) => (
                        <tr key={`company-${row.id}`} className="group hover:bg-gray-50 border-b border-gray-100">
                            <td className="pl-4">
                                <div className="w-4 h-4 rounded border border-gray-200 bg-gray-50" />
                            </td>
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
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Floating Action Bar */}
            {selectedRows.length > 0 && (
                <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-6 animate-in slide-in-from-bottom-4 duration-200 z-50">
                    <div className="flex items-center gap-3 pr-4 border-r border-gray-200">
                        <div className="bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                            {selectedRows.length}
                        </div>
                        <span className="font-medium text-sm text-gray-900">Selected</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => {
                                showToast(`Deleted ${selectedRows.length} lead(s)`, 'error');
                                setSelectedRows([]);
                            }}
                            className="p-2 hover:bg-gray-50 rounded-full text-gray-500 hover:text-red-600 transition-colors tooltip"
                            title="Delete"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                        <button
                            onClick={() => {
                                showToast(`Archived ${selectedRows.length} lead(s)`, 'success');
                                setSelectedRows([]);
                            }}
                            className="p-2 hover:bg-gray-50 rounded-full text-gray-500 hover:text-gray-900 transition-colors tooltip"
                            title="Archive"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                        </button>
                        <button
                            onClick={() => {
                                showToast(`Exported ${selectedRows.length} lead(s) to CSV`, 'success');
                            }}
                            className="p-2 hover:bg-gray-50 rounded-full text-gray-500 hover:text-gray-900 transition-colors tooltip"
                            title="Export"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </button>
                    </div>

                    <div className="pl-4 border-l border-gray-200">
                        <button
                            onClick={() => {
                                showToast(`Enriching ${selectedRows.length} lead(s)... This may take a moment.`, 'info');
                            }}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                        >
                            Enrich Selection
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
