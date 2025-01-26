import { CustomImage } from '@/components/common/CustomImage';

export default function HomePage() {
  return (
    <div>
      <h1>
        Yoelvys
        <CustomImage
          src="/images/header/avatar.webp"
          alt="avatar"
          width={200}
          height={200}
        />
      </h1>
    </div>
  );
}
