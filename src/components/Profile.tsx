import styled from 'styled-components';
import ProfileImage from '../assets/image/profile.jpeg';
import Image from 'next/image';
import { themedPalette } from '@/styles/themes';

const Profile = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <Image
                    src={ProfileImage}
                    width={150}
                    height={150}
                    alt="profile"
                    priority
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
    border: 1px solid ${themedPalette.text4};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themedPalette.primary_100};
`;
