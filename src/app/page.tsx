import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
  
  // The below code won't be reached due to the redirect
  // but is kept for TypeScript to be happy with the return type
  return null;
}