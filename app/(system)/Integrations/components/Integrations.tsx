import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function IntegrationsPage() {
    return (
        <SidebarProvider>
            <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
                Integrations
            </div>
            </SidebarInset>
        </SidebarProvider>
    );
}