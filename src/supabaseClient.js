import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lpqaslycqwqyyqbqbhgm.supabase.co'
const supabaseKey = 'sb_publishable_z2uud5nDLSjidiqfBkm8Yg_bGhE7d8M'

export const supabase = createClient(supabaseUrl, supabaseKey)
