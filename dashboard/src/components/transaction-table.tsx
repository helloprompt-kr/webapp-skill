import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentTransactions } from "@/data/mock-data";

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "완료"
      ? "default"
      : status === "처리중"
      ? "secondary"
      : "destructive";

  return <Badge variant={variant}>{status}</Badge>;
}

export function TransactionTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 거래내역</CardTitle>
        <CardDescription>최근 7일간의 주요 거래 목록</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">주문번호</TableHead>
              <TableHead>고객</TableHead>
              <TableHead>상품</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead className="text-right">금액</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>날짜</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                <TableCell className="font-medium">{tx.customer}</TableCell>
                <TableCell>{tx.product}</TableCell>
                <TableCell>
                  <Badge variant="outline">{tx.category}</Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  ₩{tx.amount.toLocaleString()}
                </TableCell>
                <TableCell>
                  <StatusBadge status={tx.status} />
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {tx.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
