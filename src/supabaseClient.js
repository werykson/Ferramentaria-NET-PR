import { createClient } from "@supabase/supabase-js";

// Projeto novo (São Paulo). Chave: Dashboard → Settings → API Keys → Publishable (nunca a Secret no front-end).
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ??
  "https://eawssurvkkxtjwxagjal.supabase.co";
const supabaseKey = String(import.meta.env.VITE_SUPABASE_ANON_KEY ?? "").trim();

// main.jsx só importa o App quando VITE_SUPABASE_ANON_KEY existe; este fallback evita crash se o módulo for importado sem env.
const keyParaCliente =
  supabaseKey ||
  "sb_publishable_missing_env_defina_VITE_SUPABASE_ANON_KEY_na_Vercel";

export const supabase = createClient(supabaseUrl, keyParaCliente);
