import DashboardComponent from "@/components/system/dashboard/components/dashboard-components";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <DashboardComponent />
      </SidebarInset>
    </SidebarProvider>
  );
}
