import { useRouter } from 'next/router';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

function Login() {
  const { connected } = useWallet();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (connected) {
      router.push('/game');
    }
  }, [connected, router]);

  const handleConnectWallet = async () => {
    setLoading(true);
    try {
      await window.solana.connect();
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Login to Space Age</h1>
      <button disabled={loading} onClick={handleConnectWallet}>
        {loading ? 'Connecting...' : 'Connect Wallet'}
      </button>
    </div>
  );
}







export default Login;