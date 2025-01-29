'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export default async function handleApolloRequest(
  query: string,
  variables: object,
  revalidateCache?: { path?: string; type?: 'page' | 'layout'; tag?: string }
) {
  try {
    // Define your local GraphQL endpoint
    const endpoint = 'http://localhost:3000/api/graphql';

    // Send the HTTP request
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Check for errors in the response
    if (!response.ok) {
      throw new Error(`GraphQL request failed with status ${response.status}`);
    }

    const result = await response.json();

    // Handle revalidation if specified
    if (revalidateCache?.path) {
      revalidatePath(revalidateCache.path, revalidateCache.type);
    }
    if (revalidateCache?.tag) {
      revalidateTag(revalidateCache.tag);
    }

    return result;
  } catch (error) {
    console.error('Error in handleApolloRequest:', error);
    throw error;
  }
}
