// navbar
declare interface Nav{
    title: string
    href: string
}
// homedeclare
declare interface Home{
    toptitle: string
    title:string
    description: string
    buttonleft: string
    buttonright: string
    totaldownloads: string
    totalusers: string
    mainimage: string
}
// props
declare interface LayoutProps{
    children: ReactNode
}

// contentData declare
declare interface ContentDataTypes{
    navbar: Nav[]
    home: Home
}