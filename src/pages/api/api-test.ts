export async function GET({locals, params, request}) {
  const { MY_TEST_KV } = locals.runtime.env;
  const value = await MY_TEST_KV.get("test");
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
      value
    })
  )
}
