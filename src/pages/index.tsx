import HeadConfig from '@components/MainContainer'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { StorageKeysEnum } from '../dto/storage-keys.enum';
import Register from './register';

const inter = Inter({ subsets: ['latin'] })

export default function App() {

  const [signed, setSigned] = useState(false);

  async function checkSigned() {
    setSigned(Boolean(localStorage.getItem(StorageKeysEnum.SIGNED)));
  }

  useEffect(() => {
    checkSigned();
  }, []);

  return (
    <>
      {
        signed ? null : <Register />
      }
    </>
  )
}
