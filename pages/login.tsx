import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';

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
