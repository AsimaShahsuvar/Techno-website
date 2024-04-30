// import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://powbzhalrtftuzicqlej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvd2J6aGFscnRmdHV6aWNxbGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjMzNjgsImV4cCI6MjAxNjAzOTM2OH0.72Bc3NtsSdpnh38WcCeA4eiEbnqdkWh_1PBoZfJEZs4";

export const supabase = createClient(supabaseUrl, supabaseKey);

