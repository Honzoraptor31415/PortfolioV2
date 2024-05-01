import { supabase } from '@/utils/supabase/server';
import HomePage from "@/components/pages/Home"

export default async function Home() {
  const { data } = await supabase.from("Projects").select();

  return (
    <>
      <HomePage />
    </>
  )
}