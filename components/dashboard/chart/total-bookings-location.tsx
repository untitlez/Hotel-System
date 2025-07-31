"use client";

import { format } from "date-fns";
import { Star } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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

interface TotalBookingsLocationProps {
  data: ResponseRoomType[];
}

export const TotalBookingsLocation = ({ data }: TotalBookingsLocationProps) => {
  const now = format(new Date(), "MMMM yyyy");
  const locations = [
    "Sydney, NSW",
    "Melbourne, VIC",
    "Brisbane, QLD",
    "Perth, WA",
    "Adelaide, SA",
    "Gold Coast, QLD",
    "Canberra, ACT",
    "Hobart, TAS",
  ];
  const locationsData = locations.map((location) => ({
    location,
    count: data.filter((item) => item.location === location).length,
  }));
  const sortLocationData = locationsData.sort((a, b) => b.count - a.count);
  const chartData = sortLocationData.map((item, index) => ({
    location: item.location,
    count: item.count,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  const chartConfig = {
    count: {
      label: "Bookings",
    },
    ...Object.fromEntries(
      sortLocationData.map((item, index) => [
        item.location,
        {
          label: item.location,
          color: `var(--chart-${index + 1})`,
        },
      ])
    ),
  } satisfies ChartConfig;

  return (
    <Card className="md:col-span-2 xl:col-span-1">
      <CardHeader>
        <CardTitle>Total Bookings Popular Locations</CardTitle>
        <CardDescription>January - {now}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-center">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="location"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="count"
              layout="vertical"
              fill="var(--color-count)"
              radius={4}
            >
              <LabelList
                dataKey="location"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {sortLocationData[0].location} is the most booked location
          <Star className="size-4 text-yellow-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on bookings in {new Date().getFullYear()}
        </div>
      </CardFooter>
    </Card>
  );
};
