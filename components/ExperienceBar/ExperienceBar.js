import Style from './style.module.scss'

export default function ExperienceBar() {
    return (
        <header className={Style.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: '60%' }}></div>
                <span
                    style={{ left: '60%' }}
                    className={Style.currentExperience}>
                    300 xp
                    </span>
            </div>
            <span>600 px</span>
        </header>
    )
}