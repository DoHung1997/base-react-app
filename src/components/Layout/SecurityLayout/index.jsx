import { useEffect } from 'react';
import cookies from 'js-cookie';

export default function SecurityLayout({ children }) {
    const tokenCookie = cookies.get('access_token');

    useEffect(() => {
        if (tokenCookie === undefined) {
            window.location.href = '/login';
        }
    }, [tokenCookie]);

    return tokenCookie !== undefined ? children : <div />;
}
