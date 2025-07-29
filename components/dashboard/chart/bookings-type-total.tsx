"use client";

import { format } from "date-fns";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ResponseRoomType } from "@/validators/room.validator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

interface BookingsTypeTotalProps {
  data: ResponseRoomType[];
}

export const BookingsTypeTotal = ({ data }: BookingsTypeTotalProps) => {
  const now = format(new Date(), "MMMM yyyy");
  const roomsType = ["Villa", "Hotel", "Resort"];
  const roomTypeData = roomsType.map((type) => ({
    type,
    count: data.filter((item) => item.type === type).length,
  }));
  const sortedRoomData = roomTypeData.sort((a, b) => b.count - a.count);

  const chartData = sortedRoomData.map((item, index) => ({
    type: item.type,
    count: item.count,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {
    count: {
      label: "Users",
    },
    ...Object.fromEntries(
      sortedRoomData.map((item, index) => [
        item.type,
        {
          label: item.type,
          color: `var(--chart-${index + 1})`,
        },
      ])
    ),
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings Room Type Total</CardTitle>
        <CardDescription>January - {now}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 6,
            }}
            className="text-sm"
          >
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Total bookings in 2025
          <TrendingUp className="size-4 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Across all room types, January - {now}
        </div>
      </CardFooter>
    </Card>
  );
};
