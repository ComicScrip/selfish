import prisma from '@/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') res.status(200).json(await prisma.post.findMany());
  else {
    const newPost = await prisma.post.create({ data: req.body });
    res.status(201).json(newPost);
  }
}
