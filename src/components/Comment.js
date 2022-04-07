function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div className="UserInfo">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="CommentText">
        {props.text}
      </div>
      <div className="CommentDate">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;