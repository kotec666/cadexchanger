export const getNonce = () => {
  if (typeof window !== 'undefined') {
    const meta = document.querySelector('meta[name="x-nonce"]');
    return meta?.getAttribute('content') || '';
  }
  return process.env.NEXT_PUBLIC_NONCE || '';
}; 