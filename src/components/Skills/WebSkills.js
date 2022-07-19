import { useContext } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import Developer1Animation from './Developer1';
import BulletAnimationDark from '../shared/BulletDark';
import BulletAnimationLight from '../shared/BulletLight';
import nextjs from '../../assets/nextjs.png';
import reactjs from '../../assets/reactjs.png';
import reduxjs from '../../assets/redux.png';
import typescript from '../../assets/typescript.png';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import cpp from '../../assets/c-plus-plus.png';
import cLang from '../../assets/c-program.png'
import styles from './Skills.module.css';


const WebSkills = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.skill} id='skills' style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
            <div className={styles.animation}>
                <Developer1Animation />
            </div>
            <div>
                <h1 className={styles.heading}>Web Skills</h1>
                <div className={styles.info}>
                    <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                        <div className={styles.bullet}>{!modeCtx.mode ? <BulletAnimationLight /> : <BulletAnimationDark />}</div>
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Develop innovative and responsive website layouts for dynamic user experiences.</p>
                    </div>
                    <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                        <div className={styles.bullet}>{!modeCtx.mode ? <BulletAnimationLight /> : <BulletAnimationDark />}</div>
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Strong preference for easy to use and intuitive UI/UX.</p>
                    </div>
                    <div className={styles.points} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                        <div className={styles.bullet}>{!modeCtx.mode ? <BulletAnimationLight /> : <BulletAnimationDark />}</div>
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Build websites with best practices for lag free interactions and fast load times. </p>
                    </div>
                </div>
                <div className={styles.images}>
                    <div>
                        <img className={styles.img} src={nextjs} alt='Next.js' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Next.js</p>
                    </div>
                    <div>
                        <img src={reactjs} alt='React.js' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>React.js</p>
                    </div>
                    <div>
                        <img src={reduxjs} alt='Redux.js' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Redux.js</p>
                    </div>
                    <div>
                        <img src={typescript} alt='Typescript' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Typescript</p>
                    </div>
                    <div>
                        <img src={javascript} alt='Javascript' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Javascript</p>
                    </div>
                    <div>
                        <img src={css} alt='CSS' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>CSS3</p>
                    </div>
                    <div>
                        <img src={html} alt='HTML' />
                        <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>HTML5</p>
                    </div>
                </div>
                <div className={`${styles.images} ${styles.program}`}>
                    <h1>Programming Skills:</h1>
                    <div>
                        <img src={cpp} alt='C++' />
                        <p>C++</p>
                    </div>
                    <div>
                        <img src={cLang} alt='C' />
                        <p>C</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default WebSkills;