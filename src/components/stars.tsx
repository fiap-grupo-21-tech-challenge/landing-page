import { FaStar } from "react-icons/fa";

export const Stars = () => {
  const stars = [1, 2, 3, 4, 5].map((item) => <FaStar key={item} size={20} color="orange" />)

  return (
    <div className="flex gap-1">
      {stars}
    </div>
  )
}