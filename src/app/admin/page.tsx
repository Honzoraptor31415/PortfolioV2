import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

async function AdminPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div>
      Admin page
    </div>
  )
}

export default AdminPage