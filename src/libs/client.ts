import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gigszjcevfvmzskefafi.supabase.co";
const SUPBASE_ANON_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ3N6amNldmZ2bXpza2VmYWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc3NTE5MjMsImV4cCI6MTk2MzMyNzkyM30.xJywX5yp5QeTbyhMhhg-zf87Rkv7M-CKMVVQy2LODuQ";

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };
