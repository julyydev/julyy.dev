import {
    DoubleLeftAngleIcon,
    DoubleRightAngleIcon,
    LeftAngleIcon,
    RightAngleIcon,
} from '@/assets/svg';
import { numberPagesViewOneTime } from '@/constants/page';
import manrope from '@/styles/fonts/manrope';
import { themedPalette } from '@/styles/themes';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Props {
    category: string;
    postNumber: number;
    currentPage: number;
}

const Pagination = (props: Props) => {
    const { category, postNumber, currentPage } = props;
    const pageNumbers: number[] = Array.from(
        { length: (postNumber - 1) / numberPagesViewOneTime + 1 },
        (_, index) => index + 1,
    );
    const router = useRouter();

    const isActiveAngleIcon = (direction: 'left' | 'right') => {
        if (direction === 'left') return currentPage !== 1;
        else return currentPage !== pageNumbers.length;
    };

    const navigate = (targetPage: number) => {
        if (targetPage == 1) {
            if (category === '') router.replace('/blog');
            else router.replace(`/blog?category=${category}`);
        } else {
            if (category === '') router.replace(`/blog?page=${targetPage}`);
            else
                router.replace(`/blog?category=${category}&page=${targetPage}`);
        }
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
            <IconWrapper
                isAble={isActiveAngleIcon('left')}
                onClick={handleAngleClick('left', 'double')}
            >
                <DoubleLeftAngleIcon width={15} height={15} />
            </IconWrapper>
            <IconWrapper
                isAble={isActiveAngleIcon('left')}
                onClick={handleAngleClick('left', 'single')}
            >
                <LeftAngleIcon width={15} height={15} />
            </IconWrapper>
            <PageNumbers>
                {pageNumbers.map(pageNumber => (
                    <PageNumberWrapper
                        key={`page_number_${pageNumber}`}
                        $isActive={pageNumber === currentPage}
                    >
                        <PageNumber
                            $isActive={pageNumber === currentPage}
                            onClick={() => navigate(pageNumber)}
                        >
                            {pageNumber}
                        </PageNumber>
                    </PageNumberWrapper>
                ))}
            </PageNumbers>
            <IconWrapper
                isAble={isActiveAngleIcon('right')}
                onClick={handleAngleClick('right', 'single')}
            >
                <RightAngleIcon width={15} height={15} />
            </IconWrapper>
            <IconWrapper
                isAble={isActiveAngleIcon('right')}
                onClick={handleAngleClick('right', 'double')}
            >
                <DoubleRightAngleIcon width={15} height={15} />
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
    margin: 0 5px;
`;

interface PageNumberProps {
    $isActive: boolean;
}

const PageNumberWrapper = styled.div<PageNumberProps>`
    margin: 0 10px;
    border-bottom: ${props => {
        if (props.$isActive) return `2px solid ${themedPalette.primary_500}`;
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
        if (props.$isActive) return themedPalette.primary_500;
        else return themedPalette.text3;
    }};

    &:hover {
        cursor: pointer;
        background-color: ${themedPalette.primary_100};
        color: ${themedPalette.primary_500};
    }
`;

interface IconProps {
    $isAble: boolean;
}

const Icon = styled.div<IconProps>`
    position: relative;
    padding: 1px;
    margin: 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    fill: ${props => {
        if (props.$isAble) return themedPalette.text3;
        else return themedPalette.text4;
    }};

    &:hover {
        cursor: ${props => {
            if (props.$isAble) return 'pointer';
        }};
        background-color: ${props => {
            if (props.$isAble) return themedPalette.primary_100;
        }};
        fill: ${props => {
            if (props.$isAble) return themedPalette.primary_500;
        }};
    }
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
        display: block;
    }
`;

interface IconWrapperProps {
    children: JSX.Element;
    isAble: boolean;
    onClick: () => void;
}

const IconWrapper = (props: IconWrapperProps) => {
    const { children, isAble, onClick } = props;
    return (
        <Icon $isAble={isAble} onClick={onClick}>
            <Positioner>{children}</Positioner>
        </Icon>
    );
};
