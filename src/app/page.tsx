import { supabase } from '@/utils/supabase/server';
import HomePage from "@/lib/components/pages/Home"

export default async function Home() {
  const { data } = await supabase.from("Projects").select();

  return (
    <>
      <h1>Home page</h1>
      <HomePage data={data} />
    </>
  )
}