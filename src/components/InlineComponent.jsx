import styles from './inlinecomponent.module.css';

// const header = {color: "blue", fontSize: "130px"};
export default function InlineComponent() {
    return (
        <div>
            {/* inline styling */}
            {/* <h1 style={header}>Inline Component</h1> */}

            {/* css spread stylesheet */}
            <h1 className={styles.header}>Inline Component</h1>
        </div>
    )
}