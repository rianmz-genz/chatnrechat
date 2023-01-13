import { ReactNode, FC } from "react";
const Container: FC<LayoutProps> = ({children}) => {
  return (
    <div className="lg:w-10/12 w-full container mx-auto py-3">
        {children}
    </div>
  )
}

export default Container