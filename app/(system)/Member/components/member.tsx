import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MemberPage() {
    return (
        <SidebarProvider>
            <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
                Member
            </div>
            </SidebarInset>
        </SidebarProvider>
    );
}