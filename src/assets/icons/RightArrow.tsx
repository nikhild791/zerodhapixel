interface RightArrowTypes {
    size:"sm" | "md" | "lg",
}

const sizeValue = {
    "sm":"size-4",
    "md":"size-6",
    "lg":"size-8"
}

const RightArrow = (props:RightArrowTypes) => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#387ed1" viewBox="0 0 24 24" stroke-width="1.5" stroke="#387ed1" className= {`${sizeValue[props.size]}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

    </>
  )
}

export default RightArrow