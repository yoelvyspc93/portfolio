import { CustomImage } from '@/components/common/CustomImage';

import Arrow from '@/components/common/Icons/Arrow';

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
        <Arrow width={32} height={32} />
      </h1>
    </div>
  );
}
