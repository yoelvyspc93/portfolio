import SvgArrow from '@/public/icons/arrow.svg';

export default function HomePage() {
  return (
    <div>
      <h1>
        Yoelvys
        {/* <Image src={img} alt="avatar" width={200} height={200} unoptimized /> */}
        <SvgArrow width={200} height={200} />
      </h1>
    </div>
  );
}
