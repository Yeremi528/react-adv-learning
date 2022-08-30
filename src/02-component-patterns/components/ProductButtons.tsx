import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties;
    maxCount?: number;
}

export const ProductButtons = ({ className, style,maxCount }: Props) => {

    //TODO: maxCount
    const { increaseBy, counter } = useContext( ProductContext );
   
    // TODO: isMaxReached = useCallBack, dependencias [counter,maxCounter]
    const isMaxReached = useCallback(() => 
    !!maxCount && counter === maxCount,[counter,maxCount])

    useCallback(
      () => !!maxCount && counter === maxCount      ,
      [counter,maxCount],
    )
    
    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ isMaxReached() ?   `${styles.disabled}` : `${styles.buttonAdd}`}
                
                onClick={ () => increaseBy( +1 )}  > + </button>
        </div>
    );
}