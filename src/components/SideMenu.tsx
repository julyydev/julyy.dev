import styled from 'styled-components';
import Profile from './Profile';
import BlogCategory from './Category';
import { EmailIcon, GithubIcon } from '@/assets/svg';
import Divider from './common/Divider';

const SideMenu = () => {
    return (
        <Wrapper>
            <Profile />
            <SNS>
                <IconWrapper href="https://github.com/julyydev">
                    <GithubIcon width={22} height={22} />
                </IconWrapper>
                <IconWrapper href="mailto:kjyjykwak@gmail.com">
                    <EmailIcon width={22} height={22} fill="#eb4d4b" />
                </IconWrapper>
            </SNS>
            <Divider width="100%" />
            <BlogCategory />
        </Wrapper>
    );
};

export default SideMenu;

const Wrapper = styled.aside`
    width: 10%;
    height: 100%;
    padding: 20px 40px;
    position: fixed;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

const SNS = styled.div`
    width: auto;
    height: 40px;
    padding: 0 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconWrapper = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;
