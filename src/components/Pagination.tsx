import {
    DoubleLeftAngleIcon,
    DoubleRightAngleIcon,
    LeftAngleIcon,
    RightAngleIcon,
} from '@/assets/svg';
import { numberPagesViewOneTime } from '@/constants/page';
import manrope from '@/styles/fonts/manrope';
import { themedPalette } from '@/styles/themes';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
    postNumber: number;
    currentPage: number;
}

const Pagination = (props: Props) => {
    const { postNumber, currentPage } = props;
    const pageNumbers: number[] = Array.from(
        { length: (postNumber - 1) / numberPagesViewOneTime + 1 },
        (_, index) => index + 1,
    );
    const router = useRouter();

    const isActiveAngleIcon = (direction: 'left' | 'right') => {
        if (direction === 'left') return currentPage !== 1;
        else return currentPage !== pageNumbers.length;
    };

    const removePageParams = () => {
        const obj = { ...router.query };
        const { page, ...newObj } = obj;
        return newObj;
    };

    const navigate = (targetPage: number) => {
        if (targetPage == 1)
            router.replace({
                pathname: '/blog',
                query: removePageParams(),
            });
        else
            router.replace({
                pathname: '/blog',
                query: { ...router.query, page: targetPage },
            });
    };

    const handleAngleClick =
        (direction: 'left' | 'right', type: 'single' | 'double') => () => {
            if (!isActiveAngleIcon(direction)) return;
            if (direction === 'left') {
                if (type === 'double') navigate(1);
                else navigate(currentPage - 1);
            } else {
                if (type === 'double') navigate(pageNumbers.length);
                else navigate(currentPage + 1);
            }
        };

    return (
        <Wrapper>
            <IconWrapper isAbled={isActiveAngleIcon('left')}>
                <DoubleLeftAngleIcon
                    width={15}
                    height={15}
                    onClick={handleAngleClick('left', 'double')}
                />
            </IconWrapper>
            <IconWrapper isAbled={isActiveAngleIcon('left')}>
                <LeftAngleIcon
                    width={15}
                    height={15}
                    onClick={handleAngleClick('left', 'single')}
                />
            </IconWrapper>
            <PageNumbers>
                {pageNumbers.map(pageNumber => (
                    <PageNumberWrapper
                        key={`page_number_${pageNumber}`}
                        isActive={pageNumber === currentPage}
                    >
                        <PageNumber
                            isActive={pageNumber === currentPage}
                            onClick={() => navigate(pageNumber)}
                        >
                            {pageNumber}
                        </PageNumber>
                    </PageNumberWrapper>
                ))}
            </PageNumbers>
            <IconWrapper isAbled={isActiveAngleIcon('right')}>
                <RightAngleIcon
                    width={15}
                    height={15}
                    onClick={handleAngleClick('right', 'single')}
                />
            </IconWrapper>
            <IconWrapper isAbled={isActiveAngleIcon('right')}>
                <DoubleRightAngleIcon
                    width={15}
                    height={15}
                    onClick={handleAngleClick('right', 'double')}
                />
            </IconWrapper>
        </Wrapper>
    );
};

export default Pagination;

const Wrapper = styled.div`
    width: fit-content;
    height: 60px;
    margin-top: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const PageNumbers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    border-radius: 20px;
    margin: 0px 5px;
`;

interface PageNumberProps {
    isActive: boolean;
}

const PageNumberWrapper = styled.div<PageNumberProps>`
    margin: 0px 10px;
    border-bottom: ${props => {
        if (props.isActive) return '2px solid #9980fa';
    }};
`;

const PageNumber = styled.div<PageNumberProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-family: ${manrope.normal.style.fontFamily};
    color: ${props => {
        if (props.isActive) return '#9980fa';
        else return themedPalette.text3;
    }};

    :hover {
        cursor: pointer;
        background-color: #e4deff;
        color: #9980fa;
    }
`;

interface IconProps {
    isAbled: boolean;
}

const Icon = styled.div<IconProps>`
    position: relative;
    padding: 1px;
    margin: 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    fill: ${props => {
        if (props.isAbled) return themedPalette.text3;
        else return themedPalette.bg_element4;
    }};

    :hover {
        cursor: ${props => {
            if (props.isAbled) return 'pointer';
        }};
        background-color: ${props => {
            if (props.isAbled) return '#e4deff';
        }};
        fill: ${props => {
            if (props.isAbled) return '#9980fa';
        }};
    }
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: inherit;
    svg {
        display: block;
        fill: inherit;
    }
`;

interface IconWrapperProps {
    children: JSX.Element;
    isAbled: boolean;
}

const IconWrapper = (props: IconWrapperProps) => {
    const { children, isAbled } = props;
    return (
        <Icon isAbled={isAbled}>
            <Positioner>{children}</Positioner>
        </Icon>
    );
};