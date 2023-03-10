import Image from 'next/image';
import { Post } from '@prisma/client';

export default function PostListElement({
  post: { comment, pictureUrl, id },
  rotateLeft = true,
}: {
  post: Post;
  rotateLeft?: boolean;
}) {
  return (
    <div
      key={id}
      className={`bg-white p-[10px] pb-[50px] mb-12 mr-0 md:mr-12`}
      style={{ transform: `rotate(${rotateLeft ? -1 : 1}deg)` }}
    >
      <div className="relative h-[calc(100vw+60px)] w-[calc(100vw-60px)] max-w-[300px] max-h-[400px]">
        <Image
          src={pictureUrl}
          alt={comment ?? ''}
          fill
          sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
        />
      </div>
    </div>
  );
}
