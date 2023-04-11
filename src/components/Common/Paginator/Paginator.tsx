import React, {FC, useEffect} from "react"
import TablePagination from "@mui/material/TablePagination"

type PaginatorPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number, pageSize?: number) => void
}

const Paginator: FC<PaginatorPropsType> = ({currentPage, pageSize,totalUsersCount,onPageChanged}) => {

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
}

export default Paginator