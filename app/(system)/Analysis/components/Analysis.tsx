import AnalisisComponents from "@/components/system/analysis/components/analysis";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AnalysisPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <AnalisisComponents />
      </SidebarInset>
    </SidebarProvider>
  );
}
