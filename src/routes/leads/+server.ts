import { getDb } from '$lib/server/db/index.js';
import { leads } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';
import { dev } from '$app/env';

async function hashString(message: string) {
  // 1. Encode the string into bytes (Uint8Array)
  const msgBuffer = new TextEncoder().encode(message);

  // 2. Hash the message using SHA-256
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // 3. Convert the ArrayBuffer back to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

export async function GET({ platform, cookies, url }) {

  const paramKey = url.searchParams.get('key');
  const validKey = await hashString(new Date().toLocaleDateString() + 'supersecretpassword');

  // escape if invalid key
  if (paramKey !== validKey) {
    console.log(validKey);
    return json({ message: 'unauthenticated' })
  }

  // escape in production
  if (!dev) return json({ message: 'invalid environment' });


  // Get database
  if (!platform?.env.DB) throw new Error('Database unavailable in Env');
  const db = getDb(platform.env.DB);
  
  // return leads table
  return json(await db.select().from(leads));
}
