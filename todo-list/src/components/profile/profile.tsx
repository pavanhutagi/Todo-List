import "./styles.css";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <Image src="/images/profile.png" alt="profile" height={55} width={55} />
      </div>
    </>
  );
}
