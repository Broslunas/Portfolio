// src/pages/api/status.ts

export const get = async () => {
    return new Response(
      JSON.stringify({ message: 'API está funcionando' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  };
  