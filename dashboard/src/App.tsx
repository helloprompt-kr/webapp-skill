import { DollarSign, ShoppingCart, BarChart3, Target } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { StatCard } from "@/components/stat-card";
import { RevenueChart } from "@/components/revenue-chart";
import { CategoryPieChart } from "@/components/category-pie-chart";
import { TransactionTable } from "@/components/transaction-table";
import { summaryStats } from "@/data/mock-data";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-foreground" />
            <h1 className="text-xl font-semibold tracking-tight">
              매출 대시보드
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-screen-xl mx-auto px-6 py-8 space-y-8">
        {/* Summary Stats */}
        <section>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="총 매출"
              value={`${summaryStats.totalRevenue.toLocaleString()}만원`}
              change={summaryStats.revenueChange}
              icon={<DollarSign className="h-4 w-4" />}
            />
            <StatCard
              title="총 주문수"
              value={`${summaryStats.totalOrders.toLocaleString()}건`}
              change={summaryStats.ordersChange}
              icon={<ShoppingCart className="h-4 w-4" />}
            />
            <StatCard
              title="평균 주문액"
              value={`${summaryStats.averageOrder}만원`}
              change={summaryStats.averageOrderChange}
              icon={<BarChart3 className="h-4 w-4" />}
            />
            <StatCard
              title="전환율"
              value={`${summaryStats.conversionRate}%`}
              change={summaryStats.conversionRateChange}
              icon={<Target className="h-4 w-4" />}
            />
          </div>
        </section>

        <Separator />

        {/* Charts */}
        <section>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
            <RevenueChart />
            <CategoryPieChart />
          </div>
        </section>

        <Separator />

        {/* Transaction Table */}
        <section>
          <TransactionTable />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-8">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            Web Artifacts Builder로 생성된 대시보드 · 데이터는 데모용입니다
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
