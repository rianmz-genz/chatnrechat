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
// brands 
declare interface Brands{
    imageUrl: string
}
// features
declare interface Features{
    imageUrl: string
    title: string
    description: string
}
declare interface FeatureSection{
    toptitle: string
    title:string
    description: string
    features: Features[]
}
// tech
declare interface Techs{
    emoticon: string
    title: string
    description: string
}
declare interface TechSection{
    toptitle: string
    title:string
    description: string
    technology: Techs[]
}   
// props
declare interface LayoutProps{
    children: ReactNode
}
declare interface CardProps{
    imageUrl: string
    title: string
    description: string
}

// contentData declare
declare interface ContentDataTypes{
    navbar: Nav[]
    home: Home
    brand: Brands[]
    featuresection: FeatureSection
    techs: TechSection
}