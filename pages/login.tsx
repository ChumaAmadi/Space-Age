import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import firebase from '../firebase';

function Login() {
  const { publicKey, connected } = useWallet();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (connected) {
      const walletAddress = publicKey.toBase58();
      const userRef = firebase.database.ref(`users/${walletAddress}`);

      userRef.once('value', (snapshot: { val: () => any; }) => {
        const user = snapshot.val();
        if (user) {
          // returning user, redirect to game
          router.push('/game');
        } else {
          // new user, add to Firebase DB and redirect to tutorial
          userRef.set({ walletAddress });
          router.push('/tutorial');
        }
      });
    }
  }, [connected, publicKey, router]);

  async function connectWallet() {
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
      <h1>Login Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Please connect your Phantom wallet to continue.</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </>
      )}
    </div>
  );
}

export default Login;
