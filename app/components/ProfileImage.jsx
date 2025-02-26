export default function ProfileImage({ image, name }) {
    return (
      <img
        src={image}
        alt={name}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }
  