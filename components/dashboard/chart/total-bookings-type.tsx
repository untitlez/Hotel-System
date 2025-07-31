"use client";

import { format } from "date-fns";
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

interface TotalBookingsTypeProps {
  data: ResponseRoomType[];
}

export const TotalBookingsType = ({ data }: TotalBookingsTypeProps) => {
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
      label: "Bookings",
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
  console.log("chartConfig", chartConfig);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Bookings Type</CardTitle>
        <CardDescription>January - {now}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-center">
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
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-type)" radius={8}>
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
