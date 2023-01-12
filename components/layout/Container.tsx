import { ReactNode, FC } from "react";
const Container: FC<LayoutProps> = ({children}) => {
  return (
    <div className="w-10/12 mx-auto z-10">
        {children}
    </div>
  )
}

export default Container