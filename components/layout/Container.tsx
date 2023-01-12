import { ReactNode, FC } from "react";
const Container: FC<LayoutProps> = ({children}) => {
  return (
    <div className="w-10/12 mx-auto py-3">
        {children}
    </div>
  )
}

export default Container