import * as crypto from 'crypto';

interface RSAKeyPair {
  publicKey: string;
  privateKey: string;
}

export function generateRSAKeyPair(): RSAKeyPair {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    }
  });

  return { publicKey: publicKey.toString(), privateKey: privateKey.toString() };
}

export function encryptPassword(password: string, publicKey: string): string {
  const encryptedPassword = crypto.publicEncrypt(publicKey, Buffer.from(password, 'utf-8'));
  return encryptedPassword.toString('base64');
}

