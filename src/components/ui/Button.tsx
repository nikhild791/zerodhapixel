import clsx from 'clsx';

interface ButtonTypes {
    width:string;
    text:string;
}

const Button = (props:ButtonTypes) => {
  return (
    <div className={clsx('cursor-pointer  bg-buttonColor px-7 py-2 rounded-sm text-white text-center  text-xl leading-6 font-medium',
        {
            [`w-${props.width}`]:props.width
        })}>{props.text}</div>



  )

}

export default Button