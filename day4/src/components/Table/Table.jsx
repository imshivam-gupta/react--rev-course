import { useState } from 'react';
import styles from './style.module.css';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function Table({rows,columns}) {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMSPERPAGE = 4;
    const totalPages = Math.ceil(rows.length / ITEMSPERPAGE);
    // 2.3 pages X -> 3 Pages

    // 9
    // 0-3  4-7 8
    const startInd = (currentPage-1)*ITEMSPERPAGE;
    const endIndex = startInd+ITEMSPERPAGE-1+1;

    const displayedRows = rows.slice(startInd,endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
    }

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((col, i) => (
                            <th key={i}>{col.label}</th>
                        ))}
                    </tr>

                </thead>


                <tbody>


                    {displayedRows.map((row, i) => (
                        <tr key={i}>
                            {columns.map((col, j) => (
                                <td key={j}>{row[col.value]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                >
                    <ChevronLeft />
                </button>

                {Array.from({length:totalPages},(_,index)=>(
                    <button 
                        key={index+1}
                        onClick={()=>handlePageChange(index+1)}
                    >{index+1}</button>
                ))}

                <button
                    disabled={currentPage===totalPages}
                    onClick={handleNextPage}
                >
                    <ChevronRight />
                </button>
            </div>
        </>
    )
}