import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vayrwyiwbhahjvymwoxq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZheXJ3eWl3YmhhaGp2eW13b3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NzkyMjEsImV4cCI6MjA0MjM1NTIyMX0.cCr3__QCek_juRcu5j363NbiSIMp5CNoVGPr9cZAcjw';
export const supabase = createClient(supabaseUrl, supabaseKey);