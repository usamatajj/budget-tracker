import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function GET() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  let userSettings = await prisma.usersSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    userSettings = await prisma.usersSettings.create({
      data: {
        userId: user.id,
        currency: 'USD',
      },
    });
  }
  // Revalidate the home page that users the user currency
  revalidatePath('/');

  return Response.json(userSettings);
}
