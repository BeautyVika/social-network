import React, {FC, useEffect} from "react"
import TablePagination from "@mui/material/TablePagination"

type PaginatorPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number, pageSize?: number) => void
}

const Paginator: FC<PaginatorPropsType> = ({currentPage, pageSize,totalUsersCount,onPageChanged}) => {

    // let pagesCount = Math.ceil(props.totalUsersCount > 50 ? 900 : props.totalUsersCount) / props.pageSize
    // let pages: Array<number> = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages = [...pages, i]
    // }
    const [rowsPerPage, setRowsPerPage] = React.useState(pageSize)

    useEffect(() => {
        if (pageSize === rowsPerPage) return
        setRowsPerPage(pageSize)
    }, [pageSize])

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChanged(1, parseInt(event.target.value, 10))
    };
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        onPageChanged(page + 1, rowsPerPage)
    };

    return <TablePagination count={totalUsersCount}
                            component="div"
                            labelRowsPerPage="Users per page:"
                            page={currentPage - 1}
                            rowsPerPage={rowsPerPage}
                            showFirstButton
                            showLastButton
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            onPageChange={handleChangePage}/>

    // return <div>
    //     {pages.map((page) => {
    //         return <span className={props.currentPage === page ? s.selectedPage : ''}
    //                      key={page}
    //                      onClick={(e) => props.onPageChanged(page)}>
    //                    {page}{' '}
    //                </span>
    //     })}
    // </div>
}

export default Paginator