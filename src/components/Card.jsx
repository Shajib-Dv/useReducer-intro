/** @format */

const Card = ({ children }) => {
  return (
    <div className="w-2/5 h-40 flex flex-col justify-center items-center p-4 bg-purple-500 rounded-md shadow-xl text-center">
      {children}
    </div>
  );
};

export default Card;
