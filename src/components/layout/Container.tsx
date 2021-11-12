import {PropsWithChildren, ReactNode} from "react";
import classNames from 'classnames'
interface ContainerProps {
    className?: string
    children: ReactNode
}


export function Container(props: PropsWithChildren<ContainerProps>): JSX.Element {
    return <div className={classNames('container mx-auto px-4 sm:px-6 lg:px-10', props.className)}>
        {props.children}
    </div>
}
