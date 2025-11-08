import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    cache: true,
    rateLimit: true,
});

/**
 * Verifica el token contra el JWKS de Auth0.
 * Lanza excepción si el token no es válido.
 */
export async function verifyAuth0Token(token: string, audience: string): Promise<any> {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded || typeof decoded === 'string' || !decoded.header?.kid) {
        throw new Error('Invalid token structure');
    }

    // obtén la key (puede lanzar)
    const key = await client.getSigningKey(decoded.header.kid);
    const signingKey = key?.getPublicKey();
    if (!signingKey) {
        throw new Error('Signing key not found');
    }

    // jwt.verify puede devolver el payload o lanzar
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            signingKey as jwt.Secret, // forzamos typing seguro después de la comprobación
            {
                audience,
                issuer: `https://${process.env.AUTH0_DOMAIN}/`,
                algorithms: ['RS256'],
            },
            (err, payload) => {
                if (err) return reject(err);
                resolve(payload);
            }
        );
    });
}
