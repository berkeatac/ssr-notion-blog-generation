// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://otqplctpkflfdvvoppcm.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY || "";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID || ""
);

export default base;
