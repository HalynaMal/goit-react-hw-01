import css from "./Profile.module.css"

const Profile = ({image, stats, name, tag, location}) => {
  return (
    <div className={css.profileCard}>
    <div>
        <img className={ css.profileImage}
          src={image}
          alt={stats}
        />
        <p className={css.profileName}>{name }</p>
        <p className={css.profileInfo}>@{tag}</p>
        <p className={css.profileInfo}>{location}</p>
    </div>
  
    <ul className={css.statsList}>
      <li className={css.statsItem}>
        <span className={css.statsName}>Followers</span>
          <span className={css.statsName}>{ stats.followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsName}>Views</span>
          <span className={css.statsName}>{ stats.views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsName}>Likes</span>
          <span className={css.statsName}>{ stats.likes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile