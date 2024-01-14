import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bycbloluzgweztroyymv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Y2Jsb2x1emd3ZXp0cm95eW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNzMzMzAsImV4cCI6MjAyMDY0OTMzMH0.Hlw0Eu8xn-m5fbRQsSinr1CbQ1oOvkJaQ51Prvz27Cw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
