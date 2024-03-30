export const Button = ({ ...props }) => {
  return (
    props.isShow && (
      <button className="bg-secondary hover:bg-third active:bg-third z-1 p-3 mt-4 text-white font-bold rounded-lg w-80">
        {props.title}
      </button>
    )
  );
};
