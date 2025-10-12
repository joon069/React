import { React } from "react";

// 이미지 URL 헬퍼 (그대로 사용)
const getImageUrl = (id, size = "s") => `https://i.imgur.com/${id}${size}.jpg`;

// 🔹 추출된 재사용 컴포넌트
const Profile = ({ name, imageId, profession, awards, discovered }) => (
  <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>{profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>({awards.join(", ")})
      </li>
      <li>
        <b>Discovered: </b>{discovered}
      </li>
    </ul>
  </section>
);

export default Profile;