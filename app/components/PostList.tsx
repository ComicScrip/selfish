'use client';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Post } from '@prisma/client';
import PostListElement from './Post';
import PictureUploader from './PictureUploader';
import autoAnimate from '@formkit/auto-animate';
import { useQuery } from 'react-query';

export default function PostList() {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const { data: posts = [] } = useQuery<Post[]>('posts', () =>
    axios.get('/api/posts').then((res) => res.data),
  );

  return (
    <div className="w-full flex flex-wrap justify-center" ref={parent}>
      {posts.map((p, i) => (
        <PostListElement post={p} key={p.id} rotateLeft={i % 2 === 0} />
      ))}
    </div>
  );
}
