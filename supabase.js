import { createClient } from '@supabase/supabase-js';

// تكوين Supabase
const supabaseUrl = 'https://omxetmxlrxsmizgxhyyb.supabase.co'; // استبدل بـ URL الخاص بك
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9teGV0bXhscnhzbWl6Z3hoeXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNzA2MTYsImV4cCI6MjA1NTc0NjYxNn0.DDkGivdnZV02yzxbyO9Z0Xn2aSlcRXSIgjTnV7nIoro'; // استبدل بـ anon key الخاص بك
const supabase = createClient(supabaseUrl, supabaseKey);

// تصدير supabase للاستخدام في المكونات الأخرى
export { supabase };