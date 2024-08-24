import { ElementProps } from "@/@types/common"

type ChatListProps = ElementProps;

const ReservationsList = ({...props}:ChatListProps) => {
  return (
    <section {...props}>ReservationsList</section>
  )
}

export default ReservationsList