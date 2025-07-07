import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Blocks } from "lucide-react";
import Image from "next/image";

interface PropertyItem {
  id: number;
  name: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

interface CardPropertyListProps {
  propertyItem: PropertyItem[];
}

export const CardProperty = ({ propertyItem }: CardPropertyListProps) => {
  return (
    <>
      {propertyItem.map((item) => (
        <div key={item.id} className="grid gap-6 w-full">
          <div className="relative aspect-3/2">
            <Image
              src={item.image}
              alt={item.name}
              className="object-cover rounded-xl"
              sizes="33vw"
              fill
            />
          </div>
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <span className="font-bold text-lg text-primary">
                $ {item.price.toLocaleString()}
              </span>
            </div>
            <p className="text-muted-foreground">{item.location}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 items-end">
            <Button size="sm" variant="outline">
              <BedDouble /> {item.bedrooms}
            </Button>
            <Button size="sm" variant="outline">
              <Bath /> {item.bathrooms}
            </Button>
            <Button size="sm" variant="outline">
              <Blocks /> {item.area}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
