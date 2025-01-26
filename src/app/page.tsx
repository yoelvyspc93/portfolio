import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <h1>
        Yoelvys
        <Image
          src="/images/header/avatar.webp"
          alt="avatar"
          width={200}
          height={200}
        />
      </h1>
    </div>
  );
}
