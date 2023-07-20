import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';
import { CategoryIcon } from '@/assets/svg';

interface Props {
    value: string;
}

const CategoryLabel = (props: Props) => {
    const { value } = props;

    return (
        <LabelWrapper>
            <CategoryIcon
                width={14}
                height={14}
                fill={themedPalette.primary_700}
            />
            <Label
                onClick={() => {
                    location.href = `/blog?category=${value.toLowerCase()}`;
                }}
            >
                {value}
            </Label>
        </LabelWrapper>
    );
};

export default CategoryLabel;

const LabelWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themedPalette.primary_100};
    border-radius: 20px;
    width: fit-content;
    padding: 4px 12px;
`;

const Label = styled.div`
    color: ${themedPalette.primary_700};
    font-size: 14px;
    margin-left: 6px;
`;
