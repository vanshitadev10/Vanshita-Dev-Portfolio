import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './Card.module.css';

const Card = props => {

    const modeCtx = useContext(ModeChangeContext);

    return <div className={`${styles.card} ${props.className}`} style={{ backgroundColor: !modeCtx.mode ? 'rgb(220, 220, 220)' : '#1d212d', borderColor: !modeCtx.mode ? '#000' : ' var(--light_purple)' }}>{props.children}</div>;

};

export default Card;