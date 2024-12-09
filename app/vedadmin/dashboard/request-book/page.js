'use client';

import { useState, useEffect } from 'react';

export default function BookRequestsPage() {
    const [bookRequests, setBookRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        fetchBookRequests();
    }, []);

    const fetchBookRequests = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/book-requests`);
            const data = await response.json();
            setBookRequests(data);
        } catch (error) {
            console.error('Error fetching book requests:', error);
        }
    };

    const deleteBookRequest = async (id) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/book-requests/${id}`, {
                method: 'DELETE',
            });
            setBookRequests(bookRequests.filter((request) => request._id !== id));
            setSelectedRequest(null);
        } catch (error) {
            console.error('Error deleting book request:', error);
        }
    };

    return (
        <div className="bg-white min-h-screen p-6">
            <div>

                <h2 className="text-3xl font-bold mb-6 text-orange-500">Book Requests</h2>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {bookRequests.map((request) => (
                    <div key={request._id} className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
                        <h3 className="text-xl font-semibold mb-2 text-orange-500">{request.bookName}</h3>
                        <p className="text-gray-600 mb-2">Author: {request.authorName}</p>
                        <p className="text-gray-600 mb-4">Requested on: {new Date(request.createdAt).toLocaleDateString()}</p>
                        <div className='flex justify-between'>

                            <button
                                onClick={() => setSelectedRequest(request)}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                            >
                                View Details
                            </button>
                            <div className='flex gap-2 '>

                                <button
                                    onClick={() => deleteBookRequest(request._id)}
                                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 rounded hover:bg-gray-600 transition duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedRequest && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-orange-500">{selectedRequest.bookName}</h3>
                            <button onClick={() => setSelectedRequest(null)} className="text-gray-500 hover:text-gray-700">
                                {/* Close Icon SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-2 mb-4">
                            <p><span className="font-semibold">Author:</span> {selectedRequest.authorName}</p>
                            <p><span className="font-semibold">Email:</span> {selectedRequest.email}</p>
                            <p><span className="font-semibold">Phone:</span> {selectedRequest.phone}</p>
                            <p><span className="font-semibold">Has Data:</span> {selectedRequest.hasData ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Wants to Help:</span> {selectedRequest.wantsToHelp ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Additional Info:</span> {selectedRequest.additionalInfo}</p>
                            <p><span className="font-semibold">Requested on:</span> {new Date(selectedRequest.createdAt).toLocaleString()}</p>
                        </div>
                        <button
                            onClick={() => deleteBookRequest(selectedRequest._id)}
                            className="bg-red-500 w-full   text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 flex justify-center items-center"
                        >
                            {/* Trash Icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-4h4m-4 0a2 2 0 014 0m-4 0H7a2 2 0 00-2 2v0m14 0a2 2 0 00-2-2h-3m-4 4v10m4-10v10" />
                            </svg>
                            Delete Request
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
