import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';
import { TagIcon } from '@/assets/svg';

interface Props {
    value: string;
}

const TagLabel = (props: Props) => {
    const { value } = props;

    return (
        <LabelWrapper>
            <TagIcon width={14} height={14} fill={themedPalette.text2} />
            <Label>{value}</Label>
        </LabelWrapper>
    );
};

export default TagLabel;

const LabelWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themedPalette.input};
    border-radius: 7px;
    margin-right: 8px;
    padding: 4px 8px;
`;

const Label = styled.div`
    color: ${themedPalette.text2};
    font-size: 14px;
    margin-left: 6px;
`;
