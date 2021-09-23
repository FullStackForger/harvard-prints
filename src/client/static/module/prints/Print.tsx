import React, { FC } from "react"

export type PrintProps = {
    id: string
    title: string
    description: string
    copyright: string
    primaryimageurl?: string
}

export const Print: FC<PrintProps> = (props) => {
    const { title, description, copyright, primaryimageurl } = props
    
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{copyright}</div>            
                        
            <img src={primaryimageurl} />
        </div>
    )
}