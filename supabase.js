import { createClient } from '@supabase/supabase-js';

// تكوين Supabase

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://omxetmxlrxsmizgxhyyb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// تصدير supabase للاستخدام في المكونات الأخرى
export { supabase };