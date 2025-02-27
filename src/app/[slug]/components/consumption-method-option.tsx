import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod; 
}

const ConsumptionMethodOption = ({imageAlt, imageUrl, buttonText, option}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <Link href={`/menu?ConsumptionMethod=${option}`}>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={64}height={64}
          className="object-contain"
          />
        <Button variant="secondary" className="rounded-full">
          {buttonText}
        </Button>
      </CardContent>
      </Link>
    </Card>
  );
}
export default ConsumptionMethodOption;