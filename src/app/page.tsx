"use client";

import Header from "@/components/Header";
import WarningBanner from "@/components/WarningBanner";
import Toolbar from "@/components/Toolbar";
import DataTable from "@/components/DataTable";
import BottomTabBar from "@/components/BottomTabBar";
import { ToastProvider } from "@/components/Toast";
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <ToastProvider>
      <SearchProvider>
        <div className="flex flex-col h-screen bg-gray-50">
          <Header />
          <WarningBanner />
          <Toolbar />
          <DataTable />
          <BottomTabBar />
        </div>
      </SearchProvider>
    </ToastProvider>
  );
}
