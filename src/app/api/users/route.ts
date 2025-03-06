import { NextResponse } from 'next/server';
import UserAccount from '@/models/userAccount';
import { initDB } from '@/utils/initDB';
import bcrypt from "bcrypt"

export async function GET() {
  await initDB();
  const users = await UserAccount.findAll();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  await initDB();
  const saltRounds = 10;
  const { name, email, password: userPwd, applicationId } = await req.json();
  const password = await bcrypt.hash(userPwd, saltRounds)
  console.log(password);
  
  const newUser = await UserAccount.create({ name, email, password, applicationId });
  return NextResponse.json(newUser, { status: 201 });
}
