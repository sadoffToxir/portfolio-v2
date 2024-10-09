import './BaseTextarea.scss'

interface Props {
  label: string;
  id: string
}

const BaseTextarea = (props: Props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea id={props.id} />
    </>
  )
}

export default BaseTextarea;