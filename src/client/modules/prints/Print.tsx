import { FC } from 'react'

export type PrintProps = {
    id: string
    title: string
    creditline: string
    copyright: string
    primaryimageurl?: string
}

export const Print: FC<PrintProps> = (props) => {
    const { title, creditline, copyright, primaryimageurl } = props
    return (
        <div>
            <div>{title}</div>
            <div>{creditline}</div>
            <div>{copyright}</div>            
                        
            <img src={primaryimageurl} alt={title}/>
        </div>
    )
}
