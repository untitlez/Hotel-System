"use client";

import { format } from "date-fns";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

interface TotalBookingsPriceProps {
  data: ResponseRoomType[];
}

export const TotalBookingsPrice = ({ data }: TotalBookingsPriceProps) => {
  const now = format(new Date(), "MMMM yyyy");

  const roomsType = ["Villa", "Hotel", "Resort"];
  const roomsData = roomsType.map((type) => {
    const filtered = data.filter((item) => item.type === type);
    return {
      type,
      count: filtered.length,
      totalPrice: filtered.reduce((acc, item) => acc + item.pricePerNight, 0),
    };
  });
  const totalAllPrice = roomsData.reduce(
    (acc, item) => acc + item.totalPrice,
    0,
  );
  const sortedRoomsData = roomsData.sort((a, b) => b.count - a.count);

  const chartData = sortedRoomsData.map((item, index) => ({
    type: item.type,
    count: item.count,
    totalPrice: item.totalPrice,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {
    ...Object.fromEntries(
      sortedRoomsData.map((item, index) => [
        item.type,
        {
          label: item.type,
          color: `var(--chart-${index + 1})`,
        },
      ]),
    ),
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Bookings Price</CardTitle>
        <CardDescription>January - {now}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalAllPrice.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          $
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
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
