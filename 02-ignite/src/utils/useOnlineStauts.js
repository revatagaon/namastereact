import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStauts] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStauts(false)
    })
    window.addEventListener("online", () => {
      setOnlineStauts(true)
    })
  }, [])

  return onlineStatus;
}
export default useOnlineStatus;