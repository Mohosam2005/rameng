import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://omxetmxlrxsmizgxhyyb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9teGV0bXhscnhzbWl6Z3hoeXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNzA2MTYsImV4cCI6MjA1NTc0NjYxNn0.DDkGivdnZV02yzxbyO9Z0Xn2aSlcRXSIgjTnV7nIoro'; // تأكد من أن هذا المفتاح صحيح وكامل
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };