/**
 * Creates a Supabase client instance using environment variables for the URL and anonymous key.
 *
 * @returns {SupabaseClient} A Supabase client instance configured for browser usage.
 *
 * @remarks
 * This function relies on the following environment variables:
 * - `NEXT_PUBLIC_SUPABASE_URL`: The URL of the Supabase instance.
 * - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anonymous key for the Supabase instance.
 *
 * @example
 * ```typescript
 * import { supabase } from '@repo/shared/src/supabase';
 *
 * const { data, error } = await supabase
 *   .from('table_name')
 *   .select('*');
 * ```
 */
import { createBrowserClient } from "@supabase/ssr";

function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const supabase = createClient();
