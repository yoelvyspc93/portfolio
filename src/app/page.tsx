//import arrow from '@/public/icons/arrow.svg';
import Image from 'next/image';

const isProduction = process.env.NODE_ENV === 'production';

export default function HomePage() {
  return (
    <div>
      <h1>
        Yoelvys
        <Image
          src={`${isProduction ? '/portfolio' : ''}/icons/arrow.svg`}
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </h1>
    </div>
  );
}
