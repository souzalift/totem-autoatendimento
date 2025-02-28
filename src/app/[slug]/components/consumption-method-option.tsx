import { ConsumptionMethod } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageAlt,
  imageUrl,
  buttonText,
  option,
}: ConsumptionMethodOptionProps) => {
  return (
    <Link href={`/${slug}/menu?consumptionMethod=${option}`} className="block">
      <Card>
        <CardContent className="flex flex-col items-center py-8">
          <div className="relative h-20 w-20">
            <Image
              src={imageUrl}
              fill
              alt={imageAlt}
              className="object-contain"
            />
          </div>
          <Button variant="secondary" className="rounded-full">
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ConsumptionMethodOption;
