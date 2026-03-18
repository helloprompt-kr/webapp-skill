export const monthlySalesData = [
  { month: "1월", revenue: 4200, orders: 186, profit: 1680 },
  { month: "2월", revenue: 3800, orders: 165, profit: 1520 },
  { month: "3월", revenue: 5100, orders: 220, profit: 2040 },
  { month: "4월", revenue: 4700, orders: 198, profit: 1880 },
  { month: "5월", revenue: 5800, orders: 245, profit: 2320 },
  { month: "6월", revenue: 6200, orders: 267, profit: 2480 },
  { month: "7월", revenue: 5500, orders: 234, profit: 2200 },
  { month: "8월", revenue: 7100, orders: 302, profit: 2840 },
  { month: "9월", revenue: 6800, orders: 289, profit: 2720 },
  { month: "10월", revenue: 7500, orders: 318, profit: 3000 },
  { month: "11월", revenue: 8200, orders: 345, profit: 3280 },
  { month: "12월", revenue: 9100, orders: 392, profit: 3640 },
];

export const categorySalesData = [
  { name: "전자제품", value: 35, amount: 28400, fill: "hsl(var(--chart-1))" },
  { name: "의류", value: 25, amount: 20300, fill: "hsl(var(--chart-2))" },
  { name: "식품", value: 20, amount: 16240, fill: "hsl(var(--chart-3))" },
  { name: "가구", value: 12, amount: 9744, fill: "hsl(var(--chart-4))" },
  { name: "기타", value: 8, amount: 6496, fill: "hsl(var(--chart-5))" },
];

export interface Transaction {
  id: string;
  customer: string;
  product: string;
  category: string;
  amount: number;
  status: "완료" | "처리중" | "취소";
  date: string;
}

export const recentTransactions: Transaction[] = [
  { id: "TXN-001", customer: "김서연", product: "맥북 프로 14인치", category: "전자제품", amount: 2890000, status: "완료", date: "2026-03-18" },
  { id: "TXN-002", customer: "이준호", product: "캠핑 테이블 세트", category: "가구", amount: 189000, status: "완료", date: "2026-03-18" },
  { id: "TXN-003", customer: "박지민", product: "프리미엄 운동화", category: "의류", amount: 259000, status: "처리중", date: "2026-03-17" },
  { id: "TXN-004", customer: "최유진", product: "유기농 선물세트", category: "식품", amount: 85000, status: "완료", date: "2026-03-17" },
  { id: "TXN-005", customer: "정민수", product: "에어팟 프로 2", category: "전자제품", amount: 359000, status: "완료", date: "2026-03-16" },
  { id: "TXN-006", customer: "한소희", product: "캐시미어 코트", category: "의류", amount: 890000, status: "취소", date: "2026-03-16" },
  { id: "TXN-007", customer: "오현우", product: "스탠딩 데스크", category: "가구", amount: 450000, status: "처리중", date: "2026-03-15" },
  { id: "TXN-008", customer: "강예은", product: "갤럭시 S26 울트라", category: "전자제품", amount: 1650000, status: "완료", date: "2026-03-15" },
];

export const summaryStats = {
  totalRevenue: 74000,
  revenueChange: 12.5,
  totalOrders: 3161,
  ordersChange: 8.2,
  averageOrder: 23.4,
  averageOrderChange: 3.9,
  conversionRate: 4.2,
  conversionRateChange: -0.3,
};
