import sprite from 'assets/sprite.svg';

export default function Logo({size, fill='var(--accent-green)', stroke='var(--main-light-color)'}) {
    return <svg width={size} height={size} fill={fill} stroke={stroke}>
            <use href={`${sprite}#icon-footer-logo`}></use>    
        </svg>
        
};