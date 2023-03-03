import React from "react";
import s from "./Paginator.module.css"

type PaginatorPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount > 50 ? 900 : props.totalUsersCount) / props.pageSize
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return <div>
        {pages.map((page) => {
            return <span className={props.currentPage === page ? s.selectedPage : ''}
                         key={page}
                         onClick={(e) => props.onPageChanged(page)}>
                       {page}{' '}
                   </span>
        })}
    </div>
}

export default Paginator