"use client";

import { format } from "date-fns";
import { Star } from "lucide-react";
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

interface BookingsLocationTotalProps {
  data: ResponseRoomType[];
}

export const BookingsLocationTotal = ({ data }: BookingsLocationTotalProps) => {
  const totalLocations = data.length;
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
  const topLocation = sortLocationData[0];
  const chartData = sortLocationData.map((item, index) => ({
    location: item.location,
    count: item.count,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {
    count: {
      label: "Users",
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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bookings Location Total</CardTitle>
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
              nameKey="location"
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalLocations.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Places
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
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {topLocation.location} is the most booked location
          <Star className="size-4 text-yellow-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on bookings in {new Date().getFullYear()}
        </div>
      </CardFooter>
    </Card>
  );
};
