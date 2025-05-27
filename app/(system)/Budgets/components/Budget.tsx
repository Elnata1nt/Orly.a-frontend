import BudgetsComponents from "@/components/system/budgets/components/budgets-components";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function BudgetPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <BudgetsComponents />
      </SidebarInset>
    </SidebarProvider>
  );
}
