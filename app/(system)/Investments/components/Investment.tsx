import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function InvestmentPage() {
    return (
        <SidebarProvider>
            <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
                Investment
            </div>
            </SidebarInset>
        </SidebarProvider>
    );
}