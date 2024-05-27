import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

async function New() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <div>New project</div>;
}

export default New;
