//Page Redirect to main page with form.
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function contactPage() {
    const router = useRouter();
    useEffect(() => {
        router.push('/#contact');
    }, []);
  return (
    <div>
    </div>
  );
}