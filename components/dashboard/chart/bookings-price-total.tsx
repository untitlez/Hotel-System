"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
import { format } from "date-fns";

interface BookingsPriceTotalProps {
  data: ResponseRoomType[];
}

export const BookingsPriceTotal = ({ data }: BookingsPriceTotalProps) => {
  const now = format(new Date(), "MMMM yyyy");
  const roomsType = ["Villa", "Hotel", "Resort"];
  const roomTypeData = roomsType.map((type) => {
    const filtered = data.filter((item) => item.type === type);
    return {
      type,
      count: filtered.length,
      totalPrice: filtered.reduce((acc, item) => acc + item.pricePerNight, 0),
    };
  });
  const sortedRoomData = roomTypeData.sort((a, b) => b.count - a.count);

  const chartData = sortedRoomData.map((item, index) => ({
    type: item.type,
    count: item.count,
    totalPrice: item.totalPrice,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {
    totalPrice: {
      label: "Total Price",
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
        <CardTitle>Bookings Price Total</CardTitle>
        <CardDescription>January - {now}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="type"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="totalPrice" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {sortedRoomData[0].type} had the highest total revenue
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total booking revenue by room type in{" "}
          {new Date().getFullYear()}
        </div>
      </CardFooter>
    </Card>
  );
};
