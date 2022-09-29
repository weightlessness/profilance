import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PaginatorInfo = {
    count: number
    currentPage: number
    firstItem: number
    hasMorePages: boolean
    lastItem: number
    lastPage: number
    perPage: number
    total: number
}

export type ShortUrl = {
    id: string
    url: string
    short_url: string
    clicks: number
    created_at: string
    updated_at: string
}

type initialStateType = {
    short_urls: {
        paginatorInfo: PaginatorInfo,
        data: ShortUrl[]
    },
    sessionLinks: {
        links: ShortUrl[]
    }

}

const initialState: initialStateType = {
    short_urls: {
        paginatorInfo: {
            count: 0,
            currentPage: 0,
            firstItem: 0,
            hasMorePages: false,
            lastItem: 0,
            lastPage: 0,
            perPage: 0,
            total: 0,
        },
        data: []
    },
    sessionLinks: {
        links: []
    }
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        init: (
            state: initialStateType,
            action: PayloadAction<{ data: initialStateType }>
        ) => {
            return {
                ...state,
                ...action.payload.data
            }
        },
        addLink: (
            state: initialStateType,
            action: PayloadAction<{ link: ShortUrl }>
        ) => {
            const link = action.payload.link
            if (!state.short_urls.paginatorInfo.hasMorePages) {
                let newLink = {
                    ...link,
                    id: (state.short_urls.paginatorInfo.lastItem + 1).toString()
                }
                state.short_urls.data.push(newLink)
            }
            link.id = (state.sessionLinks.links.length + 1).toString()
            state.sessionLinks.links.push(link)
        },
        newClick: (
            state: initialStateType,
            action: PayloadAction<{ link: ShortUrl }>
        ) => {
            const clickedLink = action.payload.link
            state.short_urls.data.forEach(link => {if (link.short_url === clickedLink.short_url) {
                link.clicks = clickedLink.clicks
            }})
            state.sessionLinks.links.forEach(link => {if (link.short_url === clickedLink.short_url) {
                link.clicks = clickedLink.clicks
            }})
        },
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

