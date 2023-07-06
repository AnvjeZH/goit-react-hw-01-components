import css from './FriendList.module.css'

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
