'use client'

import React, { useState, useEffect } from 'react'
import { Worker, Viewer, SpecialZoomLevel, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'
import { searchPlugin } from '@react-pdf-viewer/search'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/search/lib/styles/index.css'

export default function PDFViewer() {
    const [currentPage, setCurrentPage] = useState(0)

    // Plugins
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => defaultTabs,
        toolbarPlugin: (defaultToolbar) =>
            defaultToolbar.map((tool) =>
                ['download', 'open'].includes(tool.key) ? null : tool
            ).filter(Boolean)
    })
    const toolbarPluginInstance = toolbarPlugin()
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const searchPluginInstance = searchPlugin()

    const { jumpToPage } = pageNavigationPluginInstance
    const { Search } = searchPluginInstance

    // Handle page changes and update URL hash
    useEffect(() => {
        const pageFromHash = parseInt(window.location.hash.replace('#page=', ''), 10)
        if (!isNaN(pageFromHash)) {
            setCurrentPage(pageFromHash)
            jumpToPage(pageFromHash)
        }
    }, [jumpToPage])

    const handlePrevPage = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1
            setCurrentPage(newPage)
            jumpToPage(newPage)
            window.location.hash = `#page=${newPage}`
        }
    }

    const handleNextPage = () => {
        const newPage = currentPage + 1
        setCurrentPage(newPage)
        jumpToPage(newPage)
        window.location.hash = `#page=${newPage}`
    }

    return (
        <div className="fixed top-10 left-0 right-0 bottom-0 flex flex-col items-center bg-gray-100">
            <div className="border rounded h-[calc(100vh-80px)] w-full overflow-y-scroll mt-4">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/atharvved.pdf"
                        plugins={[
                            defaultLayoutPluginInstance,
                            toolbarPluginInstance,
                            pageNavigationPluginInstance,
                            searchPluginInstance,
                        ]}
                        defaultScale={SpecialZoomLevel.PageFit}
                        scrollMode={ScrollMode.Page}
                        initialPage={currentPage}
                        onDocumentLoad={() => console.log('Document loaded successfully')}
                        renderError={(error) => (
                            <div className="text-red-500">
                                An error occurred while loading the PDF: {error.message}
                            </div>
                        )}
                    />
                </Worker>
            </div>

            <div className="bg-orange-100 w-full p-3 lg:px-20 flex justify-between z-50 fixed bottom-0 left-0">
                <button
                    className="bg-gray-700 w-40 p-2 font-bold text-white px-4 rounded"
                    onClick={handlePrevPage}
                >
                    Previous
                </button>
                <button
                    className="bg-[#8b4513] w-40 font-bold text-white p-2 rounded"
                    onClick={handleNextPage}
                >
                    Next
                </button>
            </div>
               
            {/* Custom Styles */}
            <style jsx>{`
                .rpv-core__search-overlay {
                    max-height: 80vh !important;
                }
                .rpv-core__toolbar .rpv-core__toolbar-item {
                    font-size: 16px; /* Adjust as needed */
                }
            `}</style>
        </div>
    )
}
