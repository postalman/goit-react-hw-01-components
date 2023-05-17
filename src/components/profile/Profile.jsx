import PropTypes from 'prop-types'
import { ContainerCSS, DescriptionCSS, StatsCss} from 'components/profile/Profile.styled';

export const User = ({profile}) => {
    const {username, tag, location, avatar, stats} = profile;
    return (
        <ContainerCSS>
            <DescriptionCSS>
                <img
                src={avatar}
                alt="User avatar"
                class="avatar"
                />
                <p id="name">{username}</p>
                <p id="tag">@{tag}</p>
                <p id="location">{location}</p>
            </DescriptionCSS>

            <StatsCss>
                <li>
                <span id="label">Followers</span>
                <span id="quantity">{stats.followers}</span>
                </li>
                <li>
                <span id="label">Views</span>
                <span id="quantity">{stats.views}</span>
                </li>
                <li>
                <span id="label">Likes</span>
                <span id="quantity">{stats.likes}</span>
                </li>
            </StatsCss>
        </ContainerCSS>
    )
}

User.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape ({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }), 

}