import "./UserAvatar.css";

function UserAvatar({ src, fallback, size = "md", className = "" }) {
  const sizeClasses = {
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg"
  };
  
  return (
    <div className={`avatar ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img src={src} alt="User avatar" className="avatar-image" />
      ) : (
        <div className="avatar-fallback">{fallback}</div>
      )}
    </div>
  );
}

export default UserAvatar;