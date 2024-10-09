import styles from './BaseInput.module.scss'

interface Props {
  label: string;
  id: string
}

const BaseInput = (props: Props) => {
  return (
    <div className={styles.baseInput}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} />
    </div>
  )
}

export default BaseInput;