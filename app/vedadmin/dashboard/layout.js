'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProtectedRoute from '../ProtectedRoute';

export default function Dashboard({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Bugs', path: '/vedadmin/dashboard/bugs' },
    { name: 'Request New Book', path: '/vedadmin/dashboard/request-book' },
    { name: 'Contact Us', path: '/vedadmin/dashboard/contact-us' },
  ];

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-300">
        <div className="w-64 mt-5 h-full bg-white shadow-md fixed">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <nav className="mt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center py-2 px-4 ${
                  pathname === item.path
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-1 ml-64 p-8">{children}</div>
      </div>
    </ProtectedRoute>
  );
}
