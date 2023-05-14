import styled from 'styled-components';
import ProfileImage from '../assets/image/profile.png';
import Image from 'next/image';

const Profile = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <Image
                    src={ProfileImage}
                    width={150}
                    height={150}
                    alt="profile"
                />
            </ProfileWrapper>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileWrapper = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e4deff;
`;
