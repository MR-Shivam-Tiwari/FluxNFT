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
    const [isInitialized, setIsInitialized] = useState(false)

    // Plugins
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => defaultTabs,
        toolbarPlugin: {
            toolbarSlot: {
                // Remove download and open buttons
                downloadButton: { hidden: true },
                openButton: { hidden: true },
            },
        },
    })
    const toolbarPluginInstance = toolbarPlugin()
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const searchPluginInstance = searchPlugin()

    const { jumpToPage } = pageNavigationPluginInstance
    const { Search } = searchPluginInstance

    useEffect(() => {
        const initializePage = () => {
            const pageFromHash = parseInt(window.location.hash.replace('#page=', ''), 10)
            const storedPage = parseInt(localStorage.getItem('currentPage') || '0', 10)
            
            let pageToSet = 0
            if (!isNaN(pageFromHash) && pageFromHash >= 0) {
                pageToSet = pageFromHash
            } else if (!isNaN(storedPage) && storedPage >= 0) {
                pageToSet = storedPage
            }

            setCurrentPage(pageToSet)
            if (jumpToPage) {
                jumpToPage(pageToSet)
            }
            localStorage.setItem('currentPage', pageToSet.toString())
            if (window.location.hash !== `#page=${pageToSet}`) {
                window.location.hash = `#page=${pageToSet}`
            }
            setIsInitialized(true)
        }

        if (!isInitialized) {
            initializePage()
        }

        const handleHashChange = () => {
            if (isInitialized) {
                const pageFromHash = parseInt(window.location.hash.replace('#page=', ''), 10)
                if (!isNaN(pageFromHash) && pageFromHash >= 0) {
                    setCurrentPage(pageFromHash)
                    if (jumpToPage) {
                        jumpToPage(pageFromHash)
                    }
                    localStorage.setItem('currentPage', pageFromHash.toString())
                }
            }
        }

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [jumpToPage, isInitialized])

    const handlePageChange = (newPage) => {
        if (newPage < 0) return // Avoid negative page numbers
        setCurrentPage(newPage)
        localStorage.setItem('currentPage', newPage.toString())
        window.location.hash = `#page=${newPage}`
    }
    
    const handlePrevPage = () => {
        handlePageChange(currentPage - 1)
    }
    
    const handleNextPage = () => {
        handlePageChange(currentPage + 1)
    }

    return (
        <div className="bg-gray-200">
            <div className="my-3 lg:mx-2 flex flex-col items-center">
                <div className="border rounded h-[calc(100vh-80px)] w-full overflow-y-scroll mt-4">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl="/yajurveda.pdf"
                            plugins={[
                                defaultLayoutPluginInstance,
                                toolbarPluginInstance,
                                pageNavigationPluginInstance,
                                searchPluginInstance,
                            ]}
                            defaultScale={SpecialZoomLevel.PageFit}
                            scrollMode={ScrollMode.Page}
                            initialPage={currentPage}
                            onPageChange={({ currentPage }) => {
                                setCurrentPage(currentPage)
                                localStorage.setItem('currentPage', currentPage.toString())
                                window.location.hash = `#page=${currentPage}`
                            }}
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
                        disabled={currentPage === 0}
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
                        max-height: 320px !important;
                    }
                    .rpv-core__toolbar .rpv-core__toolbar-item {
                        font-size: 16px;
                    }
                `}</style>
            </div>
        </div>
    )
}