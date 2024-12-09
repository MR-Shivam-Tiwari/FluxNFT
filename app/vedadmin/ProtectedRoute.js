// app/vedadmin/ProtectedRoute.js
'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      redirect('/');
    }
  }, []);

  return <>{children}</>;
}
